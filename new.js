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
