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








// remove duplicate from same arr

 // let arr=[1,2,3,4,1,3,2,2]
 
 // for(let i=0; i<arr.length; i++){
 //     for(let j=i+1; j<arr.length; j++){
 //         if(arr[i]==arr[j]){
 //             for(let k=j; k<arr.length-1; k++){
 //                 arr[k]=arr[k+1]
 //             }
             
         
 //             arr.length--,
 //              j--;
 //         }
        
 //     }
 // }
 // console.log(arr)





//  Find the maximum value in an array.

// const arr = [3, 5, 7, 2, 8];
// // Output:8
// let max=arr[0]
// for(let i=0; i<arr.length; i++){
//     if(max<arr[i]){
//         max=arr[i]
//     }
// }
// console.log(max)







 // Sum all elements in an array.

//   const arr = [1, 2, 3, 4];
// // Output:10
// let sum=0;
// for(let i=0; i<arr.length; i++){
// sum+=arr[i]
// }
// console.log(sum)







// 6. Merge two arrays.

//  const a = [1, 2];
// const b = [3, 4];
// let mergearr=[]
// // Output:[1, 2, 3, 4]
// for(i=0; i<a.length; i++){
//     mergearr.push(a[i])
// }
// for(i=0; i<b.length; i++){
//     mergearr.push(b[i])
// }
// console.log(mergearr)









// const arr = [2, 4, 6, 8];
//   let flag=true;
// // Output:true
// for(i=0; i<arr.length; i++){
  
//     if(arr[i]%2!=0){
//         flag=false;
//         break;
//     }
// }
//   console.log(flag)









//  const arr = [1, 2, 3, 4, 5];
// //  out :[5, 4, 3, 2, 1]

// for(let i=0; i<arr.length/2; i++){
//     let temp=arr[i]
//     arr[i]=arr[arr.length-1-i]
//     arr[arr.length-1-i]=temp
// }
// console.log(arr)




//  Remove duplicate elements from an array in different array

const arr = [1, 2, 2, 3, 4, 4, 5];
// Output:[1, 2, 3, 4, 5]

let newarr=[]
for(let i=0; i<arr.length; i++){
    let flag=false;
       if (!newarr.includes(arr[i])){
            newarr.push(arr[i])  

        }
      
    }

console.log(newarr)













// 9. Count occurrences of a value.
let value=2
let count=0
const arr = [1, 2, 2, 3, 2];
// Output for value = 2:3
for(let i=0; i<arr.length; i++){
    if(arr[i]==value){
        count++
    }
}
console.log(value+":"+count)















