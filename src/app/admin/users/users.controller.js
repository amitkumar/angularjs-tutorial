'use strict';

angular.module('angularjsTutorial')
.controller('AdminUsersCtrl', ['$scope', '$log', '$window', 'UserService',
  function ($scope, $log, $window, UserService) {
    $log.log('AdminUsersCtrl instantiated');

    var self = this;

    self.uiGridOptions = {
      enableCellEditOnFocus : true,
      columnDefs : [
        {
          name : '$id',
          displayName : 'User Id',
          enableCellEdit: false
        },
        {
          name : 'profile.email',
          enableCellEdit: false
        }
      ]
    };


    UserService.get()
    .then(function(users){
      self.uiGridOptions.data = self.users = users;
    })
    .catch(function(err){
      $log.log('AdminUsersCtrl error on UserService.get', err);
    });
  }
]);
