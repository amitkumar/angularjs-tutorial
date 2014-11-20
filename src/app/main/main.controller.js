'use strict';

angular.module('angularjsTutorial')
  .controller('MainCtrl', function () {
    var self = this;

    self.todos = [];

    self.addTodo = function(options){
      self.todos.push({
        title : options.title,
        completed : false
      });
    };

    self.removeTodo = function(title){
      self.todos = self.todos.filter(function(item){
        return item.title !== title;
      });
    };
  });
