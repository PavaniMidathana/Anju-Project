const unameEl = document.getElementById("uname");
const pwdEl = document.getElementById("pwd");

let users = [{
    id : 1,
    username : "pavani",
    password : '123'
}]

function onSubmitted(){  
    let unameValue = unameEl.value;
    let pwdValue = pwdEl.value;
    users.forEach((each) => {
        if(each.username === unameValue){
            if(each.password === pwdValue){
                alert("You loged in successfully");
            }
            else{
                alert("Incorrect Password")
            }
        }
        else{
            alert("First create an account to login");
        }
    })
}

function onCreate(){
    let unameValue = unameEl.value;
    let pwdValue = pwdEl.value;
    let flag=0;
    users.forEach((each) => {
        if(each.username === unameValue){
            alert("User already exits");
            flag=1;
        }
    })
    if(flag===0){
        let newUser = {
            id : users.length + 1,
            username : unameValue,
            password : pwdEl,
        }
        users.push(newUser);
        alert("User Created Successfully");
    }
    
}

//console.log(users);
