// Number -> Number -> Number
var add = (a, b) => a + b;
/*
var sum = function() {
	var args = Array.prototype.slice.call(arguments);
	var result=0;
	for(var i=0; i< args.length; i++){
		result += args[i];
	}
	return result;
};
*/

/*
var sum = function(...args) {
	var result=0;
	for(var i=0; i< args.length; i++){
		result += args[i];
	}
	return result;
};
*/

var sum = function(...args) {
	//return args.reduce(add)
	return args.reduce((a, b) => a + b);
};


// Number -> Number
var square = (x) => x*x;

// Number -> Void
export function asyncSquare(coll, callback) {
	var result = [];

	for(let i=0; i<coll.length;i++){
		setTimeout(() =>{
			result.push(square(coll[i]));
		},3);
	}

	return function () {
		return result;
	}
};

// String -> String
/*
var hello = function (someone) {
	if(someone == undefined) return "Hello World!";
	else return "Hello " + someone + "!";
};
*/

var hello =  (someone = "World") => `Hello ${someone}!` ;


// String -> {Number, Number} -> Function -> Function -> Void
/*
var fakePost = function (url, data, onSuccess, onError) {
	const correctURL="http://fake.api.com/add";
	var {a,b}=data; 
	if(url===correctURL) onSuccess(a+b);
	else onError(new Error("uhh"));
};
*/
var fakePost = function (url, data) {
	const correctURL="http://fake.api.com/add";
	var {a,b}=data; 
	return new Promise((resolve,reject)=>{
		if(url===correctURL) resolve(a+b);
		else reject(new Error("uhh"));
	})
};


/*
var dedupe = function (collection) {
	var list=[];

	for (var i=0; i<collection.length;i++){
		if(list.indexOf(collection[i])===-1){
			list.push(collection[i]);
		}
	}
	return list;
};
*/
var dedupe = (collection) => Array.from(new Set(collection));

/*
var Duck = function (name) {
	this.name =name;

	this.quack = () => `Quack! My name is ${name} the duck.`;
};
*/

class Duck {
	constructor(name){
		this.name = name;
	}	

	quack() {
		return `Quack! My name is ${this.name} the duck.`;
	} 
};

function* ints(){
	let i=0;
	while(true){
		yield i++;
	}

}

export {ints, Duck, add, sum, dedupe, hello, fakePost};