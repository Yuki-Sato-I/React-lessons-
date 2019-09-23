const arr1 = ['A', 'B', 'C'];
const arr2 = [...arr1, 'D', 'E'];
console.log(arr2);

const obj1 = { a: 1, b: 2, c: 3 };
//... スプレッド演算子　展開する
const obj2 = { ...obj1, d: 4, e: 5 };
console.log(obj2);