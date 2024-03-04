
document.addEventListener("DOMContentLoaded", function() {
    
    const vehicles = ["../../car1.jpg", "../../car2.jpg","../../car4.jpg", "../../car5.jpg", "../../car3.jpg", "../../car6.jpg"];
    let i=0;
    setInterval(() => {
        document.getElementById("vehicle-container").innerHTML=`<img src = "${vehicles[i]}" width="300px"/>`;
        i++;
        if(i===vehicles.length){
            i=0;
        }
    }, 1800);

});