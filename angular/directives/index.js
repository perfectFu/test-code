angular.module('app').directive('parent', ['$compile', function() {
  return {
    restrict: 'AE',
    templateUrl: '/directives/main.html',
    replace: true,
    controller: function($scope) {
      $scope.title = 'parent'
    }
  }
}])

angular.module('app').directive('dingding', ['$compile', function() {
  return {
    restrict: 'AE',
    templateUrl: '/directives/dingding.html',
    replace: true,
    controller: function($scope) {
      $scope.title = 'parent'
    }
  }
}])