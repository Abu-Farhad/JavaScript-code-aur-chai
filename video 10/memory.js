let myYouTube="Code with Harry";
let anotherName=myYouTube;

console.log(myYouTube);
console.log(anotherName);

anotherName="Code aur Chai";

console.log(myYouTube);
console.log(anotherName);


let user1={
    email:"user1@gmail.com",
    upi:"ax@ybl",
}

let user2=user1;
console.log("email: "+[user1.email, user2.email])
user2.email="user2@gmail.com"
console.log("email: "+[user1.email, user2.email])