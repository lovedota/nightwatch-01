const loginCommands = {
  login(email, pass) {
    return this
      .waitForElementVisible('@emailInput')
      .setValue('@emailInput', email)
      .setValue('@passInput', pass)
      .waitForElementVisible('@loginButton')
      .click('@loginButton');
  }
};

module.exports = {
  url: 'http://lms-1400.lms-stag.lzd.co/login',
  commands: [loginCommands],
  elements: {
    emailInput: {
      selector: 'input[type=text]'
    },
    passInput: {
      selector: 'input[type=password]'
    },
    loginButton: {
      selector: 'input[type=submit]'
    }
  }
};
