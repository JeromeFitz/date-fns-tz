// This file is generated automatically by `scripts/build/fp.ts`. Please, don't change it.

import { utcToZonedTime as fn } from "../../utcToZonedTime/index.js";
// @ts-expect-error No types on this export but this is _okay_
import { convertToFP } from "date-fns/fp/_lib/convertToFP";

export const utcToZonedTime = convertToFP(fn, 2);
