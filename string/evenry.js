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


 let c=[30,60,90];
let result=c.every(function(f){
    return (f<=100);
});
console.log(result);

function func(){
    let arr=[56,92,18,88,12];
    let value=arr.every(iseven);
    console.log(value);
}
func();
