document.forms[0].onsubmit = function validation(e) {
    var usererr = document.querySelector("#usererr");
    var passerr = document.querySelector("#passerr");
    usererr.style = "color:maroon; font-family:arial;";
    passerr.style = "color:maroon; font-family:arial;";

    let username = usernm.value;
    let pas = pass.value;
    if (username === `admin` && pas === `12345`) {
        alert("Logged in Successfully");
        if (document.querySelector('#check').checked === true) {
            console.log(`UserName=${username}\nPassword=${pas}`);
        }
        else console.log("not checked");
    }
    else {
        e.preventDefault();
        if (username === "") {
            usererr.innerHTML = "Enter Valid Username";
        }
        else if (pas === "") {
            passerr.innerHTML = "Enter Valid PassWord";
        }
        else {
            usererr.innerHTML = "";
            passerr.innerHTML = "";
        }
    }
}