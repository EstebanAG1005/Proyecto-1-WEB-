module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    parser: 'babel-eslint',
  },
  plugins: [
    'react',
  ],
  "ignorePatterns": ["*.css", "**/vendor/*.css"],
  rules: {
    "react/jsx-filename-extension": [0],
    "import/extensions":[0],
  },
};
