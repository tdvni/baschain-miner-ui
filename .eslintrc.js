// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
  },
  // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
  // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
  extends: ['plugin:vue/essential', 'airbnb-base'],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // check if imports actually resolve
  settings: {
    'import/resolver': {
      webpack: {
        config: 'build/webpack.base.conf.js'
      }
    }
  },
  // add your custom rules here
  rules: {
    // don't require .vue extension when importing
    'import/extensions': ['error', 'always', {
      js: 'never',
      vue: 'off'
    }],
    // disallow reassignment of function parameters
    // disallow parameter object manipulation except for specific exclusions
    'no-param-reassign': ['error', {
      props: true,
      ignorePropertyModificationsFor: [
        'state', // for vuex state
        'acc', // for reduce accumulators
        'e', // for e.returnvalue
        'item'
      ]
    }],
    // allow optionalDependencies
    'import/no-extraneous-dependencies': ['error', {
      optionalDependencies: ['test/unit/index.js']
    }],
    // allow debugger during development
    'quotes': ["off","single"],
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'comma-spacing': 'off',
    'semi': ["off", "always", { "omitLastInOneLineBlock": true}],
    "space-in-parens":[0,"always"],
    "no-multiple-empty-lines": ["error", { "max": 2, "maxEOF": 0 }],
    "quote-props": ["error","consistent" ],
    'no-underscore-dangle':"off",
    "import/no-named-as-default": 0,
    "comma-dangle": ["warn", {
      "arrays": "only-multiline",
      "objects": "only-multiline",
      "imports": "ignore",
      "exports": "ignore",
      "functions": "ignore"
    }],
    'no-useless-escape':0,
    'arrow-parens': ['error', 'as-needed', { "requireForBlockBody": true}],
    'no-use-before-define': ['error', { "functions": false, "classes": false, "variables": true }],
    'no-restricted-exports':0,
    'no-extra-semi':"error",
    'prefer-object-spread':0,
    'arrow-body-style': ["off", "as-needed", { "requireReturnForObjectLiteral": false }],
    'padded-blocks':0,
    'no-unneeded-ternary':0,
    'eqeqeq':["off","smart"],
    "prefer-const": ["warn", {
      "destructuring": "any",
      "ignoreReadBeforeAssign": false
    }],
    'no-comma-dangle':0,
    'space-before-function-paren': ['warn', { "anonymous": "never", "named": "never" }],
    "no-unused-vars": ["error", { "vars": "all", "args": "none", "ignoreRestSiblings": false }],
    'radix': ["warn","as-needed"],
  }
}
