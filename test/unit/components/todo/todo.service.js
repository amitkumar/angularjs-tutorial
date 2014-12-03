'use strict';

describe('TodoService', function(){
  var TodoService;

  beforeEach(module('angularjsTutorial'));

  beforeEach(inject(function (_TodoService_) {
    TodoService = _TodoService_;
  }));


  describe('#getTodos', function(){
    it('should return an array', function(done) {
      TodoService.getTodos()
      .then(function(todos){
        expect(angular.isArray(todos)).toBeTruthy();
        done();
      });
    });
  });


  describe('#addTodo', function(){
    it('should be able to add a todo and return the newly created todo', function(done) {
      TodoService.addTodo({
        title : 'test title 1'
      })
      .then(function(newTodo){
        expect(TodoService.getTodos().length === 1).toBeTruthy();
        expect(newTodo).toBeDefined();
        done();
      });
    });

    it('should create "title" and "completed" properties on todos', inject(function($controller) {
      TodoService.addTodo({
        title : 'test title 2'
      })
      .then(TodoService.getTodos)
      .then(function(todos){
        expect(todos.length === 1).toBeTruthy();

        expect(todos[0].title).toBeDefined();
        expect(todos[0].completed).toBeDefined();
        expect(todos[0].completed).toBe(false);
        done();
      });
    }));
  });


  describe('#removeTodoById', function(){
    it('should be able to remove a todo by reference', inject(function($controller) {

      var title = 'test title 3';

      TodoService.addTodo({
        title : title
      })
      .then(TodoService.getTodos)
      .then(function(todos){
        expect(todos.length === 1).toBeTruthy();
        return;
      })
      .then(function(){
        return TodoService.removeTodoById(newTodo.id)
      })
      .then(TodoService.getTodos)
      .then(function(todos){
        expect(todos.length === 0).toBeTruthy();
        done();
      });
    }));
  });

});
