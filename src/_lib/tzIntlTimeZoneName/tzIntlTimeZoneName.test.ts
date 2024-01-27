import assert from "node:assert";
import { describe, it } from "vitest";
import { tzIntlTimeZoneName } from "./index";

describe("tzIntlTimeZoneName", function () {
  it("returns the short time zone name", function () {
    const date = new Date("2014-10-25T13:46:20Z");
    const timeZone = "Europe/Paris";
    const result = tzIntlTimeZoneName("short", date, { timeZone });

    // When no locale is specified the system locale is used
    const expectedResult = Intl.DateTimeFormat(undefined, {
      timeZone,
      timeZoneName: "short",
    })
      .format(date)
      .match(/ [\w-+ ]+$/)[0]
      .trim();

    assert.equal(result, expectedResult);
  });

  it("returns year through second tokens of the local date in the time zone", function () {
    const date = new Date("2014-10-25T13:46:20Z");
    const timeZone = "Europe/Paris";
    const result = tzIntlTimeZoneName("long", date, { timeZone });

    // When no locale is specified the system locale is used
    const expectedResult = Intl.DateTimeFormat(undefined, {
      timeZone,
      timeZoneName: "long",
    })
      .format(date)
      .match(/ [\w-+ ]+$/)[0]
      .trim();

    assert.equal(result, expectedResult);
  });

  it("returns the short time zone name in the specified locale", function () {
    const locale = { code: "en-GB" };
    const date = new Date("2014-10-25T13:46:20Z");
    const timeZone = "Europe/Paris";
    const result = tzIntlTimeZoneName("short", date, { timeZone, locale });
    assert.equal(result, "CEST");
  });

  it("returns year through second tokens of the local date in the time zone", function () {
    const locale = { code: "en-GB" };
    const date = new Date("2014-10-25T13:46:20Z");
    const timeZone = "Europe/Paris";
    const result = tzIntlTimeZoneName("long", date, { timeZone, locale });
    assert.equal(result, "Central European Summer Time");
  });

  it("an invalid time zone throws a range error", function () {
    const locale = { code: "en-GB" };
    const date = new Date("2014-10-25T13:46:20Z");
    const timeZone = "bad/timeZone";
    assert.throws(
      tzIntlTimeZoneName.bind(null, "long", date, { timeZone, locale }),
      RangeError,
    );
  });

  it("returns the short time zone name in the vi locale", function () {
    const locale = { code: "vi" };
    const date = new Date("2014-10-25T13:46:20Z");
    const timeZone = "Europe/Paris";
    const result = tzIntlTimeZoneName("short", date, { timeZone, locale });
    assert.equal(result, "GMT+2");
  });
});
