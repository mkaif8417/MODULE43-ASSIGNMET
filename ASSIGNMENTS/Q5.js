let array=[23,4,5,6,788,56];

function check(array){
 return [Math.min(...array),Math.max(...array)]   
}


let obj={};
[obj.min,obj.max]=check(array);
console.log(obj);

