import type { Day, FirstWeekContainsDate } from "date-fns";
import type { Locale } from "date-fns/locale";

type OptionsWithTZ = {
  weekStartsOn?: Day;
  firstWeekContainsDate?: FirstWeekContainsDate; // 1 | 4
  // firstWeekContainsDate?: 1 | 2 | 3 | 4 | 5 | 6 | 7;
  additionalDigits?: 0 | 1 | 2;
  timeZone?: string;
  locale?: Locale;
  includeSeconds?: boolean;
  addSuffix?: boolean;
  unit?: "second" | "minute" | "hour" | "day" | "month" | "year";
  roundingMethod?: "floor" | "ceil" | "round";
  awareOfUnicodeTokens?: boolean;
  useAdditionalDayOfYearTokens?: boolean;
  useAdditionalWeekYearTokens?: boolean;
};

export type { OptionsWithTZ };
