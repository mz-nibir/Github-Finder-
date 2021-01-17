let searchBtn = document.querySelector("#searchBtn");
let searchUser = document.querySelector("#searchUser");
let ui= new UI();

//add event listener
searchBtn.addEventListener('click', (e) => {
    let userText = searchUser.value;

    if(userText != ""){
        //Fetch API
        fetch(`https://api.github.com/users/${userText}`)
        .then(result => result.json())
        .then(data => {
           // console.log(data);

           if(data.message == 'Not Found'){
               //show alert
           }
           else{

            //show profile
            ui.showProfile(data);
           }


        })

    }else{
        //clear profile

    ui.clearProfile();
        
    }



});