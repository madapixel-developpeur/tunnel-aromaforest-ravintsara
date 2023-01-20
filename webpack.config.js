const Encore = require('@symfony/webpack-encore');

// Manually configure the runtime environment if not already configured yet by the "encore" command.
// It's useful when you use tools that rely on webpack.config.js file.
if (!Encore.isRuntimeEnvironmentConfigured()) {
    Encore.configureRuntimeEnvironment(process.env.NODE_ENV || 'dev');
}

Encore
    // directory where compiled assets will be stored
    .setOutputPath('public/build/')
    // public path used by the web server to access the output path
    .setPublicPath('/build')
    // only needed for CDN's or sub-directory deploy
    //.setManifestKeyPrefix('build/')

    /*
     * ENTRY CONFIG
     *
     * Each entry will result in one JavaScript file (e.g. app.js)
     * and one CSS file (e.g. app.css) if your JavaScript imports CSS.
     */
    .addEntry('app', './assets/app.js')

    .addEntry('loader_js', './assets/js/loader.js')
    
    // Botanique: JS
    .addEntry('botanique_modernizr_js', './assets/botanique/assets/js/vendor/modernizr-3.7.1.min.js')
    .addEntry('botanique_jquery_js', './assets/botanique/assets/js/vendor/jquery-3.4.1.min.js')
    .addEntry('botanique_popper_js', './assets/botanique/assets/js/popper.js')
    .addEntry('botanique_bootstrap_js', './assets/botanique/assets/js/bootstrap.min.js')
    .addEntry('botanique_carousel_js', './assets/botanique/assets/js/owl.carousel.min.js')
    .addEntry('botanique_slick_js', './assets/botanique/assets/js/slick.min.js')
    .addEntry('botanique_jquery_manific_popup_js', './assets/botanique/assets/js/jquery.magnific-popup.min.js')
    .addEntry('botanique_jquery_counterup_js', './assets/botanique/assets/js/jquery.counterup.min.js')
    .addEntry('botanique_jquery_countdown_js', './assets/botanique/assets/js/jquery.countdown.js')
    .addEntry('botanique_jqurery_ui_js', './assets/botanique/assets/js/jquery.ui.js')
    .addEntry('botanique_jquery_elevatezoom_js', './assets/botanique/assets/js/jquery.elevatezoom.js')
    .addEntry('botanique_isotope_pkgd_js', './assets/botanique/assets/js/isotope.pkgd.min.js')
    .addEntry('botanique_slinky_menu_js', './assets/botanique/assets/js/slinky.menu.js')
    .addEntry('botanique_plugins_js', './assets/botanique/assets/js/plugins.js')
    
    .addEntry('botanique_main_js', './assets/botanique/assets/js/main.js')


    
    // Botanique: CSS
    .addStyleEntry('botanique_bootstrap_css', './assets/botanique/assets/css/bootstrap.min.css')
    .addStyleEntry('botanique_owl_carousel_css', './assets/botanique/assets/css/owl.carousel.min.css')
    .addStyleEntry('botanique_slick_css', './assets/botanique/assets/css/slick.css')
    .addStyleEntry('botanique_magnific_popup_css', './assets/botanique/assets/css/magnific-popup.css')
    .addStyleEntry('botanique_font_awesome_css', './assets/botanique/assets/css/font.awesome.css')
    .addStyleEntry('botanique_ionicons_css', './assets/botanique/assets/css/ionicons.min.css')
    .addStyleEntry('botanique_simple_line_icons_css', './assets/botanique/assets/css/simple-line-icons.css')
    .addStyleEntry('botanique_animate_css', './assets/botanique/assets/css/animate.css')
    .addStyleEntry('botanique_jquery_ui_css', './assets/botanique/assets/css/jquery-ui.min.css')
    .addStyleEntry('botanique_slinky_menu_css', './assets/botanique/assets/css/slinky.menu.css')
    .addStyleEntry('botanique_plugins_css', './assets/botanique/assets/css/plugins.css')


    .addStyleEntry('botanique_style_css', './assets/botanique/assets/css/style.css')
    .addStyleEntry('botanique_custom_css', './assets/botanique/assets/css/custom.css')
    
    // Custom css 
    .addStyleEntry('main_css', './assets/styles/main.css')

    
    // enables the Symfony UX Stimulus bridge (used in assets/bootstrap.js)
    .enableStimulusBridge('./assets/controllers.json')

    // When enabled, Webpack "splits" your files into smaller pieces for greater optimization.
    .splitEntryChunks()

    // will require an extra script tag for runtime.js
    // but, you probably want this, unless you're building a single-page app
    .enableSingleRuntimeChunk()

    /*
     * FEATURE CONFIG
     *
     * Enable & configure other features below. For a full
     * list of features, see:
     * https://symfony.com/doc/current/frontend.html#adding-more-features
     */
    .cleanupOutputBeforeBuild()
    .enableBuildNotifications()
    .enableSourceMaps(!Encore.isProduction())
    // enables hashed filenames (e.g. app.abc123.css)
    .enableVersioning(Encore.isProduction())

    .configureBabel((config) => {
        config.plugins.push('@babel/plugin-proposal-class-properties');
    })

    // enables @babel/preset-env polyfills
    .configureBabelPresetEnv((config) => {
        config.useBuiltIns = 'usage';
        config.corejs = 3;
    })

    // enables Sass/SCSS support
    //.enableSassLoader()

    // uncomment if you use TypeScript
    //.enableTypeScriptLoader()

    // uncomment if you use React
    //.enableReactPreset()

    // uncomment to get integrity="..." attributes on your script & link tags
    // requires WebpackEncoreBundle 1.4 or higher
    //.enableIntegrityHashes(Encore.isProduction())

    // uncomment if you're having problems with a jQuery plugin
    .autoProvidejQuery()
;

module.exports = Encore.getWebpackConfig();
