const a = [1, 3, 5, 2, 4];

const result1 = a.filter((num) => num % 2 !== 0);
console.log(result1); 

const result2 = a.map((num) => num * num);
console.log(result2); 

const result3 = a.filter((num) => num % 2 !== 0).map((num) => num * num);
console.log(result3); 
