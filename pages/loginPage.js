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
  url: 'https://lms-stag-sg.lzd.co/login',
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
