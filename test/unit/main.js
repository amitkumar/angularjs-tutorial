'use strict';

describe('controllers', function(){
  beforeEach(module('angularjsTutorial'));

  beforeEach(inject(function($rootScope) {
  }));

  it('should define more than 5 awesome things', inject(function($controller) {
    var mainCtrl = $controller('MainCtrl', {});

    expect(angular.isArray(mainCtrl.awesomeThings)).toBeTruthy();
    expect(mainCtrl.awesomeThings.length > 5).toBeTruthy();
  }));



});
