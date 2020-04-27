const webpack = require("webpack");

module.exports = {
    //     devServer: {
    //         host: "192.168.54.13",
    //         port: 8080
    //     },
    //     lintOnSave: false,

    css: {
        loaderOptions: {
            stylus: {
                "resolve url": true,
                import: ["./src/them"]
            }
        }
    },
    pluginOptions: {
        "cube-ui": {
            opstCompile: true,
            theme: true
        }
    },
    //构建输出目录
    outputDir: "../serve/dist"
}