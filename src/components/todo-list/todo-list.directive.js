'use strict';

angular.module('angularjsTutorial')
.directive('ajstTodoList', function() {
  return {
    restrict: 'E',
    scope: {
      onGetTodos : '&', // bind to expression of same name
      onRemoveTodo : '&',
      onSaveTodo : '&'
    },
    templateUrl: 'components/todo-list/todo-list.html',
    controller : [
        '$scope', '$element', '$attrs', '$transclude', '$log', 'TodoService',
        function ($scope, $element, $attrs, $transclude, $log, TodoService){
          var self = this;

          $log.log('ajtTodoList controller instantiated');


          self.getTodos = function(){
             return TodoService.getTodos()
              .then(function(todos){
                self.todos = todos;
                $scope.onGetTodos({
                  todos : todos
                });
                return self.todos;
              });
          };

          self.removeTodo = function(todo){
            return TodoService.removeTodo(todo, function(){
              $scope.onRemoveTodo({
                todo : todo
              });
            });
          };


          self.getTodoClasses = function(todo){
            return {
              'completed' : todo.completed
            }
          };

          self.saveTodo = function(todo){
            return TodoService.saveTodo(todo, function(){
              $scope.onSaveTodo({
                todo : todo
              });
            });
          };

          self.getTodos();
        }
      ],
      controllerAs : 'ajstTodoListCtrl'
    }

  }
);
