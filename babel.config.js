module.exports = {
  presets: ['@vue/cli-plugin-babel/preset'],
  plugins: [
    [
      'import',
      {
        libraryName: 'vant',
        libraryDirectory: 'es',
        style: (name) => `${name}/style/less`,
      },
      'vant',
    ], [
      'import',
      {
        libraryName: '@varlet/ui',
        libraryDirectory: 'es',
        style: (name) => `${name}/style/less`,
      },
      '@varlet/ui',
    ],
  ],
};
