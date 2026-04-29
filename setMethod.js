
 const arrOfBone= ['Femur', 'Patella', 'Humerus', 'Radius', 'Scapula', 'Clavicle', 'Sternum','Patella'];

 const set=new Set(arrOfBone);
 
 const isItemsExist=set.has('Ribs'); //has() method used for checking the data is exit or not
  console.log(isItemsExist);

const deletedData=set.delete('Patella') // delete() method used for delete item from set
console.log(deletedData);
console.log(set);