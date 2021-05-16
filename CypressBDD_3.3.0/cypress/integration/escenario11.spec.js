let pageObject = require('../../pageObjectsClass');

describe('Escenario 11: Creacion de Usuarios', () => {
    it('Login y creacion de usuarios', () => {
        pageObject.clearStepNumber();
        pageObject.login();
        cy.wait(3000);
        cy.visit(pageObject.url + '/#/staff');
        cy.wait(3000);
        pageObject.takeScreenshot();
        pageObject.createNewUser('admin@test.com', 'Administrator');
        pageObject.createNewUser('editor@test.com', 'Editor');
        pageObject.createNewUser('contributor@test.com', 'Contributor');
        pageObject.createNewUser('author@test.com', 'Author');
        cy.visit(pageObject.url + '/#/posts');
        cy.wait(3000);
        pageObject.takeScreenshot();
        cy.visit(pageObject.url + '/#/staff');
        cy.wait(3000);
        pageObject.takeScreenshot();
        pageObject.revokeUsers();
    });
});