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

