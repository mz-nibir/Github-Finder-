let searchBtn = document.querySelector("#searchBtn");
let searchUser = document.querySelector("#searchUser");

//add event listener
searchBtn.addEventListener('click', (e) => {
    let userText = searchUser.value;

    if(userText != ""){
        //Fetch API
        fetch(`https://api.github.com/users/${userText}`)
        .then(result => result.json())
        .then(data => {
            console.log(data);


        })

    }



});