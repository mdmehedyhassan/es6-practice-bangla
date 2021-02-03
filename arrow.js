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




