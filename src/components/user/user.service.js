'use strict';

angular.module('angularjsTutorial')
  .factory('UserService', ['$window', '$log', '$q', '$timeout', '$firebase', 'firebaseUrl', function ($window, $log, $q, $timeout, $firebase, firebaseUrl) {
    $log.log('UserService instantiated');

    return {
      get : function(userId){
        var deferred = $q.defer();

        var firebaseReference = new Firebase(firebaseUrl + 'users/' + userId);
        var firebaseSync = $firebase(firebaseReference);

        firebaseSync.$asObject().$loaded().then(function(response){

          $log.log('user loaded', response);

          deferred.resolve(response);
        }).catch(function(err){
          $log.log('Error retrieving user from firebase', err);
        });

        return deferred.promise;
      }
    };
  }]);
