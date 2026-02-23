// let student_marks =[10,20,30,40,50];


// let sum = 0;

// for(let val of student_marks){
//     sum+=val;
// }
// let avg = sum/student_marks.length;
// console.log(`Average marks of class = ${avg}`);
// let number = 10;

// for(let i=10;i>=0;i--){
//     console.log(i);
// }
// for (let i=0;i<=10;i++){
//     if(i%2 !== 0){
//         console.log(i);
//     }

// // }
// let i=1;
// while(i<=5){
//     console.log(i);
//     i++;
// // }
// let i=2;
// while(i<=10){
//     console.log(i);
//     i+=2;
// }
// let i=1;
// do{
//     console.log(i);
    
// }
// while(i<=10);
// for(;;){
//     console.log("hello");
// }

// for(let i=0;i<=10;i++){
//     if(i===3){
        
//         break;
//     }

//     console.log(i);
// }
// for(let i=1;i<=10;i++){
//     if(i===3){
//         continue;
//     }
//     console.log(i);
// }
// let items=[1,2,3,4,5];

// for(let item of items){
//     if(item===3){
//         console.log("items found")
//         continue;
//     }
// }
// let numbers=[ 1,-1,2,-2,3,-3]

// for(let num of numbers){
//     if(num<=0){
//     console.log(num);
//     continue;
//     }

//     }

// let i = 0;
// do{
//     console.log(i);
//     i++;
    
// }while(i<=10)
// let arr = [1,2,3,4,5];

// arr.forEach(function(num){
//     console.log(num);
// });
// let user = {
//     name:"bhadra",
//     age: 28,
//     city:"tiptur",
// }
// for(let key in user){
//     console.log(key+":"+user[key]);
// }
// let numbers = [1,2,3,4,5];
// for(let num of numbers){
//     if(num===3)continue;
//     console.log(num);
// }   
// let arr =[1,2,3,4,5,6];

// arr.reverse();
// console.log(arr);
// function palindrome(str){
//     let reversed = str.split("").reverse().join("");
//     return str === reversed; }
//     console.log(palindrome('madam'));
//     console.log(palindrome('hello'));
// const fruits = ["Apple", "Mango", "Banana"];
// fruits.forEach((fruit) => {
//   console.log( fruit);
// });
// let num=[1,2,3,4,5,6];

// num.pop();
// console.log(num);


// let num=[1,2,3,4,5,6];

// num.push(7);
// console.log(num);

// let num=[1,2,3,4,5,6];

// num.shift(1);
// console.log(num);
    
// let num=[1,2,3,4,5,6];

// num.unshift();
// console.log(num);

// let num=[1,2,3,4,5,6];

// num.slice(1,4);
// console.log(num);
// console.log(num.slice(1,4));

// let num=[1,2,3,4,5,6];

// num.splice(1,4);
// console.log(num);
// console.log(num.splice(1,4));
// function multiplay(x,y){
//     return x*y;
// }
// console.log(multiplay(5,6));
// function sayhi(name){
//     console.log("hi"+" "+name);
// }
// function greet(callback){
//     callback("bhadra");
// }
// greet(sayhi);
// const add = (a,b) => {

//     return a+b;
// }
// console.log(add(5,10));

// const squere = (x) => x*x;

// console.log(squere(5));

// const greet =name =>{

//     return "hello"+" "+name;
    
// }

// console.log(greet("bhadra"));

// const nums = [1,2,3,4,5,6,7,8,9,10];

// const evennumber =nums.filter(num => num%2===0);

// console.log(evennumber);


// let arr = ["pune","mumbai","bangalore","delhi"];

// arr.forEach((val,index,arr) =>{
   
//     console.log(val.toUpperCase(),index,arr);
// });

// const num = [1,2,3,4,5,6,7,8,9,10];

// const sum = num.reduce((acc, num) => acc + num , 0);

// console.log(sum);

// console.log(add(5,10));

// function add(a,b){
//     return a+b;
// }



// const greet = function(name){
//     return "hello"+" "+name;
// } 

// console.log(greet("Bhadra"));
// const factorial = function fact(n){
//     if(n===1)return 1;
//     return n*fact(n-1);
// }

// console.log(factorial(5));
const add = (a,b) => a+b;

console.log(add(5,10));