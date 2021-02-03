// 22.2 let-const
// var--- বারের ক্ষেত্রে আমরা একটা বেরিয়েবল দুই বার লেখতে পারতাম েএবং বা আরো বেশিও লিখতে পারতাম । এবং লাস্টের টাকে কনশল দেখাতো
// var lover = "mehedy" 
// lover = "hassan"
// console.log(lover);   


// const -- কন্সট এর ক্ষেত্রে একবারের বেশি িএকটা বেরিয়েবল ডিকলার করা যাবে না । যদি একই বেরিয়েবল একাদিক বার ডিকলার করা হয় তাহলে তা এরর দিবে
const hubby = "Elias Kanchon"
// hubby = "skhib khan"   
console.log(hubby);

const numbers = [12, 45];
numbers [1] = 88; // যদি কোন এরে চেন্স করতে চাই তাহলে তা করা যাবে।
numbers.push(12); // যদি নতুন কিছু ্ এডও করতে চাই তাও কার যাবে 
// numbers = ["Sunny", "Salman", "Omit Hasan"]; // কিন্তু পুরা বেরিয়েবল চেন্স করা যাবেনা। 
// const profile = {name: "mehedy", phone: 01775} // যদি  কোন ্অবজেক্ট ও চেন্স করতে চাই তাহলে করা যাবে
console.log(numbers);


// let
let patientName = "Rahim chacha";
patientName = "Fatema Khala";
console.log(patientName);

// let sum = 0; // আমরা এখানে সাধারনত লেট দিয়েই করতে হবে। যদি কনশ্ট দিয়ে লেখি তাহলে সাম েএর রেজাল্ট চেন্স হবে না।
// for(var i = 0; i < 10; i++){  // এখানে বার দিয়ে লেখলে িএটা বেরেকাট এর বাইরে থেকেও কল করা যাবে কিন্তু যদি লেট দিয়ে লেখি তাহলে বাৈইরে থেকে কল দিলে তা েএরোর দিবে
//     sum = sum + 1;
// }
// console.log(i) // বার লেখলে এখান থেকেও কল করা যাবে ।

let sum = 0;
for(let i = 0; i < 10; i++){  //  এখানে বার দিয়ে লেখলে িএটা বেরেকাট এর বাইরে থেকেও কল করা যাবে কিন্তু যদি লেট দিয়ে লেখি তাহলে বাৈইরে থেকে কল দিলে তা েএরোর দিবে
    sum = sum + 1;
    console.log(i)  // লেট লেখলে বেরিকেটের বিতরই কল করা যাবে
}






// 22.3 default 
// function add(num1, num2){
//     return num1 + num2
// }
// const total = add(15, 17);
// console.log(total); //  এমন করলে আমরা সাধারনত জানি 32 আউট পুট আসবে 


// function add(num1, num2){
//     if(num2 == undefined){  // যদি  এটা না করা হতো তাহলে নান দেখাইতো কারন আমরা দ্বিতীয় পেরামিটারের রেজাল্ট নিচে উল্লেখ করিনাই । এটার মানে হলো যদি নাম2 এর মান আনডিফাইন থাকে তাহলে এর মান সরাসরি 0  হয়ে পরের টার সাথে যোগ হবে 
//         num2 = 0;
//     } 
//     return num1 + num2
// }
// const total = add(15);
// console.log(total);


// function add(num1, num2){
//     num2 = num2 || 0; // এটার মানে হলো যদি মান নিচে থাকে তাহলে তাই আসবে কিন্তু যদি তা না থাকে তাহলে 0 জাবে । তবুও নান দেখাবেনা  । এখানে যদি 0 এর পরিবর্তে 10 ও লেখি তাহলে যদি নিচে সংখ্যা না দেওয়া থাকে তাহলে 10 চলে যাবে। এর পরিবর্তে 10 ও লেখি তাহলে যদি নিচে সংখ্যা না দেওয়া থাকে তাহলে 10 চলে যাবে
//     return num1 + num2
// }
// const total = add(15);
// console.log(total);


function add(num1, num2 = 0){   // এটার মানে হলো যদি মান নিচে থাকে তাহলে তাই আসবে কিন্তু যদি তা না থাকে তাহলে 0 জাবে । তবুও নান দেখাবেনা  । এখানে যদি 0 এর পরিবর্তে 10 ও লেখি তাহলে যদি নিচে সংখ্যা না দেওয়া থাকে তাহলে 10 চলে যাবে। এর পরিবর্তে 10 ও লেখি তাহলে যদি নিচে সংখ্যা না দেওয়া থাকে তাহলে 10 চলে যাবে

    return num1 + num2
}
const total = add(15);
console.log(total);









// 22.4 template.js
const firstName = "Justin";
const lastName = "TimberLake";
const fullName = firstName + " " + lastName + " is a good boy";  // এইভাবে লেখার পরিবর্তে আরা নিচেরর সিস্টিমে লিখতে পারি। 
// console.log(fullName);
const fullName2 = `${firstName} ${lastName} is a good boy.`; // ${20+30+60+65} েএইভাবে গুন ও করা যাবে যদি চাই । আগের সিস্টেম ছারা কিভাবে অনেক ভালো মত একবারে কাজ করা যায় এইটা হলো সেই সিস্টম
// console.log(fullName2);


const multiLine = "I love you\n"  // এখানে আপার স্লেস এন মানে হলো লাইন ব্রেক আগে এইভাবেই লিখতে হতোা 
    + "I miss you\n"
    + "I need you"
//console.log(multiLine);

const multiLine2 = `I love you
I miss you
no. I don't need you` // সুধু একাবার এই লেখা মধ্যে েএকটা সিস্টেম রাখলেই হয়ে যাবে
console.log(multiLine2);










// 22.5  arrow.js
// function doubleIt(num){
//     return num * 2;
// }
// const result = doubleIt(5);
// console.log(result);   // আমরা আগের মত চিন্তা না করে নতুন করে চিন্তা করতে পারি।


// const doubleIt = function(num){  // এইভাবে বেরিয়েবল দিয়েও আমরা ফাংশন ডিকলার করতে পারি 
//     return num * 2;
// }
// const result = doubleIt(5);
// console.log(result);


// const doubleIt = num => num * 2;  // আমরা যদি কোন একটা বেরিয়েবল ডিকলার করে তার পেরা মিটার একটা িনেই এবং তাকে আমরা কোন দরনের রিটান্ট করতে হবে না  => দিলেই এর পেটের বিতরে যা আছে তা চলে যাবে
// const result = doubleIt(5);
// console.log(result);


// const give = () => 5;  // এভাবে পেরামিটার ছারাও ডিকলার করা যায় আখানে যা আছে তাই কনশল গহ হবে।
// const result = give();
// console.log(result);



// const add = (x, y) => x + y; // এখানে আমরা দুইটা পেরামিটার কে ডাইরেক্ট ডিকলার করে দিতে পারবো
// const result = add(50, 5);
// console.log(result); 


const doMath = (x, y) => {
    const sum = x + y;
    const diff = x -y;
    const result = sum * diff;
    return result;   // একটার বিতরে একাদিক কাজ করতে চাই তাহলে {} এর বিতরে যা ইচ্ছা করতে পারি। আর এখানে বেরিকাটের বিতরে যে কন্সট গুলা লেখা আছে তাবাইরে লেখলে আমাদের এরোর দেখাবেনা।
}
const total = doMath(7, 5);
console.log(total);







// 22.6 threedots.js
// const ages = [12, 14, 16, 13, 17];
// const ages2 = [15, 16, 12];
// const ages3 = [25, 36, 22, 29];
// const allAges = ages.concat(ages2).concat([55]).concat(ages3).concat(ages);  // উপরের সবগুলা বেলুর মান যদি আমি িএকসাথে দেখাতে চাই তালে আমাকে এই কাজ গুলা করতে হবে। এবং এইগুলার বিতরে যদি নতুন সংখ্যা এড করতে চাইতহালে .concat([55]) এইভাবে এড করা যাবে । 
// console.log(allAges);

// const allAges2 = [ages, ages2, 5, ages3]
// console.log(allAges2); // [ [ 12, 14, 16, 13, 17 ], [ 15, 16, 12 ], 5, [ 25, 36, 22, 29 ] ]  এটা হবে আউট পুট । যদি এ ইভাবে করি তাহলে রকম দেখাবে কিন্তু আমরা যদি সবগুলা এক রকম করতে চাই তাহলে আমাদের কে ... তিনটা ডট দিতে হবে নিচের টার মত

// const allAges3 = [...ages, ...ages2, 5, ...ages3];  // আমরা যদি কোন সংখ্যা এড করতে চাই তাহলে আমাদের এই করকম করে করতে হবে তাহলে প্রথমটার মত আসবে আমাদের অনেক কমও লেখা লাগবে
// console.log(allAges3);



// const business = 650;
// const minister = 450;
// const sochib = 250;
// const maximum = Math.max(business, minister, sochib); কোন সংখ্যা যদি এই ভাবে একটা একটা করে থাকে তাহলে আমরা এই গুলাকে এই রকম করে লেখতে পারি কিন্তু যদি আমাদের বলা হয় এক বেরিয়েবল  ডিকলার করার পরে কিভাবে সেইখান থেকে বেস্ট মান টা বের করা যাবে তাহলে আমরা যা করবো
// console.log(maximum)

const takaPoisa = [650, 450, 250];
const maximum = Math.max(...takaPoisa);  // এই ভাবে ... দিয়ে দিলেই হয়ে যাবে। আর যদি ডট না দেই তাহলে নান দেখাবে। িএইরকম করলে একটা এরের সকল মানের সর্বচ্চো মান টা আসবে।
console.log(maximum);









// 22.7 class.js
class Student{
    constructor(sId, sName){  // এখানে দুইটা পেরামিটার দেওয়া আছে মানে যদি কেও ক্লাসে কল করতে চায় তাহলে দুইটা পেরামিটারের কি বেলু থাকবে তাকে দেখানো হবে । আর constructor এটাও একটা  ফাংশনের মত 
        this.id = sId; // প্রথম যে বেলু থাকবে তা এখানে আসবে । দিস বেলূ মানে েএখানে েএই টাই থঅকবে।
        this.name = sName;
        this.school = "kolimunnesa school"  // এই যেহেতু কোন পেরামিটার কে কল করেনা তাই সবগুলা মধ্যে েএই মান টা চলে যাবে।
    }
}

const student1 = new Student(12, "Shuvo");   //  এখানে প্রথম নিউ মানে নতুন মান । আবার েএখানে স্টুডেন্ট এর 12 মানে আইডি , আর সৌরব মানে হলো নাম এর বেলু । কারন এইগুলা পেরামিটারে কল করা হইছে
const student2 = new Student(22, "mahiya");
const student3 = new Student(1);
console.log(student1, student2, student3);  //Student { id: 12, name: 'Shuvo', school: 'kolimunnesa school' } Student { id: 22, name: 'mahiya', school: 'kolimunnesa school' } Student { id: 1, name: undefined, school: 'kolimunnesa school' }
// console.log(student1.name, student2.name); // এই ভাবে যদি কল করি তাহলে  আমরা  তাদের নামগুলা পাবো কিছুটা এইরকম  Shuvo mahiya








// 22.8 inheritance.js
class Parent {
    constructor(){
        this.fatherName = "Schwerznegger";
    }
}
class Child extends Parent{   // পেরেন্ট ফাংশনে যদি আমি চাইল ক্লাস জোগ করতে চাই তাহলে । এই ভাবেই লিখতে হবে
    constructor(name){
        super();  // আগের  এরোর দিবে যদি এইটা না ডিকলার করা হয়। । এজন্য আগের পেরেন্টকে কল করতে হলে এইভাবেই কল করতে হবে।
        this.name = name;
    }
    getFullName(){
        return this.name + ' ' + this.fatherName; // েএই ভাবে রিটান্ট করলে লেখাগুলাকে অবজেক্ট আকারে না দেখাইয়া সাধারন ভাবেই দেখাবে
    }
}
const baby = new Child("Arnold");
const baby2 = new Child("Tom");
console.log(baby.getFullName());  // এই সিস্টেমে পেরেন্ট এর নাম এর পরে চাইল্ডের নামও  এড হবে।  Arnold Schwerznegger 
console.log(baby2); // এইটা আগের মত রাখা হইছে যেনো মনে থােকে। এখানে আমরা যা দেখতে পারতেছি তাহলো । Child { fatherName: 'Schwerznegger', name: 'Tom' }  এাইভাবেই দেখাবে

// google: object toto ten concept program js // inheritance, Abstraction, Polymorphism, Encapsulation এই চারটাকে অবজেক্টের পিলার বলা হয়। 










//22.9 destructure      কোন একটা অবজেক্ট থেকে  বা এলিমেন্ট থেকে সটকাট কিছু রাখার উপায়কে বলা হয় বলা হয়  destructure 
// const person = {name: 'Jack Willam', age: 17, job: 'facebook', gfName: 'Ema Watson', address: 'kochu khet', phone: '014554566546', frieds: ['Tom hancks', 'Tom cruise', 'Tom all']}

// const {address ,phone, salary , gfName} = person;  // এখানে যে নামগুলা দেওয়া হবে সুধু সেই মান গুলা এিই বের করা যাবে এবং আগে পরে দিলেও কোন সমস্যা নাই  কনশলে যেভাবে থাকবে সেই ভাবেই হবে। এটা একবারেই করা যায় কিন্তু নিচের নিয়মে অনেক সময় লাগবে যার কারনে এটাই বেস্ট।
// // const gfName = person.gfName;
// // const phone = person.phone; // এইভাবে নাম গুলা বের করা যায় 
// console.log(gfName, phone, address, salary);
// console.log(gfName, phone, address, salary);  // এখানে যে সিরিয়াল অনুযায়ী দেওয়া থাকবে সেই সিরিয়াল অনুযায়ী থাকবে। আর এমকো বেরিয়েবল যদি উপরে ডিফান্ট করা না থাকে তাহলে তাকে বলবে আনডিফাইন্ট 

 
const complexObject = {
    name: 'abc',
    info: {
        address: 'kola bagan',
        leader: 'Tiger Leader'
    }
}
const {leader} = complexObject.info; // এই টার লিডার টাকে যদি খুজতে চাই তাহলে  িএইভাবেই খুজতে পারবো
console.log(leader); 


// const friends = ['Sakib Khan', 'Armane Khan', 'Amir Khan', 'Salman Khan', 'Sha Ruk Khan']
// // const [chotoFriend, nextFriend] = friends; এই ভাবে যে কোন এরে থেকে েনাম গুলা বের করা যাবে । ্এখানে যেটাই লেখি তাও আসবে 1ম টার নাএর পরে আসবে পরের টার নাম। এই ভাবেই আসতে থাকবে । 
// // console.log(chotoFriend, nextFriend)
// const [chotoFriend, ...otherName] = friends; // যদি আমি েএই ভাবে ডিফাইন্ট করি তাহলে প্রথমে  যদি কোন বেরিয়েবল ডিকলার করা থাকে তাহলে তাকে ছারা বাকি সবগুলাকে একটা এরের মতই দেখাবে।
// console.log(otherName)

// google = what is destructure 









