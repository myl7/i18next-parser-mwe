module.exports = {
  createOldCatalogs: false,
  defaultNamespace: 'common',
  defaultValue: (lng, _ns, key) => (lng === 'en' ? key : ''),
  keySeparator: false,
  namespaceSeparator: false,
  pluralSeparator: '——',
  contextSeparator: '——',
  lineEnding: 'lf',
  locales: ['en'],
  output: 'public/locales/$LOCALE/$NAMESPACE.json',
  input: ['**/*.{js,jsx}', '!**/node_modules/**'],
  sort: true,
}
