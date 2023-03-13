// initialize the variables 
let arr1 = [];
let arr2 = [];
let arr3 = [];
let arr4 = [];
let sum =  0 ; 


// filling the first array 
numberOfElements1 = parseInt(prompt("enter the number of elements of the 1st set: "));
for ( let i = 0 ; i < numberOfElements1 ; i++){
    let element = "";
    element = parseInt(prompt(`enter the ${i+1}th element: `));
    arr1.push(element);
}
// filling the second array 
numberOfElements2 = parseInt(prompt("enter the number of elements of the 2nd set: "));
for ( let i = 0 ; i < numberOfElements2 ; i++){
    let element = "";
    element = parseInt(prompt(`enter the ${i+1}th element: `));
    arr2.push(element);
}
// creating the  distinct elements from each array
for (let i = 0 ; i < arr1.length; i++) {
    if (!(arr2.includes(arr1[i]))){
        arr3.push(arr1[i]);
    }

}
for (let i = 0 ; i < arr2.length; i++) {
    if (!(arr1.includes(arr2[i]))){
        arr4.push(arr2[i]);
    }

}
// concatinating the two arrays 
arr3 = arr3.concat(arr4);

// calculating the  sum
for (let i = 0 ; i < arr3.length; i++){
    sum += arr3[i];
}


console.log(`the sum is ${sum}`);








