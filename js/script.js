let searchBtn = document.querySelector("#searchBtn");
let searchUser = document.querySelector("#searchUser");

//add event listener
searchBtn.addEventListener('click', (e) => {
    let userText = searchUser.value;

    if(userText != ""){
        alert(userText);
    }



});