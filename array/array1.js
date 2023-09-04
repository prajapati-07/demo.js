const array=["keyur","milan","prakash","jayesh","asha"];
console.log(array);
console.log(array.length);

const k=["keyur","milan",[0,1,2]];
const d=k[2][2];
console.log(k);
console.log(d);
k.push("prakash");
console.log(k);

function double(numbers){
    return numbers*2;
}
const number=[5,2,7,6];
const doubled=number.map(double);
console.log(doubled);

function islong(city){
    return city.length>8;
}
const cities=["london","alalsabad","xanzdbyid","prajapati"];
const doubled1=cities.filter(islong);
console.log(doubled1);

const data = "Manchester,London,Liverpool,Birmingham,Leeds,Carlisle";
const cities1=data.split(",");
cities1;
cities1.length;
const a=cities1[0];
const f=cities1[1];
const y=cities1[cities1.length-1];
console.log(a,f,y);
console.log(cities1);
const commaSeparated = cities1.join(",");
console.log(commaSeparated);

const dog=["dog","keyur","milan","prakash","jayesh"];
const dogName=dog.toString();
console.log(dogName);