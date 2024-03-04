let users;
let cart = [];
let cars = [];
let sumcar = 0;
$.ajax({
    url: "./users.json",
    success: (result) => {
        console.log(result);
        users = result;
    }
});

function loginOrRegister(event) {
    event.preventDefault();

    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var name = document.getElementById("name").value;
    var phone = document.getElementById("phone").value;

    var userFound = users.find(function(user) {
        return user.email === email && user.password === password;

    });

    if (userFound) {
        alert("המערכת זיהתה משתמש  קיים ,הנך מועבר לעמוד הבית");
        f(email);
        window.location.href = "../katalog/katalog.html";

    } else {

        document.getElementById("registerFields").style.display = "block";
        sessionStorage.setItem("name", JSON.stringify(name));

        const submit = document.getElementById("submit");
        submit.onclick = () => {
            alert("נרשמת בהצלחה!")
            window.location.href = "../katalog/katalog.html";


        }
    }
}

password.onkeydown = function(event) {
    console.log(event);
    if (!isKeyValid(event.key)) {
        alert('יש להכניס רק מספרים');
        event.preventDefault();
    }
}

const isKeyValid = function(key) {
    return key >= '0' && key <= '9';
}

phone.onkeydown = function(event) {
    console.log(event);
    if (!isKeyValid1(event.key)) {
        alert('יש להכניס רק מספרים');
        event.preventDefault();
    }
}

const isKeyValid1 = function(key) {
    return key >= '0' && key <= '9';
}

var namee = document.getElementById("name");
namee.onkeydown = function(event) {
    console.log(event);
    if (!isKeyValid2(event.key)) {
        alert('יש להכניס רק אותיות');
        event.preventDefault();
    }
}
const isKeyValid2 = function(key) {
    return key >= 'a' && key <= 'z' ||
        key >= 'A' && key <= 'Z' ||
        key >= 'א' && key <= 'ת'

    ;
}
document.getElementById("loginForm").addEventListener("submit", loginOrRegister);
const f = function(email) {
    $.ajax({
        url: "./users.json ",
        success: (result) => {
            result.forEach(r => {
                if (r.email == email)
                    sessionStorage.setItem("name", JSON.stringify(r.name));
            });
        }
    })}
    sessionStorage.setItem("cart", JSON.stringify(cart));
    sessionStorage.setItem("cars", JSON.stringify(cars));
    sessionStorage.setItem("sumcar", JSON.stringify(sumcar));
