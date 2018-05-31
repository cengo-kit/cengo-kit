//Algoritma
//  css vendora haline getirilip sites/1/content/css/vendor.css olusturuldugunda,
// ayni islemi vendor js icin yaptignda bu function saati alacak ve layout.cshtml css ve js icinde belirlenene yerlere yazacak

var fs = require("fs");
var cssFile = '../Cms13/styles/main.css';
var cssFile2 = '../Cms13/styles/vendor.css';
var jsFile = '../Cms13/scripts/vendor.js';
var layoutFile = '../Cms13/Sites/1/templates/shared/_Layout.cshtml';
//document.characterSet
var characterSet = 'UTF-8';

//const scrFolder = './../img/';
var versionFormat, dateFormat;


// Saati alip global degiskene atama
	// istenilen format:
		// @version v_201709121003 = yyaaggsaatdakika
		// @date - Wed Aug 02 2017 22:59:18 GMT+0300 (Turkey Standard Time)
function getingTime(){
	var currentDate = new Date();
			//console.log(currentDate);

	var day = currentDate.getDate();
	if( day < 10 ) {
		day = '0' + currentDate.getDate()
	}

	var month = currentDate.getMonth()+1;
	if( month < 9 ) {
	month = '0' + currentDate.getMonth()
	}

	var hours = currentDate.getHours();
	if( hours < 10 ) {
	hours = '0' + currentDate.getHours()
	}

	var minutes = currentDate.getMinutes();
	if( minutes < 10 ) {
	minutes = '0' + currentDate.getMinutes()
	}

	versionFormat = "v="
				+ currentDate.getFullYear()
				+ month
				+ day
				+ hours
				+ minutes;
		//console.log(versionFormat);


	dateFormat = currentDate + ' (Turkey Standard Time)';
		//console.log(dateFormat)
}

getingTime()

// Css ve Js dosyalarina versiyon ekleme
function WriteToTop(mypath){
	var addContent = '/**'
				+ '\n'
				+ '@version '
				+ versionFormat
				+ '\n'
				+ '@date - '
				+ dateFormat
				+ '\n'
				+ '**/';
			//console.log(addContent);

	var mydata = fs.readFileSync(mypath).toString().split("\n");
		mydata.splice(0, 0, addContent );
	var contentText = mydata.join("\n");

	fs.writeFile(mypath, contentText, function (err) {
		if (err) {
			return err;
		} else {
			console.log(mypath + ' in icerisine vesiyon eklendi')
		}
	});
}



// Layout a versiyon ekleme
// Not Async olmamasi gerekiyor!
// https://stackoverflow.com/questions/21253019/change-a-file-using-node-js

function WriteAnyWhere(addVersion, whichFile) {

	var findingElem = addVersion.split('/');
	var myElem = findingElem.pop();
	var myElemWithVersion = myElem + '?' + versionFormat;
		//console.log(myElem)
	var data = fs.readFileSync(whichFile, characterSet);
	var newValue = data.replace(myElem, myElemWithVersion);
	fs.writeFileSync(whichFile, newValue);
	console.log(whichFile + ' dosyasinda ' + myElem + ' e versiyon eklendi' );
}



// File control etme foksiyonu]
function checkYourFile(param){
	fs.readFile(param, (err, data) =>{
		if (err){
			return console.log(err);
		}
		console.log(data.toString())
	})
}

//checkYourFile(cssFile);


// Path control etme foksiyonu
function checkYourPath(param){
	fs.readdirSync(param).forEach(file => {
		console.log(file);
	});
}

// checkYourPath(scrFolder);
WriteToTop(cssFile);
WriteToTop(cssFile2); 
WriteToTop(jsFile);
WriteAnyWhere(cssFile, layoutFile);
WriteAnyWhere(cssFile2, layoutFile); 
WriteAnyWhere(jsFile, layoutFile);

