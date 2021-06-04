const github = new Github;
const ui = new UI;

const searchBtn = document.querySelector('.search');

searchBtn.addEventListener('keyup' , (e) => {

   const userInp = e.target.value;

   if(userInp !== ''){
      github.getUsers(userInp)
         .then(data => {
            if(data.profile.message === 'Not Found'){
               ui.showAlert('User not found' , 'alert box-width');
            }else{
               ui.showProfile(data.profile);
               ui.showRepos(data.repos);
            }
         });
   }else{
      ui.clearProfile();
   }
})