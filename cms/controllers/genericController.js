module.exports = function(cms){
  return {
    render: require('./renderController').bind(cms)
  };
};

cms.render(html ,'page')
