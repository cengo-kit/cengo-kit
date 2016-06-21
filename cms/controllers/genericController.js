module.exports = function(cms){
  return {
    render: require('./renderController').bind(cms)
  };
};

