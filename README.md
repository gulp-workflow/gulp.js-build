# gulp.js-build
Gulpfile.js that works on js files

[![GitHub version](https://badge.fury.io/gh/zgabievi%2Fgulp.js-build.svg)](http://badge.fury.io/gh/zgabievi%2Fgulp.js-build)
[![Build Status](https://semaphoreci.com/api/v1/projects/13d5d44e-8daa-474a-b3e2-3aa4cd2c1adf/444090/shields_badge.svg)](https://semaphoreci.com/zgabievi/gulp-js-build)
[![Codacy Badge](https://www.codacy.com/project/badge/7ec3c5b75bf94761a6904dc14bf85677)](https://www.codacy.com/app/zgabievi/gulp-js-build)
[![Dependency Status](https://david-dm.org/zgabievi/gulp.js-build.svg)](https://david-dm.org/zgabievi/gulp.js-build)
[![devDependency Status](https://david-dm.org/zgabievi/gulp.js-build/dev-status.svg)](https://david-dm.org/zgabievi/gulp.js-build#info=devDependencies)

## Dependencies
- ["gulp": "^3.8.11"](https://npmjs.org/package/gulp/)
- ["del": "^1.2.0"](https://www.npmjs.com/package/del/)
- ["gulp-babel": "^5.1.0"](https://www.npmjs.com/package/gulp-babel/)
- ["gulp-concat": "^2.5.2"](https://www.npmjs.com/package/gulp-concat/)
- ["gulp-if": "^1.2.5"](https://www.npmjs.com/package/gulp-if/)
- ["gulp-load-plugins": "^0.10.0"](https://www.npmjs.com/package/gulp-load-plugins/)
- ["gulp-plumber": "^1.0.1"](https://www.npmjs.com/package/gulp-plumber/)
- ["gulp-rename": "^1.2.2"](https://www.npmjs.com/package/gulp-rename/)
- ["gulp-size": "^1.2.1"](https://www.npmjs.com/package/gulp-size/)
- ["gulp-sourcemaps": "^1.5.2"](https://www.npmjs.com/package/gulp-sourcemaps/)
- ["gulp-tsc": "^0.10.0"](https://www.npmjs.com/package/gulp-tsc/)
- ["gulp-uglify": "^1.2.0"](https://www.npmjs.com/package/gulp-uglify/)

## Configuration
```json
{
	"environment": "development",
	"extension": "js"
}
```

You can change environment to **production** or extension to **ts**/**es6.js** in `config.json` or from command line: `set ENV=production` or `set ENV=ts`

## Useage
Download repository and in your command line run `npm install`, this will download `node_modules` and you are about to go.
Install `bower_components` as in example: `bower install is_js`, then open `Gulpfile.js` and add line in `js:copy` task.

- `gulp js:clean` - cleans `./dist/assets/js` directory
- `gulp js:copy` - copies files from `./bower_components`, but that task need to be updated for every component
- `gulp js:build` - concatenates `js/ts/es6.js` files from `./src/assets/js` and creates `bundle.js` in `./dist/assets/js`
- `gulp js:watch` - watches `js/ts/es6.js` files in `./src/assets/js` for chages
- `gulp js` - default task that cleans, copies, builds and watches javascript files

---

- `npm test` - sets environment to development and runs default task of gulp
- `npm start` - sets environment to production and runs default task of gulp
