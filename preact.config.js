// More info at: https://github.com/developit/preact-cli/wiki/Config-Recipes#customising-babel-options-using-loader-helpers
export default (config, env, helpers) => {
    let { rule } = helpers.getLoadersByName(config, 'babel-loader')[0];
    let babelConfig = rule.options;

    babelConfig.plugins.push(["import", { "libraryName": "antd", "style": 'css' }]);
};