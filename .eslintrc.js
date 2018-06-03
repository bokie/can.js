module.exports = {
    'extends': 'eslint:recommended',
    'env': {
        'browser': true,
        'es6': true,
        'node': true,
        'mocha': true,
    },
    'extends': 'eslint:recommended',
    'parserOptions': {
        'ecmaVersion': 6,
        'sourceType': 'module'
    },
    'rules': {
        'indent': [
            'error',
            4
        ],
        'linebreak-style': [
            'error',
            'unix'
        ],
        'quotes': [
            'error',
            'single'
        ],
        'semi': [
            'error',
            'never'
        ],

        // ECMAScript 6 rules

        // require braces around arrow function bodies
        'arrow-body-style': ['error', 'as-needed', {
            'requireReturnForObjectLiteral': false
        }],

        // require parentheses around arrow function arguments
        'arrow-parens': ['error', 'always'],

        // enforce consistent spacing before and after the arrow in arrow functions
        'arrow-spacing': ['error', {
            'after': true,
            'before': true
        }],

        'no-var': ['error'],

        'no-new-symbol': ['error'],

        // disallow renaming import, export, and destructured assignments to the same name
        'no-useless-rename': ['error'],

        'no-duplicate-imports': ['error'],

        // disallow duplicate class members
        'no-dupe-class-members': ['error'],

        'object-shorthand': ['error', 'always', {
            'avoidQuotes': true,
            'ignoreConstructors': false
        }],

        'prefer-arrow-callback': ['error', {
            'allowNamedFunctions': false,
            'allowUnboundThis': true
        }],

        // require const declarations for variables that are never reassigned after declared
        'prefer-const': ['error'],

        // require rest parameters instead of arguments
        'prefer-rest-params': ['error'],

        // require template literals instead of string concatenation
        'prefer-template': ['error'],

        'template-curly-spacing': ['error', 'never'],
    }
}
