function removeDuplicates(collection) {
  var set = new Set(collection);
  return Array.from(set);
}

export default removeDuplicates;