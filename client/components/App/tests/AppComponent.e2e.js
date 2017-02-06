describe('app login flow', function() {

  var homeUrl;

  it('sets up initial variables', function() {
    // Can be considered to be beforeAll, which Protractor lacks.
    browser.get('/login');

    browser.get('/');
    homeUrl = browser.getCurrentUrl();
  });

  it('stay in Crm page', function (){
    browser.get('/');
    expect(browser.getCurrentUrl()).toBe(homeUrl);
  });

  //it('registers a user and redirects to home', function() {
  //    browser.get('/register');
  //    name = 'user' + Math.floor(Math.random() * 100000);
  //    $('#email').sendKeys(name + '@test.com');
  //    $('#email2').sendKeys(name + '@test.com');
  //    $('#username').sendKeys(name);
  //    $('#firstName').sendKeys('Test');
  //    $('#lastName').sendKeys('User');
  //    $('#passwd1').sendKeys('Secret123');
  //    $('#passwd2').sendKeys('Secret123');
  //    $('button').click();
  //    expect(browser.getCurrentUrl()).toBe(homeUrl);
  //});
  //
  //it('logs in correctly', function() {
  //    browser.get('/login');
  //    $('#username').sendKeys(name);
  //    $('#passwd').sendKeys('Secret123');
  //    $('button').click();
  //    expect(browser.getCurrentUrl()).toBe(homeUrl);
  //});
});