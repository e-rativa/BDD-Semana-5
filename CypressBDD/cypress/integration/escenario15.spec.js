let pageObject = require('../../pageObjectsClass');

describe('Escenario 15: Cambio correcto de pass', () => {
    it('Login y cambio correcto de pass', () => {
        pageObject.login();
        cy.wait(4000);
        cy.visit(pageObject.url + '/#/staff');
        cy.wait(4000);
        pageObject.changePasswordOk('Ghost');
        
    });
});