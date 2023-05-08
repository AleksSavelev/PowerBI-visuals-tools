module.exports = {
    env: {
        "browser": true,
        "es6": true,
        "es2022": true
    },
    root: true,
    parser: "@typescript-eslint/parser",
    plugins: [
        "powerbi-visuals"
    ],
    extends: [
        "plugin:powerbi-visuals/recommended"
    ],
    rules: {}
}; // eslint configuration used in Custom Visuals