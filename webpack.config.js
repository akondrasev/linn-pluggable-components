// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require('path');
const {ModuleFederationPlugin} = require("webpack").container;
const HtmlWebpackPlugin = require("html-webpack-plugin");

const isProduction = process.env.NODE_ENV === 'production';


const config = {
    entry: './src/index.ts',
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: "auto",
    },
    devServer: {
        client: {
            overlay: false,
            reconnect: false,
        },
        hot: false,
        liveReload: false,
    },
    optimization: {
        runtimeChunk: false
    },
    plugins: [
        //standard for all placeholder apps, should be copied as is
        new ModuleFederationPlugin({
            name: "PlaceholderApp",
            filename: "app.js",
            exposes: {
                "placeholder": "./src/app"//make sure to create this file "src/app.ts"
            },
            shared: {
                "@linnworks/extension-sdk": {
                    singleton: true
                }
            },
        }),
        new HtmlWebpackPlugin({
            template: "./index.html",
        }),
    ],
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/i,
                loader: 'ts-loader',
                exclude: ['/node_modules/'],
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
                type: 'asset',
            },

            // Add your rules for custom modules here
            // Learn more about loaders from https://webpack.js.org/loaders/
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
};

module.exports = () => {
    if (isProduction) {
        config.mode = 'production';
    } else {
        config.mode = 'development';
    }
    return config;
};
