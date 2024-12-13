function values(obj){
   const {name,address:{street}}=obj
   return {name,address:{street}}
}
let obj={
    name:"mohd kaif",
    age:21,
    address:{
        street:'19-3-153 pratap nagar ',
        city:"bidar",
        state:"karnataka"
    }

}

console.log(values(obj));

