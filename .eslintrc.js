module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended'
  ],
  plugins: [
  ],
  // add your custom rules here
  rules: {
    'vue/multi-word-component-names': 'off',
    'line-break-style': 'off',
    indent: ['error', 2, {
      SwitchCase: 1
    }],
    'max-len': ['warn', 260, {
      ignoreUrls: true,
      ignoreComments: false,
      ignoreRegExpLiterals: true,
      ignoreStrings: true,
      ignoreTemplateLiterals: true
    }],
    'global-require': 'off',
    'no-shadow': ['error', {
      allow: ['state']
    }]
  },
  overrides: [
    {
      files: ['*.vue'],
      rules: {
        indent: 'off',
        'vue/html-indent': ['error', 4],
        'vue/script-indent': ['error', 4, {
          baseIndent: 1,
          switchCase: 1
        }],
        'vue/max-attributes-per-line': ['warn', {
          singleline: 3
        }],
        'vue/require-default-prop': 'off',
        'vue/order-in-components': ['error', {
          order: [
            'el',
            'name',
            'parent',
            'functional',
            ['delimiters', 'comments'],
            ['components', 'directives', 'filters'],
            'extends',
            'mixins',
            'inheritAttrs',
            'model',
            ['props', 'propsData'],
            'fetch',
            'asyncData',
            'data',
            'computed',
            'watch',
            'LIFECYCLE_HOOKS',
            'methods',
            'head',
            ['template', 'render'],
            'renderError'
          ]
        }],
        'consistent-return': 'off'
      }
    }
  ]
}
