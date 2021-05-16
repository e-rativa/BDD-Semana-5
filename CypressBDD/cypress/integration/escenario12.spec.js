let pageObject = require('../../pageObjectsClass');

describe('Escenario 12: Creacion y revocacion de Usuarios', () => {
    it('Login, creacion de usuarios, revocacion de usuarios', () => {
        pageObject.login();
        cy.wait(3000);
        cy.visit(pageObject.url + '/#/staff');
        cy.wait(3000);
        pageObject.takeScreenshot();
        pageObject.createNewUser('admin@test.com', 'Administrator');
        cy.visit(pageObject.url + '/#/posts');
        cy.wait(3000);
        pageObject.takeScreenshot();
        cy.visit(pageObject.url + '/#/staff');
        cy.wait(3000);
        pageObject.takeScreenshot();
        pageObject.revokeUsers();
    });
});