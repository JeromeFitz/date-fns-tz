// This file is generated automatically by `scripts/build/fp.ts`. Please, don't change it.

import { zonedTimeToUtc as fn } from "../../zonedTimeToUtc/index.js";
// @ts-expect-error No types on this export but this is _okay_
import { convertToFP } from "date-fns/fp/_lib/convertToFP";

export const zonedTimeToUtcWithOptions = convertToFP(fn, 3);
