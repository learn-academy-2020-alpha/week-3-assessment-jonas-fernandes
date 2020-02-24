// ASSESSMENT 3: Coding Practical Questions


// --------------------1) Create a function that returns the first 10 numbers of the Fibonacci sequence in an array. Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
var sequence = function (n){
  if (n===1){
    return [0, 1];
  }else {
    var s = sequence(n - 1);
    s.push(s[s.length - 1] + s[s.length - 2]);
    return s;
  }
}

 console.log(sequence(10));




// --------------------2) Create a function that takes in an array and returns a new array of only odd numbers sorted from least to greatest.

var fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
// Expected output: [-9, 9, 7, 199]
var fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
// Expected output: [-823, 7, 23]

const odd = (arr) =>{
  for (let i=0; i<arr.length; i++){
    var newArr = arr.filter(arr =>  arr % 2 !== 0 && typeof arr === "number")
    return newArr.sort(function(a, b){return a-b});

  }
}
console.log(odd(fullArr1));
console.log(odd(fullArr2));



// --------------------3) Create a function that takes in a string of a single word and returns the middle letter of the word. If the word is an even number of letters, return the two middle letters.

var middleLetters1 = "hello"
// Expected output: “l”
var middleLetters2 = "rhinoceros"
// Expected output: “oc”

 const extractMiddle = (str)=> {
        var position;
        var length;

        if(str.length % 2 == 1) {
            position = str.length / 2;
            length = 1;
        } else {
            position = str.length / 2 - 1;
            length = 2;
        }

        return str.substring(position, position + length)
    }

console.log(extractMiddle(middleLetters1));
console.log(extractMiddle(middleLetters2))


// --------------------4) Create a class to get the area of a sphere. Create three spheres with different radii as test cases. Area of a sphere =  4πr^2 (four pi r squared)

class Sphere{
  constructor(radius){
    this.pi = Math.PI
    this.radius = radius
    
  }
  sphereArea(){
    return (4 * `${this.pi}` * `${this.radius}` ** 2);
  }
}

var area1 = new Sphere (20)
var area2 = new Sphere (40)
var area3 = new Sphere (10)

console.log(area1.sphereArea())
console.log(area2.sphereArea())
console.log(area3.sphereArea())


// --------------------5) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

var numbersToAdd1 = [2, 4, 45, 9]
// Expected output: [2, 6, 51, 60]
var numbersToAdd2 = [0, 7, -8, 12]
// Expected output: [0, 7, -1, 11]
var numbersToAdd3 = []
// Expected output: []


const cumulativeSum = (array) =>{
    if(array.length === 0){
        return array;
    }
    let result = [array[0]];
    for(let i = 1; i < array.length; i++) {
    result.push(array[i] + result[i-1]);
    }
        return result;
}
console.log(cumulativeSum(numbersToAdd1));
console.log(cumulativeSum(numbersToAdd2));
console.log(cumulativeSum(numbersToAdd3));

