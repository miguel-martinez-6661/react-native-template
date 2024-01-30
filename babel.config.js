module.exports = function (api) {
  api.cache(true)
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['.'],
          alias: {
            '@/components': './src/components',
            '@/constants': './src/constants',
            '@/hooks': './src/hooks',
            '@/interfaces': './src/interfaces',
            '@/navigation': './src/navigation',
            '@/providers': './src/providers',
            '@/screens': './src/screens',
            '@/store': './src/store'
          }
        }
      ]
    ]
  }
}
