const github = new Github;
const ui = new UI;

const searchBtn = document.querySelector('.search');

searchBtn.addEventListener('keyup' , (e) => {

   const userInp = e.target.value;

   if(userInp !== ''){
      github.getUsers(userInp)
         .then(data => {
            if(data.profile.message === 'Not Found'){
               //Show error
            }else{
               ui.showProfile(data.profile);
            }
         });
   }else{
      console.log('Error');
   }
})