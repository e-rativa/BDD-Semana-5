let count = 0;
describe('Escenario 17: Login - Activar sitio privado', function () {
    it('Cambio de estado privado', function () {
        cy.visit('https://3d9074f0bcbd.ngrok.io/ghost/#/signin');
        cy.screenshot('Escenario ActivarSitioPrivado-'+(count++)+'');
        cy.wait(1000);
        Login();
        cy.wait(1000);
        cy.visit('https://3d9074f0bcbd.ngrok.io/ghost/#/settings/general');
        cy.screenshot('Escenario ActivarSitioPrivado-'+(count++)+'');
        cy.wait(1000);
        cambiarEstadoPrivateSiteOn();
        cy.wait(1000);
        cy.visit('https://3d9074f0bcbd.ngrok.io/ghost/#/site');
        cy.screenshot('Escenario ActivarSitioPrivado-'+(count++)+'');
        cy.wait(1000);
        cy.visit('https://3d9074f0bcbd.ngrok.io/ghost/#/settings/general');
        cy.screenshot('Escenario ActivarSitioPrivado-'+(count++)+'');
        cy.wait(1000);
        cambiarEstadoPrivateSiteOff();
        cy.wait(1000);
        cy.visit('https://3d9074f0bcbd.ngrok.io/ghost/#/site');
        cy.screenshot('Escenario ActivarSitioPrivado-'+(count++)+'');
        cy.wait(1000);
    });
});

function Login() {
    cy.get('[id=ember8]').type('pruebasmiso4103@gmail.com', { force: true });
    cy.screenshot('Escenario ActivarSitioPrivado-'+(count++)+'');
    cy.wait(1000);
    cy.get('[id=ember10]').type('qwerty1234', { force: true });
    cy.screenshot('Escenario ActivarSitioPrivado-'+(count++)+'');
    cy.wait(1000);
    cy.get('[id=ember12]').click({ force: true });
    cy.screenshot('Escenario ActivarSitioPrivado-'+(count++)+'');
    cy.wait(1000);
}

function cambiarEstadoPrivateSiteOn() {
    cy.get('.input-toggle-component').click();
    cy.screenshot('Escenario ActivarSitioPrivado-'+(count++)+'');
    cy.wait(1000);
    cy.get('.view-actions').click();
    cy.screenshot('Escenario ActivarSitioPrivado-'+(count++)+'');
    cy.wait(1000);
}

function cambiarEstadoPrivateSiteOff() {
    cy.get('.input-toggle-component').click();
    cy.screenshot('Escenario ActivarSitioPrivado-'+(count++)+'');
    cy.wait(1000);
    cy.get('.view-actions').click();
    cy.screenshot('Escenario ActivarSitioPrivado-'+(count++)+'');
    cy.wait(1000);
}