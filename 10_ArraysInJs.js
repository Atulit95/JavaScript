// Array declaration

const myArr = [0, 1, 2, 3, 4]
console.log(myArr[0]);

// Array Methods

myArr.push(6);
console.log(myArr);

myArr.pop(5)
console.log(myArr);

// myArr.unshift(9)
// myArr.shift()

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join()

// console.log(myArr);
// console.log( newArr);


// slice, splice (splice modifies the original array)

console.log("A ", myArr);//=> [ 0, 1, 2, 3, 4 ]

const myn1 = myArr.slice(1, 3)
console.log(myn1);//=> [ 1, 2 ]
console.log("B ", myArr);//=> [ 0, 1, 2, 3, 4 ]


const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);//=> [ 0, 4 ]
console.log(myn2);//=> [ 1, 2, 3 ]

const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros] // spreading of arrays(recommended)

// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);



console.log(Array.isArray("Hitesh"))
console.log(Array.from("Hitesh"))
console.log(Array.from({name: "hitesh"})) // interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));