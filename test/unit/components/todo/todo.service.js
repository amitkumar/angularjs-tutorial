'use strict';

describe('TodoService', function(){
  var TodoService;

  beforeEach(module('angularjsTutorial'));

  beforeEach(inject(function (_TodoService_) {
    TodoService = _TodoService_;
  }));

  describe('#getTodos', function(){
    it('should return an array', function(done) {
      var todos = TodoService.getTodos();
      expect(angular.isArray(todos)).toBeTruthy();
    });
  });


  describe('#addTodo', function(){
    it('should be able to add a todo and return the newly created todo', function(done) {
      var newTodo = TodoService.addTodo({
        title : 'test title'
      });

      expect(TodoService.getTodos().length === 1).toBeTruthy();
      expect(newTodo).toBeDefined();
    });

    it('should create "title" and "completed" properties on todos', inject(function($controller) {
      TodoService.addTodo({
        title : 'test title'
      });

      var todos = TodoService.getTodos();

      expect(todos.length === 1).toBeTruthy();

      expect(todos[0].title).toBeDefined();
      expect(todos[0].completed).toBeDefined();
      expect(todos[0].completed).toBe(false);
    }));


  });

  describe('#removeTodoByReference', function(){
    it('should be able to remove a todo by reference', inject(function($controller) {

      var title = 'test title';

      var newTodo = TodoService.addTodo({
        title : title
      });

      expect(TodoService.getTodos().length === 1).toBeTruthy();

      TodoService.removeTodoByReference(newTodo);

      expect(TodoService.getTodos().length === 0).toBeTruthy();
    }));
  });

});
