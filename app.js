var MwayTodo = angular.module('MwayTodo', []);

MwayTodo.controller('TodosCtrl', function ($scope) {
  $scope.todos = [];
  $scope.newTodo = {
    title: '',
    done: false
  };

  $scope.add = function () {
    $scope.todos.push($scope.newTodo);
  };
});