function extractelement(array){
if(array.length<2){
    throw new Error("Array must have at least two elements");
}
const [first,second,...rest]=array;
let last=rest.pop();               //this is remove the last element of rest elements
return [first,second,last]
}

let array=[1,2,3,4,5,6]
console.log(extractelement(array));
