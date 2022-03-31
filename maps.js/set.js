// set is a collection similar to an array except no duplicate and is unordered
/*
const arr = [1, 1, 2, 3, 3, 4, 4, 5, 5, 5, 5, 6,];
console.log(arr);

const uniqueVals = new Set(arr);
console.log(uniqueVals);

const arrNoDups = [...uniqueVals];

console.log(arrNoDups);

*/

let stuff = new Set();
console.log(stuff);

stuff.add(5);
stuff.add(2);
stuff.add('Hello');
stuff.add((a, b) => a +b);
stuff.add({'prop1':1});

console.log(stuff);

stuff.delete(2);
console.log(stuff);
console.log(stuff.size);
console.log(stuff.has(5));
console.log(stuff.has(2));

stuff.forEach(el => {console.log(el)});