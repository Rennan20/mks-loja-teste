module.exports = {
  presets: [
    ["@babel/preset-env", { targets: { node: "18.2.1" } }],
    "@babel/preset-typescript",
    "@babel/preset-react",
  ],
  env: {
    test: {
      plugins: [
        "@babel/plugin-transform-runtime",
        "@babel/plugin-transform-modules-commonjs",
        "dynamic-import-node",
      ],
    },
  },
};
