class Github{

   async getUsers(userName){
      const userResp = await fetch(`https://api.github.com/users/${userName}`);

      const profileData = await userResp.json();

      return {
         profile: profileData
      }
   }
}