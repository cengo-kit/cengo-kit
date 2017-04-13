/*

const fs = require('fs');

var files = fs.readdirSync('gulp-folder/tasks/');

var gulpFileJS = '';
gulpFileJS += fs.readFileSync('gulp-folder/gulp-modules.js', "utf8");

for (var i in files) {
  gulpFileJS += fs.readFileSync('gulp-folder/tasks/' + files[i], "utf8");
}

fs.writeFile("gulpfile.js", gulpFileJS, function(err) {
  if(err) {
    return console.log(err);
  }
  console.log("Gulpfile.js created!");
});
*/
