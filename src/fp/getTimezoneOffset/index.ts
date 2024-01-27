// This file is generated automatically by `scripts/build/fp.ts`. Please, don't change it.

import { getTimezoneOffset as fn } from "../../getTimezoneOffset/index.js";
// @ts-expect-error No types on this export but this is _okay_
import { convertToFP } from "date-fns/fp/_lib/convertToFP";

export const getTimezoneOffset = convertToFP(fn, 2);
