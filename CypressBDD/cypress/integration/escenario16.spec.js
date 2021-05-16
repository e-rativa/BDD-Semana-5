let count = 0;
describe('Escenario 16: Login - Editar información general', function () {
    it('Cambio de titulo site', function () {
        cy.visit('https://e61b4ef2fb35.ngrok.io/ghost/#/signin');
        cy.screenshot('Escenario EditarInformaciónGeneral-'+(count++)+'');
        cy.wait(1000);
        Login();
        cy.wait(1000);
        cy.visit('https://e61b4ef2fb35.ngrok.io/ghost/#/settings/general');
        cy.wait(1000);
        cy.screenshot('Escenario EditarInformaciónGeneral-'+(count++)+'');
        cy.wait(1000);
        cambiarTituloSite();
        cy.wait(1000);
    });
});

function Login() {
    cy.get('[id=ember8]').type('pruebasmiso4103@gmail.com', { force: true });
    cy.screenshot('Escenario EditarInformaciónGeneral-'+(count++)+'');
    cy.wait(1000);
    cy.get('[id=ember10]').type('qwerty1234', { force: true });
    cy.screenshot('Escenario EditarInformaciónGeneral-'+(count++)+'');
    cy.wait(1000);
    cy.wait(500);
    cy.get('[id=ember12]').click({ force: true });
    cy.screenshot('Escenario EditarInformaciónGeneral-'+(count++)+'');
    cy.wait(1000);
}

function cambiarTituloSite() {
    const titulo = 'Titulo Grupo';
    cy.get('button').then($ghsettact => {
        cy.get($ghsettact.get(0)).click({ force: true })
    });
    cy.screenshot('Escenario EditarInformaciónGeneral-'+(count++)+'');
    cy.wait(4000);
    cy.get('.view-actions').click({ force: true });
    cy.screenshot('Escenario EditarInformaciónGeneral-'+(count++)+'');
    cy.wait(4000);
}