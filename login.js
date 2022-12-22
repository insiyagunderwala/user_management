var mail = document.getElementById("mail");
var psw = document.getElementById("psw");
var formData= JSON.parse(localStorage.getItem("List"));
function compare(){
    var count = 0;
    for(let i=0; i<formData.length;i++){
        if((mail.value===formData[i].email)&&(psw.value===formData[i].pwd)){
            count=1;
            window.open("userdetails.html");
        }
    }
    if(count!=1){
        alert("incorrect username or password");
    }
}