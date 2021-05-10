describe('Escenario 17: Login - Activar sitio privado', function () {
    it('Cambio de estado privado', function () {
        cy.visit('https://3b429be77858.ngrok.io/ghost/#/signin');
        Login();
        cy.wait(1000);
        cy.visit('https://3b429be77858.ngrok.io/ghost/#/settings/general');
        cambiarEstadoPrivateSiteOn();
        cy.wait(1000);
        cy.visit('https://3b429be77858.ngrok.io/ghost/#/site');
        cy.wait(1000);
        cy.visit('https://3b429be77858.ngrok.io/ghost/#/settings/general');
        cambiarEstadoPrivateSiteOff();
        cy.wait(1000);
        cy.visit('https://3b429be77858.ngrok.io/ghost/#/site');
    });
});

function Login() {
    cy.get('[id=ember8]').type('pruebasmiso4103@gmail.com', { force: true });
    cy.get('[id=ember10]').type('qwerty1234', { force: true });
    cy.wait(500);
    cy.get('[id=ember12]').click({ force: true });
}

function cambiarEstadoPrivateSiteOn() {
    cy.get('.input-toggle-component').click();
    cy.wait(1000);
    cy.get('.view-actions').click();
    cy.wait(1000);
}

function cambiarEstadoPrivateSiteOff() {
    cy.get('.input-toggle-component').click();
    cy.wait(1000);
    cy.get('.view-actions').click();
    cy.wait(1000);
}