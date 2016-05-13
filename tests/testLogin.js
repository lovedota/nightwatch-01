// module.exports = {
//     'User Logs in': (client) => {
//         const loginPage = client.page.loginPage();
//         const instancesPage = client.page.instancesPage();

//         loginPage
//             .navigate()
//             .login('admin', 'admin');

//         instancesPage
//             .expect.element('@instancesListDescription')
//             .to.have.attribute('src', '/images/5ccd78d_index_logo_1.png').after(3000);
                                            
//         client.end();
//     }
// };
