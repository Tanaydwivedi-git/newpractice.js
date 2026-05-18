// const obj = {
//     name: "ram",
//     roll_no: 12,
//     sub: "mern",

//     greet: function (){
//         console.log( "tanay , akfhdsji");
        
//     }
// }
// // console.log(obj.name);
// // ad karna 
// obj.age = 55;
// console.log(obj);

// obj.name = "mhkgu";
// console.log(obj);



// console.log(obj.greet());



const obj = {
    name: "ram",
    roll_no: 12,
    sub: "mern",


    tana:{
    name1: "ram2",
    roll_no1: 122,
    sub1: "mern2",

    }
   

}
console.log(obj.tana.name1);

console.log(Object.keys(obj),Object.keys(obj.tana));
 
for(let key in obj){
    console.log(key,obj[key]);
    
}