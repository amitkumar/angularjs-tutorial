'use strict';

angular.module('angularjsTutorial')
  .factory('TodoService', ['$window', '$log', function ($window, $log) {

    $log.log('TodoService instantiated');

    var localStorageTodosKey = 'todos',
        todos;

    var getFromLocalStorage = function(){
      var result = $window.localStorage.getItem(localStorageTodosKey);
      if (result){
        todos = JSON.parse(result);
      }
      return todos;
    };

    var saveToLocalStorage = function(){
      $log.log('saveToLocalStorage', todos, angular.toJson(todos));
      $window.localStorage.setItem(localStorageTodosKey, angular.toJson(todos));
    };

    var init = function(){
      getFromLocalStorage();

      if (!todos){
        todos = [];
        saveToLocalStorage();
      }

      $log.log("$window.localStorage['todos']", $window.localStorage.getItem(localStorageTodosKey));
    };

    init();

    return {
      getTodos : function(){
        getFromLocalStorage();
        return todos;
      },

      addTodo : function(options){
        $log.log('addTodo', options);
        var newTodo = {
          id : Date.now().toString() + Math.random(),
          title : options.title,
          completed : false
        };

        todos.push(newTodo);

        saveToLocalStorage();

        return newTodo;
      },

      removeTodoById : function(id){
        todos = todos.filter(function(item){
          return item.id !== id;
        });
        saveToLocalStorage();
      },

      saveTodos : function(){
        saveToLocalStorage();
      }
    };
  }]);
