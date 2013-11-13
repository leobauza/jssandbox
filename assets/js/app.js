/*
/ reference types: OBJECTS 
*/
// String
// Number
// Boolean
// undefined
// null


/*
/ reference types: OBJECTS 
*/

// Object
// Array
// Function
// Date
// RegExp


//object literal
// var person = {
// 	firstName: "Leo",
// 	lastName: "Doe",
// 	sayHi: function() {
// 		return "hi there";
// 	}
// };

/*
/ FACTORY FUNCTION is not a constructor
*/
// var createPerson = function(firstName, lastName) {
// 	return {
// 		firstName: firstName,
// 		lastName: lastName,
// 		sayHi: function() {
// 			return "hi there";
// 		}
// 	}
// }
// 
// var johnDoe = createPerson("John", "Doe");
// var janeDoe = createPerson("Jane", "Doe");



/*
/ The THIS keyword
/ changes according to context...
/ example below has globalGreet having this mean window.name and inside person it is person.name
*/

// var name = "Jane Doe"; // same as window.name
// var globalGreet = function() {
// 	return "my name is " + this.name; //when called from the window this is window...when from inside an object its an object
// }

// var person = {
// 	name: "John Doe",
// 	greet: globalGreet // same as window.globalGreet
// };

//USE BIND TO SET CONTEXT...in this case the window
// var person = {
// 	name: "John Doe",
// 	greet: globalGreet.bind(window)
// };


//SELF INSTANTIATING OBJECT (anonymous object)
// ({
// 	name: "John Doe",
// 	greet: function() {
// 		console.log("My name is " + this.name); //this refers to the object
// 	}
// }).greet();






/*
/ FACTORY FUNCTION AND CONSTRUCTOR FUNCTION: 
/ factory: 
/ constructor:
*/



/*
/ FAKE AJAX THING
*/

var makeRequest = function(url, callback) {
	//make request with the url
	var data = 10; //json text xml aka some response
	callback(data);
	//obj.loadData.bind(obj)(data);
}

var obj = {
	someValue: 20,
	loadData: function(data) {
		var sum = this.someValue + data;
		console.log(sum);
	},
	prepareRequest: function() {
		var url = "http://example.com";
		makeRequest(url, obj.loadData.bind(obj)); //test change
	}
}

//change































