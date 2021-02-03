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
