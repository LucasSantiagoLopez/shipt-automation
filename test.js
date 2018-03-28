describe('Login Page', function () {

  const validEmail = 'validUser@shipt.com';
  const validPass = 'Val1dP4s$w0rd';
  const invalidEmail = 'invalidUsername.com';
  const invalidPass = '!@#$%^&*()_+';
  browser.ignoreSynchronization=true;

  var emailField = element(by.model('login.username'));
  var passwordField = element(by.model('login.password'));
  var submitButton = element(by.id('start_shopping_login_button'));
  var logIn = element(by.css(".button-secondary"));
  var errorMessage = element(by.css(".contents > div:nth-child(1)"));

  function completeFields (email, password) {
      emailField.clear().sendKeys(email);
      passwordField.clear().sendKeys(password);
  }

  function login (email, password) {
      completeFields(email, password);
      submitButton.click();
  }

  it ("Go to the Home page ", function() {
      browser.get("http://shipt.com/");
      console.log("Home Page Open succesffully");
  });

  it ("Go to Login Page ", function() {
      browser.sleep(500);
      logIn.click();
      console.log("From the Home Page go to the Login Page succesffully");
  });

  it('should let you login with valid credentials', function () {
      browser.sleep(500);
      login(validEmail, validPass);
      expect(browser.getCurrentUrl()).not.toBe("https://shop.shipt.com/#/app/home");
      console.log("Test valid log in scenario run success");
  });

  it('should error on a missing email', function () {
      browser.sleep(500);
      login('', validPass);
      expect(errorMessage.isPresent()).toBeTruthy();
      console.log("Test invalid log in, missing email run success");
  });

  it('should error on a invalid email', function () {
      browser.sleep(500);
      login(invalidEmail, validPass);
      console.log("Test Invalid log in, invalid email run success");
  });

  it('should error on missing password', function () {
      browser.sleep(500);
      login(validEmail, '');
      console.log("Test invalid log in, missing password run success");
  });


  it('should error on a invalid password', function () {
      browser.sleep(500);
      login(validEmail, invalidPass);
      expect(errorMessage.isPresent()).toBeTruthy();
      console.log("Test invalid log in, invalid password run success");
  });

  it('should restore the page to default on refresh', function () {
      browser.sleep(500);
      completeFields(validEmail, validPass);
      browser.refresh();
      expect(emailField.getText()).toEqual("");
      expect(passwordField.getText()).toEqual("");
      console.log("Test page refresh, clear fields run success");
  });

});
