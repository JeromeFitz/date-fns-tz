const path = require("path");

/** @type {import('@date-fns/docs').DateFnsDocs.Config} */
module.exports.config = {
  package: "..",

  json: "../tmp/docs.json",
  categories: [
    "General",
    "Misc",
    "Common Helpers",
    "Conversion Helpers",
    "Interval Helpers",
    "Timestamp Helpers",
    "Millisecond Helpers",
    "Second Helpers",
    "Minute Helpers",
    "Hour Helpers",
    "Day Helpers",
    "Weekday Helpers",
    "Week Helpers",
    "ISO Week Helpers",
    "Month Helpers",
    "Quarter Helpers",
    "Year Helpers",
    "ISO Week-Numbering Year Helpers",
    "Decade Helpers",
    "Generic Helpers",
  ],

  kindsMap: {
    // "src/constants/index.ts": {
    //   kind: "constants",
    //   category: "Misc",
    // },
  },
  staticDocs: [],

  sharedDocs: [
    {
      fullPath: path.join(__dirname, "OptionsWithTZ.js"),
    },
  ],
};
