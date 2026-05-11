// let num = [1,2,3,4,5]
//  for(let i = num.length ; i>=0 ;i--){
//     console.log(i);
//  }

// let num = [40,20,10,30];
// console.log(num.reverse());

// let ascending = num.sort((a, b) => a - b);

// console.log(ascending);

// // filter 
// num.sort(function(a,b){
// return b-a  ;
// })

// console.log(num);

// let fruits = [ "apple", "mango","banana"]

//  console.log(fruits.includes("mohan"));
 

//  let fruits = ["apple", "mango", "banana"];

// function checkFruit(value) {
//   for (let i = 0; i < fruits.length; i++) {
//     if (fruits[i] === value) {
//       return true;  // found it
//     }
//   }
//   return false; // not found
// }

// console.log(checkFruit("tanay"));   



// let name = ["oggy" , "jack" , "bob" , "budh" , " badri" , "tom" , "jerry"]
// // console.log(name.join(","));

// //  call back function
// name.forEach(function (value) {
//   console.log(value);                                         
  
// });


// let num = [1,2,3,4,5,6,7,8];

// num.map((val)=>{
//   console.log(val+2);
  
// })


// function mapnew(val){

//   for(let i = 0 ; i<val.length;i+2){
//   }
// }


 

// let data = [
//   {
//     "name":"tanay",
//     "post":"ceo"
//   },
//   {
//     "name":"shry",
//     "post":"manager"
//   },
//   {
//     "name":"tanay",
//     "post":"cto"
//   },
// ]
// console.log(data);
// console.table(data);

// for(let i = 0; i<data.length;i++){
//   console.log(data[i].name);
  
// }



let num = [1,2,3,4,5];
let total = num.reduce((acc,cv)=>{
  return acc + cv
},0);

console.log(total);
