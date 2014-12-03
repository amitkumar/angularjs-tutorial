'use strict';

describe('TodoService', function(){
  var TodoService,
      $timeout;

  beforeEach(module('angularjsTutorial'));


  beforeEach(inject(function(_$timeout_) {
    $timeout = _$timeout_;
  }));

  beforeEach(inject(function (_TodoService_) {
    TodoService = _TodoService_;
  }));


  describe('#getTodos', function(){
    it('should return an array', function(done) {
      TodoService.getTodos()
      .then(function(todos){
        expect(angular.isArray(todos)).toBeTruthy();
      })
      .finally(done);
      $timeout.flush();
    });
  });


  describe('#addTodo', function(){
    it('should be able to add a todo and return the newly created todo', function(done) {
      TodoService.addTodo({
        title : 'test title 1'
      })
      .then(function(newTodo){
        expect(newTodo).toBeDefined();
      })
      .then(TodoService.getTodos)
      .then(function(newTodo){
        expect(TodoService.getTodos().length === 1).toBeTruthy();
      })
      .finally(done);
      $timeout.flush();
    });

    it('should create "title" and "completed" properties on todos', function(done) {
      TodoService.addTodo({
        title : 'test title 2'
      })
      .then(TodoService.getTodos)
      .then(function(todos){
        expect(todos.length === 1).toBeTruthy();

        expect(todos[0].title).toBeDefined();
        expect(todos[0].completed).toBeDefined();
        expect(todos[0].completed).toBe(false);
      })
      .finally(done);
      $timeout.flush();
    });
  });


  describe('#removeTodoById', function(){
    it('should be able to remove a todo by reference', function(done) {

      var title = 'test title 3';

      TodoService.addTodo({
        title : title
      })
      .then(TodoService.getTodos)
      .then(function(todos){
        expect(todos.length === 1).toBeTruthy();
      })
      .then(function(){
        return TodoService.removeTodoById(newTodo.id)
      })
      .then(TodoService.getTodos)
      .then(function(todos){
        expect(todos.length === 0).toBeTruthy();
      })
      .finally(done);

      $timeout.flush();
    });
  });

});
