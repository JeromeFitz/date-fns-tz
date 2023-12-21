export function convertLocaleToConst(input: string): string {
  // console.dir(`jfldakjfkldasjkldajkladsj`)
  // console.dir(input)
  return input.replace(/-([a-zA-Z])/g, (_, char) => char.toUpperCase());
}
