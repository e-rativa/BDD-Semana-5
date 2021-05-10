describe('Escenario 18: Login - Cambiar diseño de página web', function () {
    it('Cambio titulo en design', function () {
        cy.visit('http://localhost:2368/ghost/#/signin');
        Login();
        cy.wait(1000);
        cy.visit('http://localhost:2368/ghost/#/settings/design');
        cambiarDesignNameSite();
        cy.wait(1000);
        cy.visit('http://localhost:2368/ghost/#/site');
    });
});

function Login() {
    cy.get('[id=ember8]').type('diegofgarciao@gmail.com', { force: true });
    cy.get('[id=ember10]').type('qwert12345', { force: true });
    cy.wait(500);
    cy.get('[id=ember12]').click({ force: true });
}

function cambiarDesignNameSite() {
     cy.get('input').then($emberTexts => {
         cy.wrap($emberTexts.get(0)).type('Titulo Grupo', { force: true });
     });
    cy.wait(500);
    cy.get('.view-actions').click();
    cy.wait(500);
}