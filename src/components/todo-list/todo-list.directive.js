'use strict';

angular.module('angularjsTutorial')
.directive('ajstTodoList', function() {
  return {
    restrict: 'E',
    scope: {
    },
    templateUrl: 'components/todo-list/todo-list.html',
    controller : [
        '$scope', '$element', '$attrs', '$transclude', '$log', 'TodoService',
        function ($scope, $element, $attrs, $transclude, $log, TodoService){
          var self = this;

          $log.log('ajtTodoList controller instantiated');

          $scope.getTodos = function(){
             return TodoService.getTodos()
              .then(function(todos){
                $scope.todos = todos;
                return $scope.todos;
              });
          };

          $scope.removeTodo = function(todo){
            return TodoService.removeTodo(todo);
          };


          $scope.getTodoClasses = function(todo){
            return {
              'completed' : todo.completed
            }
          };

          $scope.saveTodo = function(todo){
            return TodoService.saveTodo(todo);
          }

          $scope.getTodos();
        }
      ]
    }

  }
);
