# i18next-parser-mwe

Minimal workable example to reproduce the bug of i18next-parser that entity encoding is not recognized by the lexer

## Explanation

After running `pnpm run extract` to use i18next-parser to extract the keys, The key in `public/locales/en/common.json` is `I&apos;m myl7!`.
But since `&apos;` is an entity encoding in JSX, to make the `<Trans>` get the translated value correctly, the key should be `I'm myl7!`.

## License

SPDX-License-Identifier: Unlicense
