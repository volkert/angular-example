'use strict';

describe('Todo', function () {

  beforeEach(module('MwayTodo'));

  it('should initialize with an empty todos array', inject(function (Todo) {
    expect(Todo.todos.length).toBe(0);
  }));

  it('should add todo', inject(function (Todo) {
    Todo.add('A todo');
    expect(Todo.todos.length).toBe(1);
    expect(Todo.todos[0].title).toEqual('A todo');
    expect(Todo.todos[0].done).toBe(false);
  }));

  it('should remove by index', inject(function (Todo) {
    Todo.add('A todo to remove');
    expect(Todo.todos.length).toBe(1);
  }));
});

describe('Tabs', function () {

  var elm, scope;

  beforeEach(module('MwayTodo'));

  beforeEach(inject(function ($rootScope, $compile) {
    elm = angular.element(
      '<tabs>' +
      '  <pane title="Ein Tab">first content is {{first}}</pane>' +
      '  <pane title="Noch ein Tab">second content is {{second}}</pane>' +
      '</tabs>');

    scope = $rootScope;
    $compile(elm)(scope);
    scope.$digest();
  }));

  it('should create clickable titles', function() {
    var titles = elm.find('ul.nav-tabs li a');

    expect(titles.length).toBe(2);
    expect(titles.eq(0).text()).toBe('Ein Tab');
    expect(titles.eq(1).text()).toBe('Noch ein Tab');
  });


  it('should bind to pane content', function() {
    var contents = elm.find('div.tab-content div.tab-pane');

    expect(contents.length).toBe(2);
    expect(contents.eq(0).text()).toBe('first content is ');
    expect(contents.eq(1).text()).toBe('second content is ');

    scope.$apply(function() {
      scope.first = 123;
      scope.second = 'foobar';
    });

    expect(contents.eq(0).text()).toBe('first content is 123');
    expect(contents.eq(1).text()).toBe('second content is foobar');
  });

  it('should set active class on title', function() {
    var titles = elm.find('ul.nav-tabs li');

    expect(titles.eq(0).hasClass('active')).toBe(true);
    expect(titles.eq(1).hasClass('active')).toBe(false);
  });

  it('should set active class on content', function() {
    var contents = elm.find('div.tab-content div.tab-pane');

    expect(contents.eq(0).hasClass('active')).toBe(true);
    expect(contents.eq(1).hasClass('active')).toBe(false);
  });

  it('should set active element on click', function() {
    var contents = elm.find('div.tab-content div.tab-pane'),
        titles = elm.find('ul.nav-tabs li');

    titles.eq(1).find('a').click();

    expect(titles.eq(1).hasClass('active')).toBe(true);
    expect(contents.eq(1).hasClass('active')).toBe(true);

    expect(titles.eq(0).hasClass('active')).toBe(false);
    expect(contents.eq(0).hasClass('active')).toBe(false);
  });

});