const {src, dest, watch} = require("gulp")
const sass = require('gulp-sass')(require('sass'))

function css(done){
    src('src/scss/app.scss')//indentifica el archivo
        .pipe(sass())//compila
        .pipe(dest('build/css'))//guarda el resultado en un file css

    done()
}

function dev(done){
    watch('src/scss/app.scss', css)

    done()
}

exports.css = css
exports.dev = dev