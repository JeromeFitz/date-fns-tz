import { format } from "../../../../src/format/index.js";
import { isValid } from "date-fns/isValid";
import { parse } from "date-fns/parse";
import { toDate } from "date-fns/toDate";
import type { Locale } from "date-fns/locale";
import formatParseTokens from "./formatParseTokens.js";

export default function renderFormatParse(locale: Locale) {
  return `## \`format\` and \`parse\`

| Title | Token string | Date | \`format\` result | \`parse\` result |
|-|-|-|-|-|
${formatParseTokens
  .map(({ title, tokens, dates, options = {} }) => {
    return tokens
      .map((token, tokenIndex) => {
        return dates
          .map((date, dateIndex) => {
            const dateString = toDate(date).toISOString();
            const formatResult = format(
              date,
              token,
              Object.assign({ locale }, options),
            );
            let parsedDate: Date | "Errored";
            try {
              parsedDate = parse(
                formatResult,
                token,
                date,
                Object.assign({ locale }, options),
              );
            } catch (_err) {
              parsedDate = "Errored";
            }

            const parseResult =
              parsedDate === "Errored"
                ? parsedDate
                : isValid(parsedDate)
                  ? parsedDate.toISOString()
                  : "Invalid Date";

            if (dateIndex === 0 && tokenIndex === 0) {
              return `| ${title} | ${token} | ${dateString} | ${formatResult} | ${parseResult} |`;
            } else if (dateIndex === 0) {
              return `| | ${token} | ${dateString} | ${formatResult} | ${parseResult} |`;
            } else {
              return `| | | ${dateString} | ${formatResult} | ${parseResult} |`;
            }
          })
          .join("\n");
      })
      .join("\n");
  })
  .join("\n")}`;
}
