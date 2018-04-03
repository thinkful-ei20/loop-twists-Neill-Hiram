function max(numbers) {
  let maxNum = numbers[0];
  let iter = 0;
  while (iter < numbers.length) {
    maxNum = numbers[iter] > maxNum ? numbers[iter] : maxNum;
    iter++;
  }
  return maxNum;
}

function min(numbers) {
  let minNum = numbers[0];
  let iter = 0;
  while (iter < numbers.length) {
    minNum = numbers[iter] < minNum ? numbers[iter] : minNum;
    iter++;
  }
  return minNum;
}

function average(numbers) {
  numbers.length // 
  let sum = 0;
  numbers.forEach(function(num){
    sum += num
  })
  return sum / numbers.length
  
}