
module.exports = {
  url: 'http://lms-1400.lms-stag.lzd.co',
  commands: [],
  elements: {
    requestsMenuLink: {
       selector: '//*[@id="navbar-example"]/div/div[2]/ul[1]/li[1]/a',
       locateStrategy: 'xpath' 
    },
    packagesMenuLink: {
      selector: '//*[@id="navbar-example"]/div/div[2]/ul[1]/li[2]/a',
      locateStrategy: 'xpath'  
    },
    administrationMenuLink: {
      selector: '//*[@id="navbar-example"]/div/div[2]/ul[1]/li[5]/a',
      locateStrategy: 'xpath'  
    },
   
  }
};
