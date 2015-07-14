// Number -> Number -> Number
var add = function (a, b) {
  return a + b;
};

var sum = function(...numbers) {
  return numbers.reduce(add);
};

// Number -> Number
var square = function (x) {

};

// Number -> Void
var asyncSquare = function (x, callback) {

};

// String -> String
var hello = function (someone) {
  var someone = someone !== undefined ? someone : "World";
  return "Hello " + someone + "!";
};

// String -> {Number, Number} -> Function -> Function -> Void
var fakePost = function (url, data, onSuccess, onError) {
  if (url === "http://fake.api.com/add") {
    setTimeout(function () {
      // destructuring
      let {a, b} = data;
      var result = add(a, b);
      onSuccess(result);
    }, 500);
  } else {
    setTimeout(function () {
      onError(new Error("Nope."));
    }, 500);
  }
};

export { sum };
export { add };
export { fakePost };

