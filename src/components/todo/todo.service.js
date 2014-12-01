'use strict';

angular.module('angularjsTutorial')
  .factory('TodoService', ['$window', function ($window) {
    console.log('TodoService instantiated');

    var todos = [];

    console.log("$window.localStorage['todos']", $window.localStorage['todos']);

    return {

      getTodos : function(){
        return todos;
      },

      addTodo : function(options){
        var newTodo = {
          title : options.title,
          completed : false
        };

        todos.push(newTodo);

        return newTodo;
      },


      removeTodoByReference : function(todo){
        todos = todos.filter(function(item){
          return item !== todo;
        });
      }
    };
  }]);
