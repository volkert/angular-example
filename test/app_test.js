'use strict';

describe('Todo', function(){

  beforeEach(angular.mock.module('MwayTodo'));

  it('should initialize with an empty todos array', angular.mock.inject(function(Todo) {
    expect(Todo.todos.length).toBe(0);
  }));

  it('should add todo', angular.mock.inject(function(Todo) {
    Todo.add('A todo');
    expect(Todo.todos.length).toBe(1);
    expect(Todo.todos[0].title).toEqual('A todo');
    expect(Todo.todos[0].done).toBe(false);
  }));

  it('should remove by index', angular.mock.inject(function(Todo) {
    Todo.add('A todo to remove');
    expect(Todo.todos.length).toBe(1);
  }));
});