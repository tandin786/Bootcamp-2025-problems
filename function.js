function reverseString(string){
    return string.split('').reverse().join('')
}
console.log(reverseString("hello"))

function replace(str, charToReplace, StrReplacement){
     return str.replace(charToReplace, StrReplacement)
}
console.log(replace("hello", "o", "p"))


function strlengthEven(str){
    if(str.length % 2 === 0 ){
        return "even"
    }else{
        return "odd"
    }
}
console.log(strlengthEven("hello"))


function findRabbit(arr){
    return arr.indexOf("rabbit")
}
console.log(findRabbit(["got","bird","rabbit","dag","cat"]));


const reverseWords=str => str.split(' ')
.map(word => word.split('').reverse().join(''))
.reverse()
.join(' ');
let str = "i am busy"
console.log(reverseString(str))


function findAverage(array) {
    if(array.length === 0){
        return 0;
    }
    const sum = array.reduce((accumulator, currentValue)=> accumulator + currentValue, 0);
    return sum / array.length
}
console.log(findAverage([1,2,3,4]))


function bmi(weight, height) {
    let bmi = weight / (height ** 2);
    if (bmi<= 18.5){
  return "Underweight";
}else if(bmi <= 25.0 ){
    return"Normal"
}else if(bmi <= 30.0){
    return"Overweight"
}else{
    return"Obese"
}
}
console.log(bmi(80 ,1.80))

var countSheep = function (num){
let result = ""
for(let i = 1; i <= num; i++){
result += i + " sheep..."
}
return result;
}
console.log(countSheep(3))


function isIsogram (str){
    lowerstr = str.toLowerCase();
    let arr = lowerstr.split('');
    let letter = new Set(arr);
    if(letter.size === str.length){
        return true
    }else{
        return false
    }
}
console.log(isIsogram("abcdef"))


function past(h,m,s){
    return h * 3600000 + m * 60000 + s * 1000;
}
console.log(past(1,1,1))

function longest(s1, s2) {
let combine = s1 + s2
let arr = combine.split('')
let sorted = arr.sort()
let single = new Set(sorted)
let result = [...single].join('')
return result
}

console.log(longest("xyaabbbccccdefww","xxxxyyyyabklmopq"))


const stringToArray = (string) => string.split(' ')
console.log(stringToArray("I am shadow strom"))

function countBy(x, n) {
  let z = [];
  for(let i = 1; i <= n; i++){
    z.push(x * i)
  }
  return z;
}
console.log(countBy(2,5))

function XO(str) {
  let lowercase = str.toLowerCase();
  let Xcount = 0;
  let Ocount = 0;
  for(let i = 0;i < lowercase.length; i++){
    if(lowercase[i] === 'x'){
        Xcount = Xcount + 1
    }else if(lowercase[i]==='o'){
        Ocount = Ocount + 1
    }
  }
  return Xcount===Ocount
}
console.log(XO("xox"))

const rps = (p1, p2) => {
  if(
    (p1 === "scissors" &&  p2 === "paper") ||
    (p1 === "paper" && p2 === "rock") ||
    (p1 === "rock" && p2 === "scissors")
){
    return "Player 1 won!"
  }else if(p1 === p2){
    return "Draw!"
  }else{
    return "Player 2 won!"
  }
};
console.log(rps("paper", "scissors"))


function sumArray(array) {
let higest = Math.max(...array)
let lowest = Math.min(...array)
let sum = array.reduce((accumulator,currentValue) => accumulator+currentValue,0)
let result = sum - higest - lowest
return result

}
console.log(sumArray([2,1,3,5,6,10,9]))



function digPow(n, p){
let num = n.toString().split('').map(Number)
let result = 0
for(let i = 0; i < num.length;i++){
    result = result + Math.pow(num[i],p + i)
}
if(result % n === 0 ){
return result / n;
}else{
  return -1;  
}
}
console.log(digPow(46288,3))