// Unit Tests
// Password Validation Test
describe("isValidPassword", function() {
  it("should return true if both passwords match", function() {
    expect(isValidPassword('password', 'password')).to.equal(true);
  });

  it("should return false if the passwords do not match", function() {
    expect(isValidPassword('bicycle', 'stopwatch')).to.equal(false);
  });
});

// Username Validation Test
describe("isValidUsername", function() {
  it("should return true if the username provided is greater than seven characters", function() {
    expect(isValidUsername('georgewashington')).to.equal(true);
  });

  it("should return false if the username provided is less than seven characters", function() {
    expect(isValidUsername('gwash')).to.equal(false);
  });
});

// Functional Tests
describe('register click', function () {
  const data = [
    { name: 'jennifer', password: 'pickles'},
  ];

  let server;

  beforeEach(function () {
    server = sinon.fakeServer.create();
  });

  afterEach(function () {
    server.restore();
  });

  it('displays a success message after post request', function () {

    server.respondWith('POST', '/api/user', [
      200, { 'Content-Type': 'application/json' }, JSON.stringify(data)
    ]);
    
    $('#username').val('jennifer');
    $('#password1').val('pickles');
    $('#password2').val('pickles');

    $('#register').trigger('click');

    server.respond();

    expect($('#message').text()).to.equal('you have successfully registered');
  });
});