class UI {

   constructor(){
      this.profilediv = document.querySelector('.display-sec');
   }

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
                     <li list-item>Locatiom: ${user.location}</li>
                     <li list-item>MemberSince: ${user.created_at}</li>
                  </ul>
               </div>
            </div>
         </div>
         <h1>Latest Repso</h1>
         <div class="user-repos></div>
      `
   }
}