
const contentModel = require("./models/contentModel");


module.exports =  function(gulpInfo){
  var models = {
    image: require('./models/imageModel.js')(contentModel),
    page: require('./models/pageModel.js')(contentModel),
    imageGallery: require('./models/imageGalleryModel.js')(contentModel),
    subPage: require('./models/subPageModel.js')(contentModel),
    gulpInfo:gulpInfo
  };

  models.fn = require('./controllers/genericController.js')(models);
  
  return models;
  
};
