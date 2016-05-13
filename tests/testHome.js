// 'use strict';

// module.exports = {
//     'User Logs in and Go to Home Page': (client) => {
//         const loginPage = client.page.loginPage();
//         const homePage = client.page.homePage();

//         loginPage
//             .navigate()
//             .login('admin', 'admin');

//          homePage
//             .navigate()
//             .click('@requestsMenuLink', () => {   
//                 let requestManagementSelector = 'a[href="/requests/list"]',
//                     frozenRequestsSelector = 'a[href="/requests/frozen';
                    
//                 client.pause(2000);
                 
//                 homePage.expect.element(requestManagementSelector).to.be.visible;                     
//                 homePage.expect.element(requestManagementSelector).text.to.equal('Request Management');
                       
//                 homePage.expect.element(frozenRequestsSelector).to.be.visible;                     
//                 homePage.expect.element(frozenRequestsSelector).text.to.equal('Frozen requests');
//             })
//             .click('@packagesMenuLink', () => {   
//                 let lostPackagesSelector = 'a[href="/packages/lost"]';
                    
//                 client.pause(2000);
                 
//                 homePage.expect.element(lostPackagesSelector).to.be.visible;                     
//                 homePage.expect.element(lostPackagesSelector).text.to.equal('Lost Packages');      
//             })
//             .click('@administrationMenuLink', () => {   
//                 let userRolesSelector = 'a[href="/user-groups/list"]',
//                     userAdministrationSelector = 'a[href="/users/list"]',
//                     settingsSelector = 'a[href="/settings"]';
                    
//                 client.pause(2000);
                 
//                 homePage.expect.element(userRolesSelector).to.be.visible;                     
//                 homePage.expect.element(userRolesSelector).text.to.equal('User Roles');      
                
//                 homePage.expect.element(userAdministrationSelector).to.be.visible;                     
//                 homePage.expect.element(userAdministrationSelector).text.to.equal('User Administration');      
                
//                 homePage.expect.element(settingsSelector).to.be.visible;                     
//                 homePage.expect.element(settingsSelector).text.to.equal('Settings');      
//             });
                                  
//         client.end();
//     }
// };
