function product(x, y) {

  if (x === 0 || y === 0) {
      return 0;
  }
  return y + product(x - 1, y);
}



console.log(product(2, 3));



function reverseString(str) {
  if (str.length <= 1) {
      return str;
  } else {
      return str.slice(-1) + reverseString(str.slice(0, -1));
  }
}

console.log(reverseString("hello"));