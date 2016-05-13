'use strict';

module.exports = {
    'User Logs in and got to Checkin Page': (browser) => {
        const loginPage = browser.page.loginPage();
        const lastMileCheckinPage = browser.page.lastMileCheckinPage();

        loginPage
            .navigate()
            .login('milestone2', 'milestone2');

        lastMileCheckinPage.navigate();

        lastMileCheckinPage.expect.element('.page-header').text.to.equal('LMD Runsheet Checkin');
    },

    'Choose a runsheet': (browser) => {
        const lastMileCheckinPage = browser.page.lastMileCheckinPage(),
              selectSelector = '.checkin-runsheets-list',
              detailSelector = '.checkin-runsheet-details';
            
        lastMileCheckinPage
            .waitForElementPresent(selectSelector)
            .click(selectSelector, () => {
                browser.elements('css selector', '.checkin-runsheets-list option', (result) => {
                    result.value.forEach((element, index) => {
                        browser.elementIdClick(element.ELEMENT); 
                        
                        if (index !== 0) {
                            lastMileCheckinPage.expect.element(detailSelector).to.be.present;
                        } else {
                            browser.elementIdText(element.ELEMENT, (textResult) => {
                                browser.assert.equal(textResult.value, 'Runsheet');
                            }); 
                        }
                        
                        browser.pause(1000); 
                    });
                });
            });
            //.click('.checkin-runsheets-list option[value="50"]');
            
            
        browser.end();
    }
};
