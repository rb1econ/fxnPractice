// 1
var tripleFive = function() {

	for (var i=0; i<3; i++) {
		console.log("Five!");
	};

};

// 2
tripleFive();

var lastLetter = function (a) {
	return a[a.length-1];

};

console.log(lastLetter("school"));

// 3
var square = function (x) {

	return x*x;

};

console.log(square(3));


// 4
var negate = function(y) {

	return y - (y*2);

};

console.log(negate(7));


// 5
var toArray = function(a,b,c) {

	return [a,b,c];
	

};

console.log(toArray(2, 3, 6))

// 6
var startsWithA = function(g) {

	if (g[0]==="a" || g[0]==="A") {
		return true;
	}
	else {
		return false;
	}
};

console.log(startsWithA("america"));
console.log(startsWithA("cuba"));

// 7
var excite = function(a) {
	return a + "!!!";
};

console.log(excite("javascript"))


// 8 
var sunn = function (a) {
	var lowerSun = a.toLowerCase();
	var indexSun = lowerSun.indexOf("sun");
	if (indexSun>=0) {
		return true;
	}
	else {
		return false;
	};
};

console.log(sunn("asuncio"))

// 9
var tiny = function (a) {

	if (a<1 && a>0) {
		return true;
	}
	else {
		return false;
	}
}

console.log(tiny(10));
console.log(tiny(0.5));

// 10
var getSeconds = function (a) {

	var time = a.split(':');
	console.log("time:", time);
	return (parseInt(time[0])*60) + parseInt(time[1]);
	// return (+(time[0]*60) + (+time[1]));
}

console.log(getSeconds('2:27'));