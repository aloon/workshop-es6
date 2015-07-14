import {asyncSquare} from "../src/index";
import expect from "expect";

xdescribe("#add", function () {
  it("should be able to add two numbers together", () => {
    expect(add(1, 1)).toEqual(2);
    expect(add(13, 11)).toEqual(24);
    expect(add(101, 99)).toEqual(200);
  });
});

xdescribe("#sum", function () {
  it("should be able to sum an arbitrary numbers of numbers together", () => {
    expect(sum(1, 1)).toEqual(2);
    expect(sum(2, 3, 4)).toEqual(9);
    expect(sum(1, 2, 3, 4, 5, 6, 7, 8, 9)).toEqual(45);
  });
});

xdescribe("#dedupe", () => {
  it("should return a list with no duplicates", () => {
    expect(dedupe([1, 1, 1, 3, 1, 6, 7, 7, 6])).toEqual([1, 3, 6, 7]);
    expect(dedupe([2, 3, 4, 2, 3, 4, 2, 3, 4])).toEqual([2, 3, 4]);
  });
});

xdescribe("#hello", () => {
  it("should return 'Hello World!' when nothing is passed", () => {
    expect(hello()).toEqual("Hello World!");
  });

  it("should return 'Hello name!' when a name is passed", () => {
    expect(hello("Maria")).toEqual("Hello Maria!");
  });
});

xdescribe("#asyncSquare", () => {
  it("should eventually square a list of numbers", (done) => {
    var result = asyncSquare([1, 2, 3, 4, 5]);
    
    setTimeout(function () {
      expect(result()).toEqual([1, 4, 9, 16, 25]);
      done();
    }, 80);
  });
});

xdescribe("#fakePost", () => {
  var correctURL = "http://fake.api.com/add";
  var incorrectURL = "http://thiswontwork.com/add";

  it("should eventually add two numbers together if the url is correct", (done) => {
    fakePost(correctURL, {a: 13, b: 29}, (result) => {
      expect(result).toEqual(42);
      done();
    });
  });

  it("should eventually throw if the url is not correct", (done) => {
    fakePost(incorrectURL, {a: 13, b: 29}, (result) => {
      
    }, (err) => {
      expect(err instanceof Error).toEqual(true);
      done();
    });
  });
});

xdescribe("iterators and generators", () => {
  it("it should return a infinite stream of ints", () => {
    var iterator = ints();
    expect(iterator.next().value).toEqual(0);
    expect(iterator.next().value).toEqual(1);
    expect(iterator.next().value).toEqual(2);
    expect(iterator.next().value).toEqual(3);
    expect(iterator.next().value).toEqual(4);
    expect(iterator.next().value).toEqual(5);
  });

  it("should be able to produce a list of 10 items", () => {
    var collection = [];

    for (let n of ints()) {
      if (n === 10) break;
      collection.push(n);
    }

    expect(collection).toEqual([0,1,2,3,4,5,6,7,8,9]);
  });
});
