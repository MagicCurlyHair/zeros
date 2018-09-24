module.exports = function getZerosCount(number) {
  let counter = 0;
  let currentNum;
  let index = 0;
  let j;
  // count how many 5 are present in number
  counter = Math.trunc(number / 5);
  // get index of last 5 that can be divided by 5
  index = counter;
  while(index % 5 != 0){
    index--;
  }
  // increment counter by additional 5's (for every power of 5)
  for (let i = index; i > 0 ; i -= 5){
    index = i;
    while (index % 5 == 0){
      index /= 5;
      counter++;
    }
  }
  return counter;
}
