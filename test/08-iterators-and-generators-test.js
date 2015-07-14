import expect from "expect";
import ints from "../src/08-iterators-and-generators";

describe("iterators and generators", () => {
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