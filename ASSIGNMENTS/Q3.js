function swapValues(x, y) {

    [x, y] = [y, x];
    return [x, y];
}

// Example usage
let x = 5;
let y = 10;

console.log("Before swap:", x, y); 
[x, y] = swapValues(x, y);
console.log("After swap:", x, y);  
