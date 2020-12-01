const mix = require('laravel-mix');
const webpack = require('webpack');
const ASSET_PATH = process.env.MIX_WEBPACK || '/';
/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.webpackConfig({
    plugins: [
        new webpack.ContextReplacementPlugin(
            /moment[\/\\]locale/,
            // A regular expression matching files that should be included
            /(en-gb)\.js/
        )
    ],
    resolve: {
        extensions: ['.js', '.vue'],
        alias: {
            '@': __dirname + '/resources'
        }
    },
    output: {
        chunkFilename: 'js/chunks/[name].js',
        publicPath: 'http://panel.inilahkepri.id/'
        // publicPath: 'http://localhost/panel/'
    }
});



mix.js('resources/js/app.js', 'public/js')
    .sass('resources/sass/app.scss', 'public/css');
