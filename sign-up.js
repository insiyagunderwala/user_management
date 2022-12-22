function onSubmit(){

var firstname = document.getElementById("fname").value;
var lastname = document.getElementById("lname").value;
var email_add = document.getElementById("email").value;
var designation = document.getElementById("role").value;
var password = document.getElementById("pwd").value;
var formData = {
    "fname" : firstname,
    "lname" : lastname,
    "email" : email_add,
    "role" : designation,
    "pwd" : password
};
storeData(formData);
}   
function storeData(formData){
        var userList= localStorage.getItem('List');
        userList = userList && userList != "" ? JSON.parse(userList) : [];
        userList.push(formData);
        localStorage.setItem('List', JSON.stringify(userList));
}



