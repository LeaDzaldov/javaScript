let cart = JSON.parse(sessionStorage.getItem("cart"));
let sumcar = JSON.parse(sessionStorage.getItem("sumcar"));;
let car = [];
let cars = JSON.parse(sessionStorage.getItem("cars"));;
const onload = () => {
    checkchoose(fun);
}
const fun = (result) => {
    car = result;
    console.log(car);
}
let dom = {
    cars: document.getElementById('cars'),
    searchForm: document.getElementById("search"),
    collection: document.getElementById("collection"),
    allCars: document.getElementById("allCars"),



}
let searchInputs = {
    collection: document.querySelector('option'),
    ok: document.getElementById('ok')


}

searchInputs.ok.onclick = () => {
    const currentName = Array.from(dom.collection.children)[dom.collection.value].innerHTML;
    console.log(Array.from(dom.collection.children)[dom.collection.value].innerHTML);
    car.forEach((car, index) => {
        if (car.name == currentName && car.type == 'מנהלים' || currentName == "הכל" && car.type == 'מנהלים') {
            console.log(car);


            dom.allCars.innerHTML += `
            
        <div class="coverr">   
   <div id="design">
        <p>חברת ${car.name}</p>
        <p>מחיר ${car.price}  </p>
        <p>${car.seat} מקומות</p>
        </div>
        <div class="cars">
      
        <img src='../../imgs/רכבי מנהלים/${car.image}' width="350px"/><div>
      </div>
        `
            allCars.style.display = 'flex';
            allCars.style.justifyContent = 'space between';


            const buttoncard = document.createElement('button');
            const divCard = document.createElement('div');
            buttoncard.type = "submit";
            buttoncard.className = "fas fa-cart-plus newCar ";
            buttoncard.id = `${car.id}`
            buttoncard.style.backgroundColor = 'red';
            buttoncard.style.height = '40px';
            buttoncard.style.width = '45px';
            buttoncard.style.zIndex = '2';
            divCard.style.display='flex';
            divCard.style.flexDirection='column';

           
            buttoncard.style.borderRadius = '50%';
            buttoncard.disable = true;

            buttoncard.appendChild(divCard);

            dom.allCars.appendChild(buttoncard);
        }
    })


debugger
    Array.from(document.querySelectorAll(".newCar")).forEach((currentCar) => {
        currentCar.onclick = (event) => {
            debugger
            alert('הרכב נרכש בהצלחה');
            event.target.style.visibility = 'hidden';
            console.log(event.target);
            car.forEach(c => {
                if (c.id == event.target.id) {
                    console.log(c);


                    cart.push(c.price);
                    debugger
                    cars.push(`רכבי מנהלים/${c.image} `),
               
                        sessionStorage.setItem("cart", JSON.stringify(cart));
                        debugger
                    sessionStorage.setItem("cars", JSON.stringify(cars));
                    debugger
                    console.log(cart);
                    console.log(cart);
                    sumcar += c.price;
                    sessionStorage.setItem("sumcar", JSON.stringify(sumcar));
                    console.log(sumcar);
                }
            });
        }
    })
}


window.addEventListener("DOMContentLoaded", () => {
    car.forEach((car) => {
        console.log(car);
        dom.allCars.innerHTML += `
    
   <div id="design">
        <p>חברת ${car.name}</p>
        <p>מחיר ${car.price}  </p>
        <p>${car.seat} מקומות</p>
        </div>
        <div class=cars>
        <img src='../../imgs/רכבי מנהלים/${car.image}' width="350px"/><div>
        
    
        `

    })
});