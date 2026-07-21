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






// count the occurance of the all elements

let arr=[1,2,2,3,2]
for(let i=0; i<arr.length; i++){
    let count=1;
    for(let j=i+1; j<arr.length; j++){
        if(arr[i]==arr[j]){
            count++
        }
    }
    let counted=false; 
    for(let k=0; k<i; k++){
        if(arr[i]==arr[k]){
            counted=true;
            break;
        }
    }
    if(!counted){
        console.log(arr[i], count)
    }
}




let arr=[5,1,5,2,5]
let value=5
let count=1
for(let i=0; i<arr.length; i++){

        if(arr[i]==value){
            count++
        }
    
    if(count==2){
        console.log(value, count)
        break;
    }
}







//  Filter even numbers.


const arr = [1, 2, 3, 4, 5];
// Output:[2, 4]

for(let i=0; i<arr.length; i++){
    if(arr[i]%2!==0){
       for(let k=i; k<arr.length-1; k++){
           arr[k]=arr[k+1]
       
       }
       arr.length--,
       i--
    }
}
console.log(arr)




// Find the index of the second occurrence of a value.

const arr = [5, 1, 5, 2, 5];
// Output for value = 5: 2
let value=5
  let count=0;
for(let i=0; i<arr.length; i++){
  
if(value==arr[i]){
    count++
}
if(count==2){
    console.log(value, i)
    break;
}
    
}









// Sort an array in descending order.


const arr = [3, 1, 4, 2,9];
// [4, 3, 2, 1]

for(let i=0; i<arr.length; i++){
    for(let j=i+1; j<arr.length; j++){
        if(arr[i]<arr[j]){
            temp=arr[i]
        arr[i]=arr[j]
        arr[j]=temp
    
        }
    }
    
}
console.log(arr)





// 13. Find common elements in two arrays.


 const a = [1, 2, 3,7,9]; const b = [2, 3, 4,9];
// Output:[2, 3]
let c=[]

for(let i=0; i<a.length; i++){
    for(let j=0; j<b.length; j++){
        if(a[i]==b[j]){
            c.push(a[i])
        }
    }
}
console.log(c)





// 14. Find unique elements from two arrays.

const a = [1, 2, 3]; const b = [3, 4, 5];
// Output:[1, 2, 4, 5]
let c=[]

for(let i=0; i<a.length; i++){
    let found=false;
    for(let j=0; j<b.length; j++){
        if(a[i]==b[j])
        {
            found=true;
            break;
        }
    }
        if(!found){
            c.push(a[i])
        }
}
    for(let i=0; i<b.length; i++){
        let found=false;
        for(let j=0; j<a.length; j++){
            if(b[i]==a[j]){
                found=true;
                break;
            }
        }
        if(!found){
            c.push(b[i])
        }
    }

console.log(c)





// 15. Remove falsy values from an array.
const arr = [0, "a", "", false, 5];
// Output:  ["a", 5]

for(let i=0; i<arr.length; i++){
    if(!arr[i]){
        for(let j=i; j<arr.length; j++){
            arr[j]=arr[j+1]
        }
        arr.length--;
        i--
    }
}
console.log(arr)



















// 16. Chunk an array into smaller arrays.

const arr = [1, 2, 3, 4, 5];
// chunk size = 2 Output:[[1, 2], [3, 4], [5]]
let size=2
let result=[]
let temp=[]
index=0

for(let i=0; i<arr.length; i++){
    temp[index]=arr[i]
    index++
    
    if(index==size){
        result[result.length]=temp
        temp=[]
        index=0
    }
}
if(temp.length>0){
    result[result.length]=temp
}
console.log(result)








// 17. Find the longest string in an array.

const arr = ["a", "abcd", "abttttc"];
// Output:"abcd"
let longest=arr[0]
for(let i=0; i<arr.length; i++){
    if(arr[i].length>longest.length){
        longest=arr[i]
    }
}
console.log(longest)








// 18. Convert array to object using index as key.



const arr = ['a', 'b'];
// Output:{0: 'a', 1: 'b'}
let obj={}
for(let i=0; i<arr.length; i++){
    obj[i]=arr[i]
}
console.log(obj)









// 19. Find second largest number.

const arr = [5, 3, 9, 7];
// Output: 7
let longest=arr[0]
for(let i=0; i<arr.length; i++){
    if(longest<arr[i]){
        longest=arr[i]
    }
}
console.log(longest)

















