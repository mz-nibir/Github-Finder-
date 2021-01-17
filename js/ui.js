class UI{
    constructor(){
        this.profile = document.querySelector('#profile');

    }
    showProfile(user){
        this.clearAlert();

        this.profile.innerHTML =`
        <div class= "card card-body mb-3">
        <div class= "row">
        <div class= "col-md-3">
        <img class= "img-fluid mb-2" src="${user.avatar_url}">
        <a href= "${user.html_url}" target= "_blank" class= "btn btn-primary btn-block mb-4">View Profile </a>
        </div>
        <div class="col-md-9">
        <span class= "badge bg-primary" > Public Repos: ${user.public_repos} </span>
        <span class= "badge bg-secondary" > Public Gists: ${user.public_gists} </span>
        <span class= "badge bg-success" > Public Followers: ${user.followers} </span>
        <span class= "badge bg-info" > Following: ${user.following} </span>
        <br> <br>
        <ul class= "list-group">
            <li class= "list-group-item">Company: ${user.company}</li>
            <li class= "list-group-item">Website/Blog: ${user.blog}</li>
            <li class= "list-group-item">Location: ${user.location}</li>
            <li class= "list-group-item">Member since: ${user.created_at}</li>
            </ul>
            </div>
            </div>
            </div>
            `;
            



    }
    clearProfile(){
         this.profile.innerHTML= "";
        

    }
    showAlert(msg,className){


        this.clearAlert(); //self function k call korte this use hoy
        this.clearProfile(); //akbar profile view kore jodi alert ase tahole ager view show theke alert dey. tai clearprofile call korle thik hobe
        
        let div= document.createElement('div');
        div.className= className;
        div.appendChild(document.createTextNode(msg));

        let container = document.querySelector(".searchContainer");
        let search = document.querySelector('.search');
        container.insertBefore(div,search); //div k add korbo search er age

    }
    clearAlert(){ //ager Alert k remove kore
        let currentAlert = document.querySelector('.alert');
        if(currentAlert){
            currentAlert.remove();
        }

    }
}