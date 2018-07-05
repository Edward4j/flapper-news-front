angular.module('flapperNewsFront', [
  // Include external module 'ui-router' as a dependency in our app:
  'ui.router'
])
  // Create the config block for our app and configure a home state using $stateProvider and $urlRouterProvider. Use otherwise() to redirect unspecified routes.
  .config([
    '$stateProvider',
    '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {

      $stateProvider
        .state('home', {
          url: '/home',
          templateUrl: '/home.html',
          controller: 'MainCtrl'
        })
        .state('posts', {
          url: '/posts/{id}',
          templateUrl: '/posts.html',
          controller: 'PostsController'
        });

      $urlRouterProvider.otherwise('home');
    }
  ])
  .factory('posts', [function() {
    var o = {
      posts: []
    };
    return o;
  }])
  .controller('MainCtrl', [
    '$scope',
    // inject posts service into MainCtrl controller
    'posts',
    function($scope, posts) {
      $scope.test = 'Hello Angular World!';

    // Initial data
    // $scope.posts = [
    //   'post 1',
    //   'post 2',
    //   'post 3',
    //   'post 4',
    //   'post 5'
    // ];

    /** Add more info about posts */
    // $scope.posts = [
    //   {title: 'post 1', upvotes: 5},
    //   {title: 'post 2', upvotes: 2},
    //   {title: 'post 3', upvotes: 15},
    //   {title: 'post 4', upvotes: 9},
    //   {title: 'post 5', upvotes: 4}
    // ];

    // Bind the $scope.posts variable in our controller to the posts array in our service:
      $scope.posts = posts.posts;

    // Create a $scope function addPost() that will add an object into the posts array:
      $scope.addPost = function() {
        // $scope.posts.push({ title: 'A new post!', upvotes: 0

        if(!$scope.title || $scope.title === '') { return; }

        // Retrieve the title entered into our form, which is bound to the $scope variable title, and set title to blank once it has been added to the posts array:
        $scope.posts.push({
          title: $scope.title,
          link: $scope.link,
          upvotes: 0, // add an array of fake comments to the posts object:
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

      $scope.decrementUpvotes = function(post) {
        if(post.upvotes == 0) { return; };
        post.upvotes -= 1;
      };

  }])
  .controller('PostsController', [
    '$scope',
    '$stateParams',
    'posts',
    function($scope, $stateParams, posts) {
      $scope.post = posts.posts[$stateParams.id];

      $scope.addComment = function() {
        if(!$scope.body || $scope.body === '') { return; }
        $scope.post.comments.push({
          body: $scope.body,
          author: 'user',
          upvotes: 0
        });
        $scope.body = '';
      };

      $scope.incrementUpvotes = function(comment) {
        comment.upvotes += 1;
      };

    }
  ]);
