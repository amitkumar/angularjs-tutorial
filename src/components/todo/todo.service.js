'use strict';

angular.module('angularjsTutorial')
  .factory('TodoService', ['$window', '$log', '$q', '$timeout', function ($window, $log, $q, $timeout) {

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
        var deferred = $q.defer();
        console.log('in getTodos');
        $timeout(function() {
          console.log('inside getTodos timeout');
          $log.log('resolving getTodos promise');
          deferred.resolve(getFromLocalStorage());
        }, 50);

        $log.log('returning getTodos deferred.promise');

        console.log('inside getTodos, returning promise');
        return deferred.promise;
      },

      addTodo : function(options){
        var deferred = $q.defer();

        $timeout(function() {
          $log.log('resolving addTodo promise');

          var newTodo = {
            id : Date.now().toString() + Math.random(),
            title : options.title,
            completed : false
          };

          todos.push(newTodo);

          saveToLocalStorage();

          deferred.resolve(newTodo);
        }, 50);

        $log.log('returning addTodo deferred.promise');

        return deferred.promise;

      },

      removeTodoById : function(id){
        var deferred = $q.defer();

        $timeout(function() {
          $log.log('resolving removeTodoById promise');

          todos = todos.filter(function(item){
            return item.id !== id;
          });
          saveToLocalStorage();

          deferred.resolve();
        }, 50);

        $log.log('returning removeTodoById deferred.promise');

        return deferred.promise;
      },

      saveTodos : function(){
        saveToLocalStorage();
      }
    };
  }]);
