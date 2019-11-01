module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "node": true
    },
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "project": "tsconfig.json",
        "sourceType": "module"
    },
    "plugins": [
        "@typescript-eslint",
        "@typescript-eslint/tslint"
    ],
    "rules": {
        "@typescript-eslint/adjacent-overload-signatures": "warn",
        "@typescript-eslint/array-type": "warn",
        "@typescript-eslint/await-thenable": "warn",
        "@typescript-eslint/ban-types": "warn",
        "@typescript-eslint/class-name-casing": "warn",
        "@typescript-eslint/consistent-type-assertions": "warn",
        "@typescript-eslint/consistent-type-definitions": "warn",
        "@typescript-eslint/explicit-member-accessibility": [
            "warn",
            {
                "accessibility": "explicit"
            }
        ],
        "@typescript-eslint/indent": [
            "warn",
            4,
            {
                "FunctionDeclaration": {
                    "parameters": "first"
                },
                "FunctionExpression": {
                    "parameters": "first"
                }
            }
        ],
        "@typescript-eslint/interface-name-prefix": "warn",
        "@typescript-eslint/member-delimiter-style": [
            "warn",
            "error",
            {
                "multiline": {
                    "delimiter": "none",
                    "requireLast": true
                },
                "singleline": {
                    "delimiter": "semi",
                    "requireLast": false
                }
            }
        ],
        "@typescript-eslint/member-ordering": "warn",
        "@typescript-eslint/no-empty-function": "warn",
        "@typescript-eslint/no-empty-interface": "warn",
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/no-floating-promises": "warn",
        "@typescript-eslint/no-misused-new": "warn",
        "@typescript-eslint/no-namespace": "warn",
        "@typescript-eslint/no-parameter-properties": "off",
        "@typescript-eslint/no-unnecessary-qualifier": "warn",
        "@typescript-eslint/no-unnecessary-type-assertion": "warn",
        "@typescript-eslint/no-use-before-declare": "off",
        "@typescript-eslint/no-var-requires": "warn",
        "@typescript-eslint/prefer-for-of": "warn",
        "@typescript-eslint/prefer-function-type": "warn",
        "@typescript-eslint/prefer-namespace-keyword": "warn",
        "@typescript-eslint/quotes": [
            "warn",
            "single",
            {
                "avoidEscape": true
            }
        ],
        "@typescript-eslint/semi": [
            "warn",
            "never"
        ],
        "@typescript-eslint/space-within-parens": [
            "warn",
            "always"
        ],
        "@typescript-eslint/triple-slash-reference": "warn",
        "@typescript-eslint/type-annotation-spacing": "warn",
        "@typescript-eslint/unified-signatures": "warn",
        "arrow-body-style": "warn",
        "arrow-parens": [
            "warn",
            "as-needed"
        ],
        "camelcase": "warn",
        "capitalized-comments": "warn",
        "complexity": "off",
        "constructor-super": "warn",
        "curly": [
            "warn",
            "multi-line"
        ],
        "dot-notation": "warn",
        "eol-last": "warn",
        "eqeqeq": [
            "warn",
            "smart"
        ],
        "guard-for-in": "warn",
        "id-blacklist": [
            "warn",
            "any",
            "Number",
            "number",
            "String",
            "string",
            "Boolean",
            "boolean",
            "Undefined",
            "undefined"
        ],
        "id-match": "warn",
        "import/no-deprecated": "warn",
        "import/order": "warn",
        "max-classes-per-file": [
            "warn",
            1
        ],
        "max-len": [
            "warn",
            {
                "code": 120
            }
        ],
        "new-parens": "warn",
        "no-bitwise": "warn",
        "no-caller": "warn",
        "no-cond-assign": "warn",
        "no-console": "warn",
        "no-constant-condition": "warn",
        "no-control-regex": "warn",
        "no-debugger": "warn",
        "no-duplicate-imports": "warn",
        "no-empty": "warn",
        "no-eval": "warn",
        "no-fallthrough": "warn",
        "no-invalid-regexp": "warn",
        "no-invalid-this": "off",
        "no-multiple-empty-lines": "warn",
        "no-new-wrappers": "warn",
        "no-redeclare": "warn",
        "no-regex-spaces": "warn",
        "no-return-await": "warn",
        "no-shadow": [
            "warn",
            {
                "hoist": "all"
            }
        ],
        "no-throw-literal": "warn",
        "no-trailing-spaces": "warn",
        "no-undef-init": "warn",
        "no-underscore-dangle": [
            "warn",
            "off"
        ],
        "no-unsafe-finally": "warn",
        "no-unused-expressions": [
            "warn",
            {
                "allowTaggedTemplates": true,
                "allowShortCircuit": true
            }
        ],
        "no-unused-labels": "warn",
        "no-var": "warn",
        "object-shorthand": "warn",
        "one-var": [
            "warn",
            "never"
        ],
        "prefer-arrow/prefer-arrow-functions": "warn",
        "prefer-const": "warn",
        "quote-props": [
            "warn",
            "consistent-as-needed"
        ],
        "radix": "warn",
        "space-before-function-paren": [
            "warn",
            "always"
        ],
        "spaced-comment": "warn",
        "use-isnan": "warn",
        "valid-typeof": "off",
        "@typescript-eslint/tslint/config": [
            "error",
            {
                "rules": {
                    "block-spacing": [
                        true,
                        "always"
                    ],
                    "brace-style": [
                        true,
                        "1tbs",
                        {
                            "allowSingleLine": true
                        }
                    ],
                    "handle-callback-err": [
                        true,
                        "^(err|error)$"
                    ],
                    "import-spacing": true,
                    "jsdoc-format": true,
                    "no-duplicate-case": true,
                    "no-empty-character-class": true,
                    "no-ex-assign": true,
                    "no-extra-boolean-cast": true,
                    "no-inner-declarations": [
                        true,
                        "functions"
                    ],
                    "no-multi-spaces": true,
                    "no-reference-import": true,
                    "no-unexpected-multiline": true,
                    "object-curly-spacing": [
                        true,
                        "always"
                    ],
                    "object-literal-sort-keys": true,
                    "one-line": [
                        true,
                        "check-catch",
                        "check-finally",
                        "check-else",
                        "check-open-brace",
                        "check-whitespace"
                    ],
                    "strict-type-predicates": true,
                    "ter-arrow-spacing": [
                        true,
                        {
                            "before": true,
                            "after": true
                        }
                    ],
                    "ter-func-call-spacing": [
                        true,
                        "never"
                    ],
                    "ter-indent": [
                        true,
                        2,
                        {
                            "SwitchCase": 1
                        }
                    ],
                    "ter-no-irregular-whitespace": true,
                    "ter-no-sparse-arrays": true,
                    "trailing-comma": [
                        true,
                        {
                            "multiline": "never",
                            "singleline": "never"
                        }
                    ],
                    "valid-typeof": true,
                    "whitespace": [
                        true,
                        "check-branch",
                        "check-decl",
                        "check-operator",
                        "check-rest-spread",
                        "check-type",
                        "check-typecast",
                        "check-type-operator",
                        "check-preblock"
                    ]
                }
            }
        ]
    }
};
