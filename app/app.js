angular
  .module('FuckApp', [])
  .controller('MainCtrl', function ($scope, $rootScope, $location, $q, $http) {
    $scope.location = $location.path();
  })
  .factory('Factory', function() {
    return [
      { author: 'Вася Пупкин', message: 'Как записаться в очередь?' },
      { author: 'Вася Пупкин', message: 'Как записаться в очередь?' },
      { author: 'Вася Пупкин', message: 'Как записаться в очередь?' },
      { author: 'Вася Пупкин', message: 'Как записаться в очередь?' },
      { author: 'Вася Пупкин', message: 'Как записаться в очередь?' },
      { author: 'Вася Пупкин', message: 'Как записаться в очередь?' },
      { author: 'Вася Пупкин', message: 'Как записаться в очередь?' },
      { author: 'Вася Пупкин', message: 'Как записаться в очередь?' }
    ];
  });