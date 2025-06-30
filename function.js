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