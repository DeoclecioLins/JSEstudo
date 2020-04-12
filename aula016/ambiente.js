//let lista = [1,2,4,5,7]

//console.log(lista.indexOf(2))
/*
var stringArray = ['Blue', 'Humpback', 'Beluga'];
var numericStringArray = ['80', '9', '700'];
var numberArray = [40, 1, 5, 200];
var mixedNumericArray = ['80', '9', '700', 40, 1, 5, 200];

function compareNumbers(a, b) {
  return a - b;
}

//console.log('stringArray:', stringArray.join());
//console.log('Sorted:', stringArray.sort());

console.log('numberArray:', numberArray.join());
console.log('Sorted without a compare function:', numberArray.sort());
console.log('Sorted with compareNumbers:', numberArray.sort(compareNumbers));

console.log('numericStringArray:', numericStringArray.join());
console.log('Sorted without a compare function:', numericStringArray.sort());
console.log('Sorted with compareNumbers:', numericStringArray.sort(compareNumbers));

console.log('mixedNumericArray:', mixedNumericArray.join());
console.log('Sorted without a compare function:', mixedNumericArray.sort());
console.log('Sorted with compareNumbers:', mixedNumericArray.sort(compareNumbers));
*/

 
  function Counter() {
    this.sum = 0
    this.count = 0
  }
  Counter.prototype.add = function(array) {
    array.forEach((entry) => {
      this.sum += entry
      ++this.count
    }, this)
    // ^---- Note
  }
  
  const obj = new Counter()
  obj.add([2, 5, 9])
  
  console.log(obj.count)
  // 3 
  console.log(obj.sum)
  // 16