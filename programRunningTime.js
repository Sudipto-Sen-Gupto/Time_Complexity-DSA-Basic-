//performance.now()function

const firstTime=performance.now()

for(let i=1; i>50;i++){
       print("time")
}

const endTime=performance.now();
console.log(endTime-firstTime);