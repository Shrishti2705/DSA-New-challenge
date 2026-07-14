// 1. Reverse an array in diff array.

//  const arr = [1, 2, 3, 4, 5];
// // Output: [5, 4, 3, 2, 1]
// let  newarr=[]

// for(let i=arr.length-1; i>=0; i--){
// newarr.push(arr[i])
// }
// console.log(newarr)




// 1. Reverse an array in same array.
// const arr = [1, 2, 3, 4, 5];

// for( i=0; i<arr.length/2; i++){
//     let temp=arr[i]
//     arr[i]=arr[arr.length-1-i]
//     arr[arr.length-1-i]=temp
// }
// console.log(arr)





// Flatten a nested array.

 const arr = [1, [2, 3], [4, [5]]];
// Output: [1, 2, 3, 4, 5]
let newarr=[]
const func=(arr)=>{
    arr.forEach((item) => {
        if(Array.isArray(item)){
            func(item)
        }else{
            newarr.push(item)
        }
    });
}

func(arr)
console.log(newarr)










// const arr = [1, [2, 3], [4, [5]]];
// let newarr=[]

// const flattern=(arr)=>{
// arr.forEach((item)=>{
//     if(Array.isArray(item)){
//         flattern(item)
//     }else{
//         newarr.push(item)
//     }
// })
    
// }

// flattern(arr)
// console.log(newarr)








