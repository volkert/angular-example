var MwayTodo = angular.module('MwayTodo', []);

MwayTodo.controller('TodosCtrl', function ($scope) {
  $scope.todos = [];


  $scope.keyup = function (event) {
    if (event.keyCode == 13) {
      $scope.add();
    }
  };

  $scope.add = function () {
    $scope.todos.push({ title: $scope.newTodo, done: false });
    $scope.newTodo = '';
  };
});