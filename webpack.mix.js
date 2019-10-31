const mix = require('laravel-mix');

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

mix.options({
    processCssUrls: false
});

if (!mix.inProduction()) {
    mix.webpackConfig({
        devtool: 'source-map'
    })
    .sourceMaps()
}

mix.react('resources/js/app.js', 'public/js')
    .sass('resources/sass/app.scss', 'public/css')

    .browserSync({
        host: 'localhost',
        port: 3000,
        proxy: {
            target: 'http://www.mi6.test',
        }
    });

// add versioning 
mix.version();
