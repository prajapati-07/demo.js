// console.log(10+"20");
// console.log(9-"5");
// console.log("java"+"script");
// console.log(" "+" ");
// console.log(" "+0);
// console.log("keyur"-"prajapati");
// console.log("true"+"true");
// console.log("true"+"false");
// console.log("false"+"true");
// console.log("false"-"true");
// NaN ===NaN;
// Number. NaN === NaN;
// isNaN(NaN);
// isNaN(Number.NaN);
// Number.isNaN(NaN);
// console.log(NaN===NaN);
// console.log(Number.NaN === NaN);
// console.log(isNaN(NaN));
// console.log(isNaN(Number.NaN));
// console.log(Number.isNaN(NaN));
// if(true){
//     console.log("you lose the game");
// }
// else{
//     console.log("you win the game");
// }
// var age=17;
// console.log((age>=18)?"you can vote":"you can't vote");
// var area="tringle";
// var pi=3.142,l=5,b=4,r=3;
// if(area=="circle"){
//     console.log("the area of cricle is :"+pi*r**2);
// }
// else if(area=="tringle"){
//     console.log("the area of tringle is :"+(l*b)/2);
// }
// else if(area=="reactagle"){
//     console.log("the area of reactagle is"+(l*b));
// }
// else{
//     console.log("enter the value of area is
// var n=8;
// for (let i = 1; i <= 10; ++i)
// console.log(n + " * " + i +
//     " = " + n * i+"\n");
// console.log("/n");
// var n=9;
// for (let i = 1; i <= 10; ++i)
// console.log(n + " * " + i +
// " = " + n * i);
// console.log("/n");
// var n=11;
// for (let i = 1; i <= 10; ++i)
// console.log(n + " * " + i +
//     " = " + n * i);
// console.log("/n");
// var n=15;
// for (let i = 1; i <= 10; ++i)
// console.log(n + " * " + i+" = "+n*i);
// for(let i=0;i<=10;i++){
//     let tableof=12;
//     console.log(`${tableof} * ${i} = ${t}`);
// }
// let array=['keyur','milan','prakash','jayesh'];
// console.log(array).
// let arr1=new Array(3);
// arr1[0]=10;
// arr1[1]=20;
// arr1[2]=30;
// console.log("array 1:",arr1)

// let arr2=new Array(10,20,30,40,50);
// console.log("array 2:",arr2);

// let arr3=new Array(5);
// console.log("array 3:",arr3);

// let arr4=new Array("1bhk");
// console.log("array 4:",arr4)  

// const course=["html","javascript","css","react"];
// course.length=5;
// console.log("array is length of 5",course);
// course.length=3;
// console.log("array is length of 3",course);

// const course1=["html","css","js"];
// course1.forEach(myfunc);
// function myfunc(elements){
//     console.log(elements);
// }

// const courses2=["html","css","javscript"];
// console.log("originalarray",courses2);
// courses2.push("react");
// console.log("push aftar array",courses2);

// const a=["html","css","javscript"];
// console.log("originalarray",a);
// a[a.length]="react";
// console.log("push aftar array",a);
// console.log(typeof(a));
// console.log("using array.isarray() mathod :",Array.isArray(a));
// console.log("uisng instanceof mathod :",a instanceof Array);

// let numbers=[30,60,140];
// let result=true;
// for(let i=0;i<=numbers.length;i++){
//     if(numbers[i]>=100){
//         result=false;
//         break;
//     }}
    
// //     console.log(result);

// // let n=[30,40,60];
// function iseven(element ,index,array){
//     return element%2==0;
// }
// function func(){
//     let arr=[56,92,18,88,12];
//     let value=arr.every(iseven);
//     console.log(value);
// }
// func();


// let c=[30,60,90];
// let result=c.every(function(f){
//     return (f<=100);
// });
// console.log(result);

function chack(arr,sdatatype){
    return arr.every(function(element){
        return typeof(element) === sdatatype;
    },sdatatype);
}
console.log(chack(["keyur","for","prajapati"],"string"));
console.log(chack(["keyur",4,"prajapati"],"string"));


function fnCheckDatatype_Every(arr, sDatatype) {
	return arr.every(function (element) {
		return typeof (element) === sDatatype;
	}, sDatatype);
}

console.log(fnCheckDatatype_Every(["keyur", "for", "prajapati"], "string"));
console.log(fnCheckDatatype_Every(["Geeks", 4, "Geeks"], "string"));
