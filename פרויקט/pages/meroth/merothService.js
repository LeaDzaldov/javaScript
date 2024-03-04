const checkchoose=(choose=()=>{})=>{
    $.ajax({
        url:"../../car.json",
        success: (result) => {
         choose(result);
        }
    });
}

