var MwayTodo = angular.module('MwayTodo', []);

MwayTodo.controller('TodosCtrl', function ($scope, Todo) {
  $scope.todos = Todo.todos;

  $scope.keyup = function (event) {
    if (event.keyCode == 13) {
      $scope.add();
    }
  };

  $scope.add = function () {
    Todo.add($scope.newTodo);
    $scope.newTodo = '';
  };
});

MwayTodo.service('Todo', function () {
  this.todos = [];

  this.add = function (title) {
    todos.push({ title: title, done: false });
  };
});