import { readdir } from "fs/promises";
import path from "path";
import { filter as _filter, map as _map } from "lodash";

import _locales from "date-fns/locale";

const ignorePattern = /^_|\./; // can't start with `_` or have a `.` in it

export interface LocaleFile {
  name: string;
  code: string;
  path: string;
  fullPath: string;
}

export async function listLocales(): Promise<LocaleFile[]> {
  const localesPath: string = path.resolve(process.cwd(), "src/locale");
  // const locales: string[] = await readdir(localesPath);

  const _localesFiltered = _filter(
    _locales,
    (file: string) => !ignorePattern.test(file),
  );
  return _map(_localesFiltered, (locale: any) => {
    return {
      name: locale.code
        .split("-")
        .map((word, index) =>
          index === 0 ? word : word[0].toUpperCase() + word.slice(1),
        )
        .join(""),
      code: locale.code,
      path: `./${locale.code}`,
      fullPath: `./src/locale/${locale.code}/index.ts`,
    };
  });
}
