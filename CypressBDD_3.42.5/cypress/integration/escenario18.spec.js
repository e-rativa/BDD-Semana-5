let count = 0;
describe('Escenario 18: Login - Cambiar diseño de página web', function () {
    it('Cambio titulo en design', function () {
        cy.visit('https://3d9074f0bcbd.ngrok.io/ghost/#/signin');
        cy.screenshot('Escenario CambiarDiseñoPaginaWeb-'+(count++)+'');
        cy.wait(1000);
        Login();
        cy.wait(1000);
        cy.visit('https://3d9074f0bcbd.ngrok.io/ghost/#/settings/design');
        cy.screenshot('Escenario CambiarDiseñoPaginaWeb-'+(count++)+'');
        cy.wait(1000);
        cambiarDesignNameSite();
        cy.wait(1000);
        cy.visit('https://3d9074f0bcbd.ngrok.io/ghost/#/site');
        cy.screenshot('Escenario CambiarDiseñoPaginaWeb-'+(count++)+'');
        cy.wait(1000);
    });
});

function Login() {
    cy.get('[id=ember8]').type('pruebasmiso4103@gmail.com', { force: true });
    cy.screenshot('Escenario CambiarDiseñoPaginaWeb-'+(count++)+'');
    cy.wait(1000);
    cy.get('[id=ember10]').type('qwerty1234', { force: true });
    cy.screenshot('Escenario CambiarDiseñoPaginaWeb-'+(count++)+'');
    cy.wait(1000);
    cy.get('[id=ember12]').click({ force: true });
    cy.screenshot('Escenario CambiarDiseñoPaginaWeb-'+(count++)+'');
    cy.wait(1000);
}

function cambiarDesignNameSite() {
    cy.get('input').then($emberTexts => {
        cy.wrap($emberTexts.get(0)).type('Titulo Grupo', { force: true });
    });
    cy.screenshot('Escenario CambiarDiseñoPaginaWeb-'+(count++)+'');
    cy.wait(4000);
    cy.get('.view-actions').click();
    cy.screenshot('Escenario CambiarDiseñoPaginaWeb-'+(count++)+'');
    cy.wait(1000);
}