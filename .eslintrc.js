module.exports = {
  extends: "airbnb",
  env: {
    jest: true,
    es6: true,
    browser: true,
    node: true
  },
  parser: "babel-eslint",
  plugins: ["react"],
  rules: {
    semi: ["error", "never"],
    "comma-dangle": ["warn", "always-multiline"],
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
    "no-underscore-dangle": [0],
    "import/no-extraneous-dependencies": ["error", {"devDependencies": true}]
  }
};
