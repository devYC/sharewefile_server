module.exports = {
  env: {
    commonjs: true,
    es2021: true,
    node: true,
  },
  plugins: ["prettier"],
  extends: ["airbnb-base", "plugin:prettier/recommended"],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    createDefaultProgram: true,
  },
  rules: {
    "new-cap": "off",
    quotes: ["error", "double"],
    "no-use-before-define": [
      "error",
      {
        functions: false,
        classes: true,
        variables: true,
        allowNamedExports: true,
      },
    ],
    "import/no-extraneous-dependencies": ["error", { devDependencies: true }],
    "no-restricted-globals": ["error", "event", "fdescribe"],
    "no-shadow": [
      "error",
      {
        builtinGlobals: false,
        hoist: "functions",
        allow: [],
        ignoreOnInitialization: false,
      },
    ],
    "prefer-template": "off",
    "no-console": "off",
    "object-shorthand": "off",
    "no-unused-vars": "off",
    "func-names": "off",
  },
  ignorePatterns: ["!.eslintrc.js", "!.prettierrc.json"],
};
