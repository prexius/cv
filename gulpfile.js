const { src, dest, series } = require('gulp');



// File Copy
async function build_plugins() {
    // Jquery
    src('./node_modules/jquery/dist/jquery.min.js').pipe(dest('./src/vendor/jquery/'));

    // Bootstrap
    src('node_modules/bootstrap/dist/css/bootstrap.min.css').pipe(dest('./src/vendor/bootstrap/css/'));
    src('node_modules/bootstrap/dist/js/bootstrap.bundle.min.js').pipe(dest('./src/vendor/bootstrap/js/'));

};




exports.build_plugins = build_plugins;