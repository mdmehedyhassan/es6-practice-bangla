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


