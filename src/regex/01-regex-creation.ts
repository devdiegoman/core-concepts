let txt = "world this is a world simple text to check if it contains the hello word and world word"

let regex1 = new RegExp("hello");
let regex2 = /world/;

console.log(regex1.test(txt));
console.log(regex2.exec(txt));

console.log(txt.match(regex1))
console.log(txt.search(regex1))


console.log(txt.replace(regex1, 'hola'))

console.log(txt.split(regex1))


