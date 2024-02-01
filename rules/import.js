// const importAlphabetize = { order: 'asc' }; // * Alphabetize imports
// const importOrder = [
//   'type', // * import type
//   'builtin', // * import react
//   'external', // * import from node_modules
//   'internal', // * import from src
//   'parent', // * import from parent folder
//   'sibling', // * import from sibling folder
//   'index', // * import from index
//   'object', // * import from object
// ];

module.exports = {
  'import/no-duplicates': 'error', // * Do not import duplicates
  'import/no-mutable-exports': 'error',
  // 'import/order': [
  //   'error',
  //   {
  //     alphabetize: importAlphabetize, // * Alphabetize imports
  //     'newlines-between': 'always', // * always add a blank line between imports
  //     pathGroups: [
  //       {
  //         pattern: 'react',
  //         group: 'builtin',
  //         position: 'before',
  //       },
  //     ],
  //     pathGroupsExcludedImportTypes: ['react'], // * Do not group react imports
  //     groups: importOrder,
  //   },
  // ],
};
