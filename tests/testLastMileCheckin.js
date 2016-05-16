'use strict';

let loginPage,
    lastMileCheckinPage;

function init() {
    loginPage
        .navigate()
        .login('admin', 'admin');

    lastMileCheckinPage
        .navigate();
}

describe('Last Mile Checkin Page', () => {
    before((client, done) => {
        loginPage = client.page.loginPage();
        lastMileCheckinPage = client.page.lastMileCheckinPage();

        done();
    });

    describe('Page Title', () => {
        it('should have correct title', () => {
            loginPage
                .navigate()
                .login('admin', 'admin');

            lastMileCheckinPage
                .navigate();

            lastMileCheckinPage
                .assert.title('LMD Runsheet Checkin - LMS');
        });

        it('should have correct header', () => {
            lastMileCheckinPage
                .expect.element('.page-header').text.to.equal('LMD Runsheet Checkin');
        });
    });

    describe('Runsheet List', () => {
        it('should render placeholder text by default', () => {
            lastMileCheckinPage
                .waitForElementPresent('@runsheetSelect')
                .click('@runsheetSelect')
                .click('option:nth-child(1)');

            lastMileCheckinPage
                .expect
                .element('@runsheetDetails')
                .text.to.equal('Select runsheet for checkin');
        });

        it('should render runsheet details when choosing any runsheet', (client) => {
            lastMileCheckinPage
                .waitForElementPresent('@runsheetSelect')
                .click('@runsheetSelect');

            client.elements(
                'css selector',
                lastMileCheckinPage.elements.runsheetOptions.selector,
                (result) => {
                    result.value.forEach((element, index) => {
                        client.elementIdClick(element.ELEMENT);

                        if (index > 0) {
                            let details = lastMileCheckinPage.section.details;

                            details.expect.element('@scanSection').to.be.visible;
                            details.expect.element('@checkedTableSection').to.be.visible;
                            details.expect.element('@uncheckedTableSection').to.be.visible;
                            details.expect.element('@lostTableSection').to.be.visible;

                            lastMileCheckinPage
                                .expect
                                .element('@runsheetDetails')
                                .not.text.to.equal('Select runsheet for checkin');
                        }

                        client.pause(500);
                    });
                });
        });
    });

    after((client, done) => {
        client.end(() => {
            done();
        });
    });
});
