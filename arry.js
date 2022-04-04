

// arry reverse methood solution
// soluton 1 reverse
let arry = [10,20,30,40,50,60,70,80,90,100];
console.log(arry);

// soluton 2 reverse
let arry1 = [10,20,30,40,50,60,70,80,90,100];
arry1.reverse();
console.log(arry1);

// soluton 3 reverse
let arry3 = [10,20,30,40,50,60,70,80,90,100];
for (let index =arry3.length-1; index>=0; index--) {
    console.log(arry3[index]);  
}



// arry sum solution
// solution 1 sum
let arry4 = [10,20,30,40,50,60,70,80,90,100];
let sum = 0;
for (let index = 0; index < arry4.length; index++) {
    sum += arry4[index];    
}
console.log(sum);

// solution2 sum
let arry5 = [10,20,30,40,50,60,70,80,90,100];
let sum1 = 0;
for (let index = 0; index < arry5.length; index++) {
    sum1 = sum1 + arry5[index];  
}
console.log(sum1);


// arry indexOf solution
// solution 1 indexOf
let arry6 = [10,20,30,40,50,60,70,80,90,100];
console.log(arry6.indexOf(60));

// solution 2 indexOf
let arry7 = [10,20,30,40,50,60,70,80,90,100];
console.log(arry7.indexOf(1000));

// solution 3 indexOf
let arry81 = [10,20,30,40,50,60,70,80,90,100];
for (let index = 0; index < arry8.length; index++) {
    console.log(arry81.indexOf(arry8[index]));
    
}

// solution 3 indexOf
let arry8 = [10,20,30,40,50,60,70,80,90,100];
let indexOf =0;
for (let i = 0; i < arry8.length; i++) {
  if(arry8[i]==100){
      indexOf=i;
  }
}
console.log(indexOf);


// arry find solution
// solution 1 find
let arry9 = [10,20,30,40,50,60,70,80,90,100];
console.log(arry9.find((s)=>s<40));

// solution 2 find
let arry10 = [10,20,30,40,50,60,70,80,90,100];
console.log(arry10.find((s)=>s<40));

// solution 3 find
let arry11 = [10,20,30,40,50,60,70,80,90,100];
let fin = (arry11.find((s)=>s<40));
console.log(fin);


// arry filter solution
// solution 1 filter
let arry12 = [10,20,30,40,50,60,70,80,90,100];
console.log(arry12.filter((s)=>s>40))

// solution 2 filter
let arry13 = [10,20,30,40,50,60,70,80,90,100];
console.log(arry13.filter((s)=>s<40))

// solution 3 filter
let arry14 = [10,20,30,40,50,60,70,80,90,100];
let filt = (arry14.filter((s)=>s<40));
console.log(filt);


// arry forEach solution
// solution 1 forEach
let arry15 = [10,20,30,40,50,60,70,80,90,100];
let fore = arry15.forEach((a,b)=>console.log(a,b));

// solution 2 forEach
let arry16 = [10,20,30,40,50,60,70,80,90,100];
for( let index = 0; index< arry16.length; index++){
    console.log(arry16[index]);
}

// solution 3 forEach
let arry171 = [10,20,30,40,50,60,70,80,90,100];
arry17.forEach((number, index) => {
    console.log('Index: ' + index + ' Value: ' + number);
});


// arry fill solution
// solution 2 fill
let arry17 = [10,20,30,40,50,60,70,80,90,100];
console.log(arry17.fill(100));

// solution 2 fill
let arry18 = [10,20,30,40,50,60,70,80,90,100];
console.log(arry18.fill(100,2))

// solution 3 fill
let arry19 = [10,20,30,40,50,60,70,80,90,100];
console.log(arry19.fill("shahin",2,3))

// solution 4 fill
let arry20 = [10,20,30,40,50,60,70,80,90,100];
for (let i = 0; i < arry20.length; i++) {
    arry20[i] = 100;
}
console.log(arry20);


// arry findIndex solution
// solution 1 findIndex
let arry21 = [20,10,40,50,60,70,80,90,100];
console.log(arry21.findIndex((v,i,arry)=>v>60));

// solution 2 findIndex
let arry22 = [20,20,10,40,50,60,70,80,90,100];
arry22.findIndex((v,i,arry)=>{
    console.log(v+"\n" +1)
})



// arry sort solution
// solution 1 sort
let arry23 = [50,20,10,40,60,70,80,90];
console.log(arry23.sort())


// arry splice solution
// solution 1 splice
let arry24 = [20,20,10,40,50,60,70,80,90,100];
arry24.splice(1,0,10) 
console.log(arry24);


// arry slice solution
// solution 1 arry
let arry25 = [20,20,10,40,50,60,70,80,90,100];
console.log(arry25.slice(0,1));


// arry pop solution
// solution 1 pop
let arry26 = [20,20,10,40,50,60,70,80,90,100];
arry28.pop()
console.log(arry28)

// arry push solution
// solution 1 push
let arry27 = [20,20,10,40,50,60,70,80,90,100];
arry27.push(200);
console.log(arry27);


// arry shift solution
// solution 1 shift
let arry28 = [20,20,10,40,50,60,70,80,90,100];
arry28.shift();
console.log(arry28);


let arry29 = [20,20,10,40,50,60,70,80,90,100];
arry29.unshift(100);
console.log(arry29);
