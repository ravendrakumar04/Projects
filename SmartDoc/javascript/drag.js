let result=document.getElementById('btn');
let input=document.getElementById('v1');
droparea=document.getElementById('calculator');


let a=[10,20];
sum=0; 
for(let b of a){
  sum=sum+b;
  console.log(sum)
}


let fname="Ravendra";
let lname="Kumar"
let city="chennai"

console.log(`My Name is ${fname} ${lname} I live in ${city}`)

let ternary=(10<5?("hello"):("bye"));
console.log(ternary);

let a1=[10,20,30,40,50];
let a2=[60,70,80,90];
a3=a1.map(x=>x*2);

a4=a2.find(x=> x>70);
console.log(a3,a4);


function f1(names){
  console.log('hello' + " " + names);
  
}
function call(callback){
  callback('Ravi')
}

call(f1)
call(f2=(names)=>{

  console.log('bye' + " " + names);
});








