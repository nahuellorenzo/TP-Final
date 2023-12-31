module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      "@babel/plugin-proposal-export-namespace-from",
      '@babel/plugin-transform-export-namespace-from',
      "react-native-reanimated/plugin",
    ],
  };
};
