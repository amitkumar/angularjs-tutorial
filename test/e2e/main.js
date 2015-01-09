'use strict';

describe('The main view', function () {

  beforeEach(function () {
    browser.get('https://localhost:3000');
  });


  describe('when not logged in', function(){
    it('redirects user to login page', function () {
      expect(browser.getCurrentUrl()).toEqual('https://localhost:3000/#/login?redirect=home');
    });
  });


  describe('when logged in', function(){

    beforeEach(function () {
      element(by.model('loginCtrl.email')).sendKeys('test@test.com');
      element(by.model('loginCtrl.password')).sendKeys('test');

      // Submit the form. Could use one of the following:
      // element(by.model('loginCtrl.password')).sendKeys(protractor.Key.ENTER);
      // element(by.model('loginCtrl.password')).submit(); // submit whatever form this element exists on
      // element(by.buttonText('Login')).click();
      element(by.buttonText('Login')).click();

      browser.wait(function() {
          // keeps waiting until the returned promise resolves to true
          return browser.getCurrentUrl().then(function(url){
            if (url === 'https://localhost:3000/#/'){
              return true;
            } else {
              return;
            }
          });
        },
        2000,
        'browser never redirected to home'
      );
    });

    it('shows the home page', function(){
      expect(browser.getCurrentUrl()).toEqual('https://localhost:3000/#/');
    });


  });
});
