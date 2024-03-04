let cart = JSON.parse(sessionStorage.getItem('cart')) || [];
let cars = JSON.parse(sessionStorage.getItem('cars')) || [];
let sumcar = JSON.parse(sessionStorage.getItem('sumcar')) || [];



let carimage = 0;
let p = 0;
const dom = {
    h1: document.querySelector('h1'),
    h2: document.querySelector('h2'),
    pay: document.getElementById('pay'),
    price: document.getElementById('price'),
}
const creditCardForm = {
    cardName: document.getElementById('cardName'),
    cardNumber: document.getElementById('cardNumber'),
    expiryDate: document.getElementById('expiryDate'),
    cvv: document.getElementById('cvv'),
    submit: document.getElementById('submit'),
   


}



const yourcard = cardNumber.value;
const yourexpiry = expiryDate.value;
const yourcvv = cvv.value;

var storedValue = sessionStorage.getItem("name"),
    cardName = document.getElementById('cardName').value = storedValue;
if (storedValue === null) {
    alert("לא נרשמת!");
    window.location.href = "../pages/login/login.html";

}
for (let index = 0; index < cart.length; index++) {
    dom.pay.innerHTML += `
    <div id="allCard${index}">
    
    <div id="design">
    <p>מחיר ${cart[index]}</p></div>
    <div class="designremove">
    <img src = '../imgs/${cars[index]}' width="360px"/>
    </div>
    </div>`

    const buttoncard1 = document.createElement('button');
    buttoncard1.type = "submit";

    buttoncard1.className = "fas fa-trash-alt newCard";
    buttoncard1.id = `${index}`
    buttoncard1.style.color = 'black';
    buttoncard1.style.marginRight = '420px';
    buttoncard1.style.backgroundColor = 'red';
    buttoncard1.style.height = '30px';
    buttoncard1.style.width = '35px';
    buttoncard1.style.zIndex = '2';
    buttoncard1.style.marginTop = '-150px';
    buttoncard1.style.borderRadius = '50%';
    document.getElementById(`allCard${index}`).appendChild(buttoncard1);


}

Array.from(document.querySelectorAll(".newCard")).forEach((newCard) => {
    newCard.onclick = (event) => {

        console.log(cart[event.target.id].price);

        sumcar -= cart[event.target.id];


        sessionStorage.setItem("sumcar", JSON.stringify(sumcar));
        document.getElementById(`allCard${event.target.id}`).style = 'display: none;';

        cart.splice(event.target.id, 1);
        sessionStorage.setItem("cart", JSON.stringify(cart));

        cars.splice(event.target.id, 1);
        sessionStorage.setItem("cars", JSON.stringify(cars));

        alert('הרכב הוסר מהקניה');
    }

})




creditCardForm.cardNumber.onkeydown = function (event) {
    console.log(event);
    if (!isKeyValid1(event.key)) {
        alert('יש להכניס רק מספרים');
        event.preventDefault();
    }
}

const isKeyValid1 = function (key) {
    return key >= '0' && key <= '9';
}
creditCardForm.expiryDate.onkeydown = function (event) {
    console.log(event);
    if (!isKeyValid1(event.key)) {
        alert('יש להכניס רק מספרים');
        event.preventDefault();
    }
}


creditCardForm.cvv.onkeydown = function (event) {
    console.log(event);
    if (!isKeyValid1(event.key)) {
        alert('יש להכניס רק מספרים');
        event.preventDefault();
    }
}
creditCardForm.submit.addEventListener('click', () => {

    if (sumcar === 0) {
        alert("סל הקניות ריק");
        window.location.href = "../pages/katalog/katalog.html";
    }
    if (sumcar !== 0) {
        alert("חשבונך יחויב בסך:" + sumcar);


    }
    
})

