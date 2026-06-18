// 1. Reverse an array in diff array.

//  const arr = [1, 2, 3, 4, 5];
// // Output: [5, 4, 3, 2, 1]
// let  newarr=[]

// for(let i=arr.length-1; i>=0; i--){
// newarr.push(arr[i])
// }
// console.log(newarr)




// 1. Reverse an array in same array.
const arr = [1, 2, 3, 4, 5];

for( i=0; i<arr.length/2; i++){
    let temp=arr[i]
    arr[i]=arr[arr.length-1-i]
    arr[arr.length-1-i]=temp
}
console.log(arr)

