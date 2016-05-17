export default class GitHubController {
  constructor(GitHubService, $stateParams, $firebaseArray) {
    
    this.selectedUser = $stateParams.user
    
    GitHubService.getUser(this.selectedUser)
      .then(this.handleGetUserSuccess.bind(this));
    
    GitHubService.getRepos(this.selectedUser)
      .then(this.handleGetReposSuccess.bind(this));
      
    
    if(this.selectedUser){
      var ref = new Firebase("https://githubangular.firebaseio.com/users");
      var usersRef = ref.child(this.selectedUser);
      this.comment = $firebaseArray(usersRef);
    }

    this.addMessage = function(){
      usersRef.push().set({
        author: this.author,
        message: this.message
      });
      
      this.author = "";
      this.message = "";
    }
      
  }
  
  handleGetUserSuccess(response) {
    this.User = response.data;
    console.log(this.User);
  }
  
  handleGetReposSuccess(response) {
    this.Repos = response.data;
    console.log(this.Repos);
  }
 
}