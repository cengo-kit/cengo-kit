var config = require('./');

module.exports = {
    source: config.assetsPath + '.fonts/*.css',
    dest: config.assetsPath + 'sass/modules/fonts/',
};
