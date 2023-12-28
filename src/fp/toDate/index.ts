// This file is generated automatically by `scripts/build/fp.ts`. Please, don't change it.

import { toDate as fn } from "../../toDate/index.js";
// @ts-expect-error No types on this export but this is _okay_
import { convertToFP } from "date-fns/fp/_lib/convertToFP";

export const toDate = convertToFP(fn, 2);
