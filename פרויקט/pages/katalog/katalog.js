const dom = {
    // wellcome: document.getElementById('wellcome'),
    username: document.getElementById('username'),
    writeToPrinciple: document.getElementById('writeToPrinciple'),
    writeTocarcell: document.getElementById('writeTocarcell'),
    writeTocliner: document.getElementById('writeTocliner'),
    // carList:document.getElementById("car-list"),
};
let cart = JSON.parse(sessionStorage.getItem("cart"));
let sumcar =  JSON.parse(sessionStorage.getItem("sumcar"));
let car = [];
let cars =  JSON.parse(sessionStorage.getItem("cars"));
window.onload = () => {
    //הצגת התוכן הזה עם שרשור שם המשתמש
    const wellcomeUserName = document.createElement('h1');
    username.appendChild(wellcomeUserName);
    const userstr = JSON.parse(sessionStorage.getItem("name"));
    wellcomeUserName.innerText = `אנו שמחים לראותך ${userstr}`;
    wellcomeUserName.style.marginTop = '0px'
}
//בעת לחיצה להתיעצות עם המנהלת
const principal = document.getElementById("principcal");
principal.onclick = () => {
    const principaltext = document.createElement('textArea');
    principaltext.style.width = "300px";
    principaltext.style.height = "200px";
    principaltext.style.marginLeft = "300px";
    principaltext.style.fontSize = "17px";
    principaltext.style.color = "red";
    principaltext.style.backgroundColor = "black";
    principaltext.style.border = "3px,white,solid";
    principaltext.innerHTML = 'הי כאן תמר!!! אשמח לעמוד לשירותך,   במה אוכל לעזור לך';
    dom.writeToPrinciple.appendChild(principaltext);
    const bottun = document.createElement("button");
    bottun.innerHTML = "send";
    bottun.style.marginTop = "-50px";
    bottun.id = "link";
    writeToPrinciple.appendChild(bottun);
    bottun.addEventListener("click", function () {
        window.location.href = "https://www.icar.co.il";;
        alert("שאלתך התקבלה ,היה זמין בנייד .רשת MYCAR")
    });
    writeToPrinciple.appendChild(bottun);
}
const carsell = document.getElementById("carsell");
carsell.onclick = () => {
    const carselltext = document.createElement('textArea');
    carselltext.style.width = "300px";
    carselltext.style.height = "200px";
    carselltext.style.marginLeft = "300px";
    carselltext.style.fontSize = "17px";
    carselltext.style.fontFamily = "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;";
    carselltext.style.color = "red";
    carselltext.style.backgroundColor = "black";
    carselltext.style.border = "6px,white,solid";
    carselltext.innerHTML = 'הי כאן לאהלה!!! אשמח לעמוד לשירותך, במה אוכל לעזור לך'
    dom.writeTocarcell.appendChild(carselltext);
    const bottun = document.createElement("button");
    bottun.innerHTML = "send";
    bottun.style.marginTop = "-50px";
    bottun.id = "link";
    carselltext.appendChild(bottun);
    bottun.addEventListener("click", function () {
        window.location.href = "https://www.icar.co.il";
        alert("שאלתך התקבלה ,היה זמין בנייד .רשת MYCAR")
    });
    writeTocarcell.appendChild(bottun);
}

let carType = (type) => {
    sessionStorage.setItem("type", type)
    window.location.href("../../pages/meroth/meroth.html");
}



const cliner = document.getElementById("cliner");
cliner.onclick = () => {
    const carselltext = document.createElement('textArea');
    writeTocliner.style.width = "300px";
    writeTocliner.style.height = "200px";
    writeTocliner.style.marginLeft = "300px";
    writeTocliner.style.fontSize = "20px";
    writeTocliner.style.fontFamily = "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;";
    writeTocliner.style.color = "rgb(86,243,235)";
    writeTocliner.style.backgroundColor = "black";
    writeTocliner.style.border = "6px,white,solid";
    writeTocliner.innerHTML = 'לך ותשאל את שאלתך ההכרחית והגורלית!!!! מול המראה'
    dom.writeTocliner.appendChild(writeTocliner);
}
let like = {
    carForm: {

        colorSelect: document.getElementById("color-select"),
        wheelSelect: document.getElementById("wheel-select"),
        car: document.getElementById("car"),
        ok: document.getElementById("ok")
    }
}



like.carForm.ok.onclick = (event) => {
    event.preventDefault();

   let color = like.carForm.colorSelect.value;
   let wheelType = like.carForm.wheelSelect.value;
    console.log(color);
    console.log(wheelType);

    like.carForm.car.style.backgroundColor= color;
    like.carForm.car.innerHTML = 'החלום שלך:  ' + wheelType    + '  ,' + 
        "הרכב שברשותינו עולה על כל דמיון גם על דמיון מפותח כמו שלך ובכדי להתרשם  שים גז לסניף הקרוב!!!!!!!!! "




};

