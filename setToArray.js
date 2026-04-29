
 const set={}
 console.log(typeof(set));

 const secondSet=new Set();
 console.log(typeof(secondSet)); //type object

secondSet.add('Jupiter')
secondSet.add('Venus')
secondSet.add('Saturn')
secondSet.add('Saturn')
console.log(secondSet);

secondSet.forEach(planet=>console.log(planet))   // just one iteration method is available in Set .That is forEach

 const array= Array.from(secondSet); //Array.form() helps to convert set to array;
  console.log(array);