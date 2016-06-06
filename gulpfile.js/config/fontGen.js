var config = require('./');

module.exports = {
    source: config.assetsPath + 'fonts/**/*.{ttf,otf}',
    dest: config.buildPath + 'assets/css/',
    destSource: config.assetsPath + '.fonts/'
};
