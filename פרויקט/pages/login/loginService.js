const callemail=(checkIfEmailExist=()=>{})=>{
    $.ajax({
        url:"./users.json ",
        success: (result) => {
            checkIfEmailExist(result);
        }
    });
}