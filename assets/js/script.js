/***OBJECT***/
// var toilet = {
// 	size: 12,
// 	brand: 'Sloan',
// 	flush: function() {
// 		console.log('clearing out contents of ' + this.brand);
// 	}
// }

/***CONSTRUCTOR***/
function Toilet(o) {
	this.brand = o.brand || "nameless";
	this.tankCapacity = o.capacity || "not specified";
	this.flush = function() {
		console.log('clearing out contents of ' + this.brand);
	}
}
/***PROTOTYPE***/
Toilet.prototype.sanitize = function() {
	console.log('Sanitizing ' + this.brand);
}

var myToilet = new Toilet({
	brand: "Delta",
	capacity: 7
});

// myToilet.sanitize = function() {
// 	console.log("setting fire to " + this.brand);
// }


/***PROTOTYPE CHAINING***/
function FancyToilet(o) {
	Toilet.call(this, o);
	this.constructor = FancyToilet;
}

FancyToilet.prototype = new Toilet({});
FancyToilet.prototype.useBidet = function() {
	console.log("Ahh, refreshing");
}

var fancyToilet = new FancyToilet({
	brand: "Sloan"
	,capacity: 100
});

