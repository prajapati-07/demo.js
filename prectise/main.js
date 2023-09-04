// const petdog="rex";
// const petcat="peppar";
// console.log(petdog);
// console.log(petcat);
// console.log("my dpg name is:" +" "+petdog);
// console.log("my pet name is:" +" "+petcat);
// var catsound="purr";
// const dogsound="woof";
// console.log(petdog + "says" + catsound);
// console.log(petcat+"says"+dogsound);
// catsound="meow";
// console.log(petcat+"now says"+catsound);
// var currenttime=10;
// console.log(currenttime>9 && currenttime<17);
// const score=8;
// console.log("Mid-level-skill:"+ score>0 && score<=10);
// var age=10;
// if(age>=65){
//     console.log("You Get Your Income Form Your Pension");
// }
// else if(age<=65 && age>=18){
//     console.log("Each Month You Get A salery");
// }
// else if(age<=18){
//     console.log("You Get a Allowance");
// }
// else{
//     console.log("The age Variable is not Numrical ");
// }
// var day="Sunday";
// switch(day){
//     case 'Monday':
//         console.log("This is Monday!..this is not right");
//         break;
//     case 'Magalvar':
//         console.log("This is Magalvar!!..This is not right");
//         break;
//     case 'wendsday':
//         console.log("this is Wensday");
//         break;
//     case 'tuseday':
//         console.log("this is tusday");
//         break;
//     case 'Friday':
//         console.log("this is Friday");
//         break;
//     case 'saturday':
//         console.log("this is Saterday");
//         break;
//     case 'Sunday':
//         console.log("DO somethings");
//         break;
//     default:
//         console.log("not right way");
// }
// (let i=0;i<=5;i++){
//     console.log(i);
// }
// for(let j=5;j>=1;j--){
//     console.log(j);
// }
// let numbers=0;
// while(numbers<=5){
//     console.log(numbers);
//     numbers++;
// }
// let numbers2=5;
// while(numbers2>=1){
//     console.log(numbers2);
//     numbers2--;
// }
// console.log("next");
// for(var h=2018;h<=2022;h++){
//     console.log(h);

// }
// console.log("New Function");
// function leeterfinder(word,match){
//     for(var i=0;i<=word.length;i++){
//         if(word[i]==match){
//             console.log("found the",match,"at",i);
//         }
//         else{
//             console.log("not found",match,"at",i);
//         }
//     }
// }
// leeterfinder("test","t");
// var person={
//     firstname:"Keyur Prajapati",
//     LastName:"Prajapati",
//     Age:18,
//     Collge:"ckp"
// };
// console.log(person);
// var car={};
// car.e="ferrari";
// car.b="BMW";
// car.m="mercedes";
// car.f="Forutuner"
// console.log(car);
// const kp=car;
// kp.age=18;
// console.log(kp);
// const bh=person.firstname+" "+"is"+" "+person.Age+" "+ "Years Old";
// console.log(bh);

// for(let x in person){
//   txt+=person[x];
// }
// console.log(txt);
// function arraybulider(one,two,three){
//     var arr=[];
//     arr.push(one);
//     arr.push(two);
//     arr.push(three);
//     return arr;
// }
// var name=arraybulider('keyur','prakash','jayesh');
// console.log(name);
// var
// var math=Math.ceil(9.8);
// console.log(math);
// var f=Math.ceil(4.3)
// console.log(f);
// const number=3.14;
// const ceilnumber=Math.ceil(number);
// console.log(ceilnumber);
// const k=Math.round(9.17);
// console.log(k);
// const h=Math.trunc(7.13);
// console.log(h);
// const o=Math.trunc(8.67);
// console.log(o);
// const y=Math.cbrt(64);
// console.log(y);
// var car={}
// car.milage=21645;
// car.color="blue";
// console.log(car);
// car.turnThekey=function(){
//     console.log("engine is running");
// }
// car.lights=function(){
//     console.log("light is on");
// }
// console.log(car);
// car.turnThekey();
// car.lights();

// var dog={
//     color:"brown",
//     height:30,
//     length:60,
// };
// dog["type"]="corgi";
// console.log(dog);
// try {
//     // Attempt to execute some code that might throw an error
//     const result = someUndefinedVariable * 2;
//     console.log(result); // This line will not execute due to the error
//   } catch (error) {
//     // Handle the error
//     console.error("An error occurred:", error.message);
// //   }
//  function addTwonums(a,b){
//     console.log(a+b);
// }
// addTwonums(5,5);
// function addTwonums(a,b){
//     try{

//         if(typeof(a)!=b){
//             console.log("the first argument is not a number");
//         }
//         else if(typeof(b)!=a){
//             console.log("the second number is not a number");
//         }
//         else{
//             console.log(a+b);
//         }
//         console.log(a+b);
//     }catch(err){
//         console.log("error!",err);
//     }
// }
// addTwonums(5,"5")
// function addTwoNums(a, b) {
//     try {
//         if (typeof a !== 'number') {
//             throw new ReferenceError('the first argument is not a number');
//         } else if (typeof b !== 'number') {
//             throw new ReferenceError('the second argument is not a number');
//         } else {
//             console.log(a + b);
//         }
//     } catch (err) {
//         console.log("Error!", err);
//     }
// }

// addTwoNums(5, "5");
// console.log("It still works");
// function addTwoNums(a,b){
//     try{
//         if(typeof(a)!=b){
//                        console.log("the first argument is not a number");
//               }
//                   else if(typeof(b)!=a){
//                      console.log("the second number is not a number");
//                   }
//                   else{
//                    console.log(a+b);
//               }
//     }
//     catch(err){
//         console.log("Error!",err);
//     }
// }
// addTwoNums(5,"5");
// console.log("it still works");
// function leeterfinder(word, match) {
//   var conditions1 = typeof word == "string" && word.length >= 2;
//   var conditions2 = typeof match == "string" && match.length == 1;
//   if (conditions1 && conditions2) {
//     for (var i = 0; i <= word.length; i++) {
//       if (word[i] == match) {
//         console.log("found the", match, "at", i);
//       } else {
//         console.log(".....no found match");
//       }
//     }
//   } else {
//     console.log("please pass the correct argument");
//   }
// }
// leeterfinder([], []);
// leeterfinder("cat", "t");

// var result = null;
// console.log(result);

// try {
//   console.log("hello");
// } catch {
//   console.log("good bye");
// }

// try {
//   console.log("hello");
// } catch (e) {
//   console.log("cught");
// }

// var bicycle = {
//   wheels: 2,
//   start: function () {},
//   stop: function () {},
// };
// console.log(bicycle);

// try {
//   throw new error();
//   console.log("hello");
// } catch (err) {
//   console.log("goodbye");
// }

// var check = function (num) {
//   if (num < MIN || num > MAX) {
//     throw new RangeError("Parameter must be between " + MIN + " and " + MAX);
//   }
// };

// try {
//   check(500);
// } catch (e) {
//   if (e instanceof RangeError) {
//     // Handle range error
//   }
// }

// function add(a, b) {
//   console.log(a + b);
// }
// add(3, "4");

// var str;
// str.match("jelloo");

// function myDay(){
//   console.log("moring");
//   console.log("aftarnoon");
//   console.log("night");
//   myDay();
// }
// myDay();

// function addTwoNums(a,b){
//   console.log(a+b);
// }
// function randomnum(){
//   return Math.floor((Math.random()*10)+1);
// }
// function specificnums(){
//   return 42;
// }
// var userandom=true;
// var getnumber;
// if(userandom){
//   getnumber=randomnum
// }
// else{
//   getnumber=specificnums
// }
// addTwoNums(getnumber(),getnumber())

// function addTwoNums(a, b) {
//   console.log(a + b);
// }

// function randomNum() {
//   return Math.floor((Math.random() * 10 )+ 1);
// }
// function specificNum() {
//   return 42;
// }

// var useRandom = true;

// var getNumber;

// if (useRandom) {
//   getNumber = randomNum;
// } else {
//   getNumber = specificNum;
// }

// addTwoNums(getNumber(), getNumber());

// var globalvar = 77;
// function scoptest() {
//   var localVar = 88;
// }
// console.log(localVar);


// function meal(animal){
//   animal.food=animal.food+10;
// }
// var dog={
//   food:10
// }
// meal(dog);
// meal(dog);
// console.log(dog.food);

// function two(){
//   return 2;
// }
// function one(){
//   return 1;
// }
// function calclute(ivalue,invalue){
//   return ivalue()+invalue()+invalue();
// }
// console.log(calclute(two,one));

// const person ={
//   name:["bob","smith"],
//   age:32,
//   bio:function(){
//     console.log(`${this.name[0]} ${this.name[1]} is ${this.age} years old`);
//   },
//   introduceself:function(){
//     console.log(`Hii! i'am ${this.name[0]}.`);
//   },
// };
// person.name;
// person.name[0];
// person.age;
// person.bio();
// person.introduceself();
// prefixExpression += operatorStack.top();
// operatorStack.pop();
// }
// operatorStack.push(c);
// }
// }

// while (!operatorStack.empty()) {
// prefixExpression += operatorStack.top();
// operatorStack.pop();
// }

// reverse(prefixExpression.begin(), prefixExpression.end());

// return prefixExpression;
// }

// int main() {
// string infixExpression;
// cout << "Enter an infix expression: ";
// cin >> infixExpression;

// string prefixExpression = infixToPrefix(infixExpression);
// cout << "Prefix expression: " << prefixExpression << endl;

// return 0;
// }
// cout << "Queue is full. Cannot enqueue " << item << endl;
//             return;
//         }

//         if (isEmpty()) {
//             front = rear = 0;
//         } else {
//             rear = (rear + 1) % capacity;
//         }

//         array[rear] = item;
//         cout << item << " enqueued successfully." << endl;
//     }

//     void dequeue() {
//         if (isEmpty()) {
//             cout << "Queue is empty. Cannot dequeue." << endl;
//             return;
//         }

//         cout << array[front] << " dequeued successfully." << endl;

//         if (front == rear) {
//             front = rear = -1;
//         } else {
//             front = (front + 1) % capacity;
//         }
//     }

//     void display() {
//         if (isEmpty()) {
//             cout << "Queue is empty." << endl;
//             return;
//         }

//         cout << "Queue elements: ";
//         int index = front;
//         while (index != rear) {
//             cout << array[index] << " ";
//             index = (index + 1) % capacity;
//         }
//         cout << array[rear] << endl;
//     }
// };

// int main() {
//     int size;
//     cout << "Enter the size of the queue: ";
//     cin >> size;

//     Queue queue(size);

//     int choice, item;
//     do {
//         cout << "\nMenu:\n";
//         cout << "1. Insert\n";
//         cout << "2. Delete\n";
//         cout << "3. Display\n";
//         cout << "4. Quit\n";
//         cout << "Enter your choice: ";
//         cin >> choice;

//         switch (choice) {
//             case 1:
//                 cout << "Enter item to enqueue: ";
//                 cin >> item;
//                 queue.enqueue(item);
//                 break;
//             case 2:
//                 queue.dequeue();
//                 break;
//             case 3:
//                 queue.display();
//                 break;
//             case 4:
//                 cout << "Exiting program." << endl;
//                 break;
//             default:
//                 cout << "Invalid choice. Try again." << endl;
//         }
//     } while (choice != 4);

//     return 0;
// // }
// array[rear] = item;
// cout << item << " enqueued successfully." << endl;
// }

// void dequeue() {
// if (isEmpty()) {
//     cout << "Queue is empty. Cannot dequeue." << endl;
//     return;
// }

// cout << array[front] << " dequeued successfully." << endl;

// if (front == rear) {
//     front = rear = -1;
// } else {
//     front = (front + 1) % capacity;
// }
// }

// void display() {
// if (isEmpty()) {
//     cout << "Queue is empty." << endl;
//     return;
// }

// cout << "Queue elements: ";
// int index = front;
// while (index != rear) {
//     cout << array[index] << " ";
//     index = (index + 1) % capacity;
// }
// cout << array[rear] << endl;
// }
// };

// int main() {
// int size;
// cout << "Enter the size of the circular queue: ";
// cin >> size;

// CircularQueue queue(size);

// int choice, item;
// do {
// cout << "\nMenu:\n";
// cout << "1. Insert\n";
// cout << "2. Delete\n";
// cout << "3. Display\n";
// cout << "4. Quit\n";
// cout << "Enter your choice: ";
// cin >> choice;

// switch (choice) {
//     case 1:
//         cout << "Enter item to enqueue: ";
//         cin >> item;
//         queue.enqueue(item);
//         break;
//     case 2:
//         queue.dequeue();
//         break;
//     case 3:
//         queue.display();
//         break;
//     case 4:
//         cout << "Exiting program." << endl;
//         break;
//     default:
//         cout << "Invalid choice. Try again." << endl;
// }
// } while (choice != 4);

// return 0;
// }

    // #include <iostream>

    // using namespace std;

    // class Dequeue {
    // private:
    //     int front, rear, capacity;
    //     int* array;

    // public:
    //     Dequeue(int size) {
    //         capacity = size;
    //         front = rear = -1;
    //         array = new int[capacity];
    //     }

    //     ~Dequeue() {
    //         delete[] array;
    //     }

    //     bool isEmpty() {
    //         return front == -1;
    //     }

    //     bool isFull() {
    //         return (rear + 1) % capacity == front || (front == 0 && rear == capacity - 1);
    //     }

    //     void insertFront(int item) {
    //         if (isFull()) {
    //             cout << "Dequeue is full. Cannot insert " << item << endl;
    //             return;
    //         }

    //         if (isEmpty()) {
    //             front = rear = 0;
    //         } else if (front == 0) {
    //             front = capacity - 1;
    //         } else {
    //             front--;
    //         }

    //         array[front] = item;
    //         cout << item << " inserted at the front successfully." << endl;
    //     }

    //     void insertRear(int item) {
    //         if (isFull()) {
    //             cout << "Dequeue is full. Cannot insert " << item << endl;
    //             return;
    //         }

    //         if (isEmpty()) {
    //             front = rear = 0;
    //         } else {
    //             rear = (rear + 1) % capacity;
    //         }

    //         array[rear] = item;
    //         cout << item << " inserted at the rear successfully." << endl;
    //     }

    //     void deleteFront() {
    //         if (isEmpty()) {
    //             cout << "Dequeue is empty. Cannot delete from the front." << endl;
    //             return;
    //         }

    //         cout << array[front] << " deleted from the front successfully." << endl;

    //         if (front == rear) {
    //             front = rear = -1;
    //         } else {
    //             front = (front + 1) % capacity;
    //         }
    //     }

    //     void deleteRear() {
    //         if (isEmpty()) {
    //             cout << "Dequeue is empty. Cannot delete from the rear." << endl;
    //             return;
    //         }

    //         cout << array[rear] << " deleted from the rear successfully." << endl;

    //         if (front == rear) {
    //             front = rear = -1;
    //         } else if (rear == 0) {
    //             rear = capacity - 1;
    //         } else {
    //             rear--;
    //         }
    //     }

    //     void display() {
    //         if (isEmpty()) {
    //             cout << "Dequeue is empty." << endl;
    //             return;
    //         }

    //         cout << "Dequeue elements: ";
    //         int index = front;
    //         while (index != rear) {
    //             cout << array[index] << " ";
    //             index = (index + 1) % capacity;
    //         }
    //         cout << array[rear] << endl;
    //     }
    // };

    // int main() {
    //     int size;
    //     cout << "Enter the size of the dequeue: ";
    //     cin >> size;

    //     Dequeue dequeue(size);

    //     int choice, item;
    //     do {
    //         cout << "\nMenu:\n";
    //         cout << "1. Insert at Front\n";
    //         cout << "2. Insert at Rear\n";
    //         cout << "3. Delete from Front\n";
    //         cout << "4. Delete from Rear\n";
    //         cout << "5. Display\n";
    //         cout << "6. Quit\n";
    //         cout << "Enter your choice: ";
    //         cin >> choice;

    //         switch (choice) {
    //             case 1:
    //                 cout << "Enter item to insert at front: ";
    //                 cin >> item;
    //                 dequeue.insertFront(item);
    //                 break;
    //             case 2:
    //                 cout << "Enter item to insert at rear: ";
    //                 cin >> item;
    //                 dequeue.insertRear(item);
    //                 break;
    //             case 3:
    //                 dequeue.deleteFront();
    //                 break;
    //             case 4:
    //                 dequeue.deleteRear();
    //                 break;
    //             case 5:
    //                 dequeue.display();
    //                 break;
    //             case 6:
    //                 cout << "Exiting program." << endl;
    //                 break;
    //             default:
    //                 cout << "Invalid choice. Try again." << endl;
    //         }
    //     } while (choice != 6);

    //     return 0;

    const A ="hello";
    const b=15;
    const c=20;
    console.log(A+b+c);
    console.log(c+b+A);