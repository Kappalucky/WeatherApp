module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ["eslint:recommended", "plugin:vue/recommended", "@vue/airbnb"],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "import/no-unresolved": 0
  },
  parserOptions: {
    parser: "babel-eslint"
  }
};
