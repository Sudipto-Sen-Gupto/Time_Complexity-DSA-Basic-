
const firstDataArray= [];
const secondDataArray=[];

for(let i=1; i<=800000;i++){
      if(i<=400000){
        firstDataArray.push(i)
      }
      secondDataArray.push(i)
}
// console.time('length');
// console.log(firstDataArray.length);
// console.log(secondDataArray.length);
// console.timeEnd('length');

console.time('map1');
const mappingData=firstDataArray.map(data=>({user:data}))
// console.log(mappingData);
console.timeEnd('map1');

console.time('map2');
const mappingSecondData=secondDataArray.map(data=>({user:data}))
console.timeEnd('map2')


console.time('find')
const findData=secondDataArray.map(data=>data.userId===400000)
console.timeEnd('find')

console.time('findPreciseArray')
const userId=secondDataArray[400000]
console.log(userId);
console.timeEnd('findPreciseArray')