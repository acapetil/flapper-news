angular.module('flapperNews', ['ui.router','templates'])
.config([
'$stateProvider',
'$urlRouterProvider',
function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: 'home/_home.html',
      controller: 'MainCtrl'
    })
    .state('posts', {
	  url: '/posts/{id}',
	  templateUrl: 'posts/_posts.html',
	  controller: 'PostsCtrl'
	});

  $urlRouterProvider.otherwise('home');
}])

$scope.addPost = function(){
  if(!$scope.title || $scope.title === '') { return; }
  $scope.posts.push({
	title: $scope.title,
	link: $scope.link,
	upvotes: 0,
	comments: [
	  {author: 'Joe', body: 'Cool post!', upvotes: 0},
	  {author: 'Bob', body: 'Great idea but everything is wrong!', upvotes: 0}
	]
  });
  $scope.title = '';
  $scope.link = '';
};

$scope.incrementUpvotes = function(post) {
  post.upvotes += 1;
};

$scope.posts = posts.posts;