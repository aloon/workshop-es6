var square = (x) => x * x;

var asyncSquare = function (x) {
  return new Promise((resolve, reject) => {

    setTimeout(function () {
      var result = square(x);
      resolve(result);
    }, 500);
  });
};

export default asyncSquare;