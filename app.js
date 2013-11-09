var MwayTodo = angular.module('MwayTodo', []);

MwayTodo.controller('TodosCtrl', function ($scope) {
  $scope.todos = [];

  $scope.add = function () {
    $scope.todos.push({ title: $scope.newTodo, done: false });
  };
});