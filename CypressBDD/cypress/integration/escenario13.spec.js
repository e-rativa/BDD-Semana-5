let pageObject = require('../../pageObjectsClass');

describe('Escenario 13: actualizacion de Usuarios', () => {
    it('Login y actualizacion de usuarios', () => {
        pageObject.login();
        cy.wait(4000);
        cy.visit(pageObject.url + '/#/staff');
        cy.wait(4000);
        pageObject.updateNameRoleUser('Ghost', 'Ghost Editado', 'Administrator');
        pageObject.updateNameRoleUser('Ghost', 'Ghost', 'Author');
        
    });
});