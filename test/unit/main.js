'use strict';

describe('controllers', function(){
  var scope;
  beforeEach(module('angularjsTutorial'));

  beforeEach(inject(function($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should define a todos array', inject(function($controller) {
    var mainCtrl = $controller('MainCtrl', {
      $scope : scope
    });

    expect(angular.isArray(mainCtrl.todos)).toBeTruthy();
  }));
});
