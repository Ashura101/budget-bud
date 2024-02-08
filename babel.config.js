const alias = {
  '@app/config': './app/config',
  '@app/context': './app/context',
  '@app/constants': './app/constants',
  '@app/layout': './app/layout',
  '@app/navigation': './app/navigation',
  '@app/screens': './app/screens',
  '@app/theme': './app/theme',
  '@app/utils': './app/utils',
};
// const alias = {'^@/(.+)': './src/\\1'}; // @/folder will be an alias to <root>/src/folder

const extensions = [
  '.ios.ts',
  '.android.ts',
  '.ts',
  '.ios.tsx',
  '.android.tsx',
  '.tsx',
  '.jsx',
  '.js',
  '.json',
];

module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        extensions,
        alias,
      },
    ],
  ],
};
