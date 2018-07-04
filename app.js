angular.module('flapperNewsFront', [])
  .controller('MainCtrl', ['$scope', function($scope) {
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
    $scope.posts = [
      {title: 'post 1', upvotes: 5},
      {title: 'post 2', upvotes: 2},
      {title: 'post 3', upvotes: 15},
      {title: 'post 4', upvotes: 9},
      {title: 'post 5', upvotes: 4}
    ];

    // Create a $scope function that will add an object into the posts array:
    $scope.addPost = function() {
      // $scope.posts.push({ title: 'A new post!', upvotes: 0

      if(!$scope.title || $scope.title === '') { return; }

      // Retrieve the title entered into our form, which is bound to the $scope variable title, and set title to blank once it has been added to the posts array:
      $scope.posts.push({ title: $scope.title, upvotes: 0 });
      $scope.title = '';
    };

  }]);
