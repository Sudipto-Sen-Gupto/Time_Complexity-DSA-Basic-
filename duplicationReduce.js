
//  const arr=["Physics","Biology","HigherMath","Chemistry","HigherMath"]

//   const newArray=[]

//   for(let i=0; i<arr.length;i++){
//          if(!newArray.includes(arr[i])){
//             newArray.push(arr[i])
            
//          }
//   }
//   console.log(newArray);

const reduceDuplication=(arr)=>{
          const newArray=[] 
         arr.forEach(element => {
               if(!newArray.includes(element)){
                   newArray.push(element)
               }
                 
         });

          return newArray;
}
 const arr=["Physics","Biology","HigherMath","Chemistry","HigherMath"]
console.log(reduceDuplication(arr));  ;