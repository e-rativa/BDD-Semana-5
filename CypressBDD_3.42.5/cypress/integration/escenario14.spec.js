let pageObject = require('../../pageObjectsClass');

describe('Escenario 14: Cambio fallido de pass', () => {
    it('Login y actualizacion fallida de pass', () => {
        pageObject.login();
        cy.wait(4000);
        cy.visit(pageObject.url + '/#/staff');
        cy.wait(4000);
        pageObject.takeScreenshot();
        pageObject.changePasswordDifferent('Ghost');
        
    });
});