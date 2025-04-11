// console.log("Welcome in js");
// console.log("-----Starting with variable------ ", c);
// const a = 5;
// let b = 6;
// var c = 7;
//  b =8;
//  a =8; error caught bcoz const variable assign
//   c=7;
// console.log("a");
// console.log("-a: -b: -c:",a,b,c);
// console.log("sum",a+b+c);
// // a=8;
// console.log("sum ="+ a+b+c);
// // c=8;
// console.log("sum",a+b+c);



// console.log("-a:,-b:,-c",a,b,c);

// console.log("Sum:"+a+b+c);
// console.log("if else statements");

// const marks= 80;
// if(marks > 40){
//     console.log("Pass");

// }else{
//     console.log("Fail");
// }


// console.log("Largest no:");
// const x =10;
// const y =30;
// const z =20;

// if(x>y>z){
//     console.log(x);
// }else if(y>z){
//     console.log(y);

// }else{
//     console.log(z);
// }


// if(x>y){
//     if(x>z){
//     console.log(x);
// }
// }else if(y>z){
//     console.log(y);

// }else{
//     console.log(z);
// }



// console.log("---- For Loop");
// let sum =0;
// for(let i =0;i<10;i++){
    // console.log(i,);
    // console.log(i++);

    // sum = sum+i;
    // if(i%2===0)
    //     // console.log("even",i);
    // console.log(i)
 
// }
// console.log(sum);


// for even
// console.log("   while loop");
// let n =10;
// let sum =0;
// while(n > 0)  {
//     // console.log(n);
//     // sum= sum + n;
//     n--;
//     sum= sum + n;
// }
// console.log(sum);


// for odd

// console.log("   while loop");
// let n =10;
// // let sum =0;
// while(n > 0)  {
    
//     n = n-1;
//     console.log(n);
//     n = n-1;
    
//     // sum= sum + n;
// }
// // que= find maximum value of 4 numbers.

// console.log("--- array---");
// const arr = [ 1, 2, 3, 4, 5 , 6, 6];
// console .log(arr);

// console.log("First value: ", arr[0]);


// for(let i =0;i<arr.length;i++){
//     console.log(arr[i]);
// }
// reverse order
// console.log("--- array---");
// const arr = [ 1, 2, 3, 4, 5 , 6, 6];
// console .log(arr);

// console.log("First value: ", arr[0]);


// for(let i =arr.length -1; i>=0; i--){
//     console.log(arr[i]);
// }


// pop and push

// console.log("--Add new element--")
// arr.splice(4,0,7);
// 4 = indexes, 0 = no element remove, 7 =  add 7 in array
// means on i = 4 add 7 

// console.log(arr);
// console.log("--Remove element from aaray--");
// arr.splice(2,1);
// 2 = index, 1=  element remove
// meaning that on 1= 2 element remove
// console.log(arr);

// Questions:
//  replace 5 with 3: eg:[3,5,6,7,5] --> [3,3,6,7,3]
// reverse the array: eg:[3,4,5,6,6,2] -->[2,6,,6,5,4,3]


// console.log("For each loop");
// const arr2=[4,7,5,3,1,1];

// const myFun = (element) => {
//     console.log("Element");
// };
// arr2.forEach(myFun)

// object
// console.log("-- Object --");
// const obj = {
//     name : "Harsh",
//     rollno: 2931,
//     result: "Pass",
// };
// console.log(obj);
// // console.log("name:",obj.name)
// console.log("name: ", obj["name"]);

// console.log("-- add new key in obj--");
// obj.id = 2;
// console.log(obj);

// console.log("-- add new key in obj--");
// obj.city = "Agra";
// console.log(obj);

// console.log("-- add new key in obj--");
// obj.result = "fail";
// console.log(obj);


// console.log("--Remove object--")
// delete obj.id;
// console.log(obj);

// const data = [
//     {
//         id: 1,
//         name:"a",
//     },
//     {
//         id: 2,
//         name:"b",
//     },  {
//         id: 3,
//         name:"c",
//     },  {
//         id: 4,
//         name:"d",
//     },  {
//         id: 5,
//         name:"e",
//     },
   
// ];
// for(let i  =0;i<data.length;i++ ){
//     const myObj = data[i];
//     console.log(myObj.name);
// }
// for(let i  =0;i<data.length;i++ ){
//     const myObj = data[i];
//     myObj.rollno = i
//     // console.log(myObj.id);
// }
// console.log(data);







// for(let i  =0;i<data.length;i++ ){
//     const myObj = data[i];

//     console.log(myObj.cca2)
    

for(let i  =0;i<data.length;i++ ){
    const myObj = data[i];

    console.log(myObj.name["official"]);
}

// const d = {
//   name: "south G..",
//   tld: tld[0],
//   independent:false,
//   capital:"all..."
// }
// console.log(data);

const objArr = [];
for (let i = 0; i < data.length; i++){
  const myObj = data[i];
  const newObjItem = {};
  newObjItem.name = myObj?.name?.common;
  newObjItem.ccn3 = myObj.ccn3;
  newObjItem.independent = myObj.independent;
  objArr.push(newObjItem);}

  
console.table(objArr);




   



 






