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

  it('should have exactly 9 things', inject(function($controller) {
    var ctrl = $controller('MainCtrl', {});

    expect(ctrl.awesomeThings.length === 9).toBeTruthy();
  }));

  it('should display items in expected positions', inject(function($controller) {
    var ctrl = $controller('MainCtrl', {});

    expect(ctrl.awesomeThings[0].key).toMatch('angular');
  }));

  it('should have all expected properties on each item', inject(function($controller) {
    var ctrl = $controller('MainCtrl', {});

    ctrl.awesomeThings.forEach(function(item){
      expect(item.key).toBeDefined();
      expect(item.title).toBeDefined();
      expect(item.url).toBeDefined();
      expect(item.description).toBeDefined();
      expect(item.logo).toBeDefined();
    });

  }));

});
