const unameEl = document.getElementById("uname");
const emailEl = document.getElementById("email");
const phoneEl = document.getElementById("phone");
const dobEl = document.getElementById("dob");
const pwdEl = document.getElementById("pwd");

let users = localStorage.getItem("users");
if(users === null){
    users = [];
}
console.log(users);

/*
users = [{
    id : 1,
    uname : "anju",
    email : "anju@gmail.com",
    phone : "1234567890",
    dob : "2004-09-05",
    pwd : "123"
}];
*/

function onSubmitted(){
    const uname = unameEl.value;
    const email = emailEl.value;
    const phone = phoneEl.value;
    const dob = dobEl.value;
    const pwd = pwdEl.value;
    let newUser = {id : users.length + 1,uname , email, phone , dob , pwd};
    users.push(newUser);
    console.log(users);
    localStorage.setItem({users : users});
}