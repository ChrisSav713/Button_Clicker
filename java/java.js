var num1 = 13;
var num2 = 37;

document.getElementById("like-button1").innerText = num1 + " likes";
document.getElementById("like-button2").innerText = num2 + " likes";

document.getElementById("login-button").addEventListener("click", loginClick);
document.getElementById("add-definition").addEventListener("click", addClick);
document.getElementById("like-button1").addEventListener("click", likeClick1);
document.getElementById("like-button2").addEventListener("click", likeClick2);

function loginClick() {
    if (this.innerText == "Login") {
        this.innerText = "Logout";
    } else {
        this.innerText = "Login";
    }
}

function addClick() {
    this.remove();
}

function likeClick1() {
    num1++;
    document.getElementById("like-button1").innerText = num1 + " likes";
}

function likeClick2() {
    num2++;
    document.getElementById("like-button2").innerText = num2 + " likes";
}