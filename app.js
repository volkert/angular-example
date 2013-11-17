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
  var todos = [];

  return {
    todos: todos,

    add: function (title) {
      todos.push({ title: title, done: false });
    }
  }
});

MwayTodo.directive('tabs', function () {
  return {
    restrict: 'E',
    replace: true,
    transclude: true,
    template:
        '<div>' +
        ' <ul class="nav nav-tabs">' +
        '  <li ng-repeat="pane in panes" ng-class="{ active: pane.selected }">' +
        '    <a href="#" ng-click="select(pane)">{{ pane.title }}</a>' +
        '  </li>' +
        ' </ul>' +
        ' <div class="tab-content" ng-transclude></div>' +
        '</div>',

    controller: function ($scope) {
      var panes = $scope.panes = [];

      $scope.select = function (pane) {
        angular.forEach(panes, function (p) {
          p.selected = false;
        });
        pane.selected = true;
      };

      this.registerPane = function (pane) {
        if (!panes.length) $scope.select(pane);
        panes.push(pane);
      };
    }

  }
});

MwayTodo.directive('pane', function () {
  return {
    restrict: 'E',
    scope: {
      title: '@'
    },
    replace: true,
    transclude: true,
    require: '^tabs',
    template: '<div class="tab-pane" ng-class="{active: selected}" ng-transclude></div>',

    link: function (scope, elm, attr, tabsCtrl) {
      tabsCtrl.registerPane(scope);
    }

  }
});