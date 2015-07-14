function *ints() {
  let i = 0;

  while (true) {
    yield i++;
  }
}

export default ints;
