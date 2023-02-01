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
    
    // bonique: JS
    .addEntry('bonique_modernizr_js', './assets/bonique/assets/js/vendor/modernizr-3.7.1.min.js')
    .addEntry('bonique_jquery_js', './assets/bonique/assets/js/vendor/jquery-3.4.1.min.js')
    .addEntry('bonique_popper_js', './assets/bonique/assets/js/popper.js')
    .addEntry('bonique_bootstrap_js', './assets/bonique/assets/js/bootstrap.min.js')
    .addEntry('bonique_carousel_js', './assets/bonique/assets/js/owl.carousel.min.js')
    .addEntry('bonique_slick_js', './assets/bonique/assets/js/slick.min.js')
    .addEntry('bonique_jquery_manific_popup_js', './assets/bonique/assets/js/jquery.magnific-popup.min.js')
    .addEntry('bonique_jquery_counterup_js', './assets/bonique/assets/js/jquery.counterup.min.js')
    .addEntry('bonique_jquery_countdown_js', './assets/bonique/assets/js/jquery.countdown.js')
    .addEntry('bonique_jqurery_ui_js', './assets/bonique/assets/js/jquery.ui.js')
    .addEntry('bonique_jquery_elevatezoom_js', './assets/bonique/assets/js/jquery.elevatezoom.js')
    .addEntry('bonique_isotope_pkgd_js', './assets/bonique/assets/js/isotope.pkgd.min.js')
    .addEntry('bonique_slinky_menu_js', './assets/bonique/assets/js/slinky.menu.js')
    .addEntry('bonique_plugins_js', './assets/bonique/assets/js/plugins.js')
    
    .addEntry('bonique_main_js', './assets/bonique/assets/js/main.js')


    
    // bonique: CSS
    .addStyleEntry('bonique_bootstrap_css', './assets/bonique/assets/css/bootstrap.min.css')
    .addStyleEntry('bonique_owl_carousel_css', './assets/bonique/assets/css/owl.carousel.min.css')
    .addStyleEntry('bonique_slick_css', './assets/bonique/assets/css/slick.css')
    .addStyleEntry('bonique_magnific_popup_css', './assets/bonique/assets/css/magnific-popup.css')
    .addStyleEntry('bonique_font_awesome_css', './assets/bonique/assets/css/font.awesome.css')
    .addStyleEntry('bonique_ionicons_css', './assets/bonique/assets/css/ionicons.min.css')
    .addStyleEntry('bonique_simple_line_icons_css', './assets/bonique/assets/css/simple-line-icons.css')
    .addStyleEntry('bonique_animate_css', './assets/bonique/assets/css/animate.css')
    .addStyleEntry('bonique_jquery_ui_css', './assets/bonique/assets/css/jquery-ui.min.css')
    .addStyleEntry('bonique_slinky_menu_css', './assets/bonique/assets/css/slinky.menu.css')
    .addStyleEntry('bonique_plugins_css', './assets/bonique/assets/css/plugins.css')
    .addStyleEntry('bonique_swiper_custom', './assets/bonique/assets/css/swipe-custom.css')


    .addStyleEntry('bonique_style_css', './assets/bonique/assets/css/style.css')
    .addStyleEntry('bonique_custom_css', './assets/bonique/assets/css/custom.css')
    
    // Custom css 
    .addStyleEntry('main_css', './assets/styles/main.css')
    .addStyleEntry('page_home_css', './assets/styles/pages/page_home.css')

    
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
    .enableSassLoader()

    // uncomment if you use TypeScript
    //.enableTypeScriptLoader()

    // uncomment if you use React
    //.enableReactPreset()

    // uncomment to get integrity="..." attributes on your script & link tags
    // requires WebpackEncoreBundle 1.4 or higher
    //.enableIntegrityHashes(Encore.isProduction())

    // uncomment if you're having problems with a jQuery plugin
    // .autoProvidejQuery()
;

module.exports = Encore.getWebpackConfig();
