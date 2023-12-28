/**
 * Returns the formatted time zone name of the provided `timeZone` or the current
 * system time zone if omitted, accounting for DST according to the UTC value of
 * the date.
 */
function tzIntlTimeZoneName(
  length: string,
  date: Date,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  options: { timeZone: string; locale?: any },
): string {
  const dtf = getDTF(length, options.timeZone, options.locale);
  // note: always true unless called
  return dtf.formatToParts()
    ? partsTimeZone(dtf, date)
    : hackyTimeZone(dtf, date);
}

function partsTimeZone(dtf: Intl.DateTimeFormat, date: Date): string {
  const formatted = dtf.formatToParts(date);

  for (let i = formatted.length - 1; i >= 0; --i) {
    if (formatted[i].type === "timeZoneName") {
      return formatted[i].value;
    }
  }
}

function hackyTimeZone(dtf: Intl.DateTimeFormat, date: Date): string {
  const formatted = dtf.format(date).replace(/\u200E/g, "");
  const tzNameMatch = / [\w-+ ]+$/.exec(formatted);
  return tzNameMatch ? tzNameMatch[0].substr(1) : "";
}

// If a locale has been provided `en-US` is used as a fallback in case it is an
// invalid locale, otherwise the locale is left undefined to use the system locale.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function getDTF(length: any, timeZone: string, locale: { code: string }): any {
  if (locale && !locale.code) {
    throw new Error(
      "date-fns-tz error: Please set a language code on the locale object imported from date-fns, e.g. `locale.code = 'en-US'`",
    );
  }
  return new Intl.DateTimeFormat(locale ? [locale.code, "en-US"] : undefined, {
    timeZone: timeZone,
    timeZoneName: length,
  });
}

export { tzIntlTimeZoneName };
