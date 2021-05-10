describe('Escenario 16: Login - Editar información general', function () {
    it('Cambio de titulo site', function () {
        cy.visit('http://localhost:2368/ghost/#/signin');
        Login();
        cy.wait(1000);
        cy.visit('http://localhost:2368/ghost/#/settings/general');
        cambiarTituloSite();
    });
});

function Login() {
    cy.get('[id=ember8]').type('diegofgarciao@gmail.com', { force: true });
    cy.get('[id=ember10]').type('qwert12345', { force: true });
    cy.wait(500);
    cy.get('[id=ember12]').click({ force: true });
}

function cambiarTituloSite() {
    const titulo = 'Titulo Grupo';
    cy.get('button').then($ghsettact => {
        cy.get($ghsettact.get(0)).click({ force: true })
    });
    cy.wait(500);
    cy.get('.view-actions').click({ force: true });
    cy.wait(500);
}