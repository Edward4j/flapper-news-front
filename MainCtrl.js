angular.module('flapperNewsFront', [])
  .controller('MainCtrl', ['$scope', function($scope) {
    $scope.test = 'Hello Angular World!';

    $scope.posts = [
      'post 1',
      'post 2',
      'post 3',
      'post 4',
      'post 5'
    ];
  }]);
