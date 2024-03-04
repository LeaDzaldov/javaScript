const checkchoose=(choose=()=>{})=>{
    $.ajax({
        url:"../../פרויקט/car.json",
        success: (result) => {
         choose(result);
        }
    });
}

