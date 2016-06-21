module.exports  = function render(html, type){
  let keys = this[type];
  let gulpInfo = (this.gulpInfo) ? "html" : "cms";
  for (var i = 0; i < keys.length; i++) {
    html = html.replace(new RegExp(this[type][i]['key'], 'g'), this[key][i][gulpInfo])
  }
};
