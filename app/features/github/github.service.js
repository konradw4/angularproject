export default class GitHubService {
  constructor($http) {
    this.$http = $http;
  }

  getUser(user) {
    return this.$http.get('https://api.github.com/users/' + user + '?client_id=e579ed4951114e2360ca&client_secret=35088adbb4239b05a8c8a97ccebc7240be75c3f1')
  }
  
  getRepos(user) {
    return this.$http.get('https://api.github.com/users/'+ user +'/repos?client_id=e579ed4951114e2360ca&client_secret=35088adbb4239b05a8c8a97ccebc7240be75c3f1')
  }
}