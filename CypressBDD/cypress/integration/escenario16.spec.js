describe('Escenario 16: Login - Editar información general', function () {
    it('Cambio de titulo site', function () {
        cy.visit('https://894e1cdea8aa.ngrok.io/ghost/#/signin');
        Login();
        cy.wait(1000);
        cy.visit('https://894e1cdea8aa.ngrok.io/ghost/#/settings/general');
        cambiarTituloSite();
        cy.wait(1000);
    });
});

function Login() {
    cy.get('[id=ember8]').type('pruebasmiso4103@gmail.com', { force: true });
    cy.get('[id=ember10]').type('qwerty1234', { force: true });
    cy.wait(500);
    cy.get('[id=ember12]').click({ force: true });
}

function cambiarTituloSite() {
    const titulo = 'Titulo Grupo';
    cy.get('button').then($ghsettact => {
        cy.get($ghsettact.get(0)).click({ force: true })
    });
    cy.wait(1000);
    cy.get('.view-actions').click({ force: true });
    cy.wait(1000);
}