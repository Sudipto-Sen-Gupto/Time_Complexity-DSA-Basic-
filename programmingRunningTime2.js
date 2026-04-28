
//console.time() function also helps to find out running data time but it reduce some digit after point 

console.time('time');

for(let i=1; i<5000;i++){
    console.log(i);
}

console.timeEnd('time');