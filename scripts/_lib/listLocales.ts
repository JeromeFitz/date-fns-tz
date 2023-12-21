import { readdir } from "fs/promises";
import path from "path";
import {map as _map} from 'lodash'

import _locales from 'date-fns/locale'

const ignorePattern = /^_|\./; // can't start with `_` or have a `.` in it

export interface LocaleFile {
  name: string;
  code: string;
  path: string;
  fullPath: string;
}

export async function listLocales(): Promise<LocaleFile[]> {
  const localesPath: string = path.resolve(process.cwd(), "src/locale");
  const locales: string[] = await readdir(localesPath);

  const __locales = _map(_locales, ((locale: any) => {
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
  }
  }))

  // console.dir(`__locales:`)
  // console.dir(__locales)

  return __locales

  // return locales
  //   .filter((file: string) => !ignorePattern.test(file))
  //   .map((locale: string) => ({
  //     name: locale
  //       .split("-")
  //       .map((word, index) =>
  //         index === 0 ? word : word[0].toUpperCase() + word.slice(1),
  //       )
  //       .join(""),
  //     code: locale,
  //     path: `./${locale}`,
  //     fullPath: `./src/locale/${locale}/index.ts`,
  //   }));
}
