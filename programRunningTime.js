//performance.now()function
//it's help to find out the programming running time
const firstTime=performance.now()

for(let i=1; i<50;i++){
       console.log("time")
}

const endTime=performance.now();
console.log(endTime-firstTime);