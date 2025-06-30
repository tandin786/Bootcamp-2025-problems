function reverseString(string){
    return string.split('').reverse().join('')
}
// console.log(reverseString("hello"))

function replace(str, charToReplace, StrReplacement){
     return str.replace(charToReplace, StrReplacement)
}
console.log(replace("hello", "o", "p"))