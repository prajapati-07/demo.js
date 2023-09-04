// function loop(astudnets){
//     return astudnets.filter(function(ostudnets){
//         return ostudnets.fpercentage>80.0;
//     });
// }
// astudnets=[
//     {sstudnetsid :"101",fpercentage:96.4},
//     {sstudnetsid  :"102",fpercentage:89.0},
//     {sstudnetsid  :"103",fpercentage:69.8},
//     {sstudnetsid  :"104",fpercentage:54.2},
// ];
// console.log(loop(astudnets));

// function fnFilterStudents_loop(aStudent) {
// 	let tempArr = [];
// 	for (let i = 0; i < aStudent.length; i++) {
// 		if (aStudent[i].fPercentage > 80.0) {
// 			tempArr.push(aStudent[i]);
// 		}
// 	}
// 	return tempArr;
// }
// aStudent = [
// 	{ sStudentId: "001", fPercentage: 91.2 },
// 	{ sStudentId: "002", fPercentage: 78.7 },
// 	{ sStudentId: "003", fPercentage: 62.9 },
// 	{ sStudentId: "004", fPercentage: 81.4 }];

// console.log(fnFilterStudents_loop(aStudent));

// let people=[
//     {name:"aaron",age:65},
//     {name:"beth",age:70},
//     {name:"cara",age:1},
//     {name:"keyur",age:34},  
//     {name:"milan",age:2},
// ]
// let toddlers=people.filter(person=>person.age<=3)
// // console.log(toddlers);


let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

let isEven = function(number) {
    return number % 2 === 0;
};

let even = numbers.filter(isEven);
console.log(even);

