import angular from 'angular';
import uirouter from 'angular-ui-router';
import firebase from 'firebase';
import angularfire from 'angularfire';

import routing from './github.routes';
import GitHubController from './github.controller';
import GitHubService from './github.service';

import githubUser from './directives/github_user';
import repoList from './directives/repo_list';
import userInput from './directives/user_input';
import commentBox from './directives/comment_box';

export default angular.module('app.github', [uirouter, angularfire])
  .config(routing)
  .controller('GitHubController', GitHubController)
  .service('GitHubService', GitHubService)
  .directive('githubUser', githubUser)
  .directive('repoList', repoList)
  .directive('userInput', userInput)
  .directive('commentBox', commentBox)
  .name;