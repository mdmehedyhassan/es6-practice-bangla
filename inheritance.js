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



