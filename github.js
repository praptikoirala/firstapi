class Github{
   constructor(){
      this.repos_count = 5;
      this.repos_order = 'created: asc';
   }

   async getUsers(userName){
      const userProfile = await fetch(`https://api.github.com/users/${userName}`);
      const userRepos = await fetch(`https://api.github.com/users/${userName}/repos?per_page=${this.repos_count}&sort=${this.repos_order}`);

      const profileData = await userProfile.json();
      const reposData = await userRepos.json();

      return {
         profile: profileData,
         repos: reposData
      }
   }
}