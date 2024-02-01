// NOTE: Mock global package.json
jest.mock(
  './package.json',
  () => ({
    version: '9.9.9',
  }),
  { virtual: true },
)
