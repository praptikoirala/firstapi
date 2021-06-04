class UI {

   constructor(){
      this.profilediv = document.querySelector('.display-sec');
   }

   //Show profile
   showProfile(user){
      this.profilediv.innerHTML = `
         <div class="profile">
            <div class="item-2">
               <img src="${user.avatar_url}" class="imgstyle">
               <a href="${user.html_url}" class="link-btn btn">View Profile</a>
            </div>
            <div class="item-8">
               <div class="git-info">
                  <div class="block block-dark">Public Repos: ${user.public_repos}</div>
                  <div class="block block-light">Public Gists: ${user.public_gists}</div>
                  <div class="block block-dark">Followers: ${user.followers}</div>
                  <div class="block block-light">Following: ${user.following}</div>
               </div>
               <div class="basic-info">
                  <ul class="list">
                     <li list-item>Company: ${user.company}</li>
                     <li list-item>Website/Blog: ${user.blog}</li>
                     <li list-item>Location: ${user.location}</li>
                     <li list-item>MemberSince: ${user.created_at}</li>
                  </ul>
               </div>
            </div>
         </div>
         <h1>Latest Repos</h1>
         <div class="user-repos"></div>
      `
   }

   //Show repos
   showRepos(repos){
      let output = '';

      for(let i = 0; i < repos.length; i++){
         output += `
            <div class="repos-sec">
               <div class="repo-link">
                  <a href="${repos[i].html_url}" target="_blank" class="reponame">${repos[i].name}</a>
               </div>
               <div class="repo-info">
                  <div class="block block-dark">Stars: ${repos[i].stargazers_count}</div>
                  <div class="block block-light">Watchers: ${repos[i].watchers_count}</div>
                  <div class="block block-dark">Fork: ${repos[i].fork}</div>
               </div>
            </div>
         `;
      }

      document.querySelector('.user-repos').innerHTML = output;
   }

   //Show alert for users not found
   showAlert(message, classes){
      //Clear alert that is already there
      this.clearAlert(); 
      //Create div
      const div = document.createElement('div');
      //Add class to div
      div.className = classes;
      //Add text
      div.appendChild(document.createTextNode(message));
      //Get the parent
      const parent = document.querySelector('.content-div');
      //Get the div infront of which new div is to be added
      const before = document.querySelector('.search-section');
      //Inssert alert
      parent.insertBefore(div , before);

      setTimeout(() => {
         this.clearAlert();
      }, 2000);
   }

   //Clear alert
   clearAlert(){
      const currentAlert = document.querySelector('.alert');

      if(currentAlert){
         currentAlert.remove();
      }
   }

   //Clear profile displayed
   clearProfile(){
      this.profilediv.innerHTML = '';
   }
}