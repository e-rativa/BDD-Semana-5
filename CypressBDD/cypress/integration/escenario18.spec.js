describe('Escenario 18: Login - Cambiar diseño de página web', function () {
    it('Cambio titulo en design', function () {
        cy.visit('https://e61b4ef2fb35.ngrok.io/ghost/#/signin');
        Login();
        cy.wait(1000);
        cy.visit('https://e61b4ef2fb35.ngrok.io/ghost/#/settings/design');
        cambiarDesignNameSite();
        cy.wait(1000);
        cy.visit('https://e61b4ef2fb35.ngrok.io/ghost/#/site');
    });
});

function Login() {
    cy.get('[id=ember8]').type('pruebasmiso4103@gmail.com', { force: true });
    cy.get('[id=ember10]').type('qwerty1234', { force: true });
    cy.wait(500);
    cy.get('[id=ember12]').click({ force: true });
}

function cambiarDesignNameSite() {
    cy.get('input').then($emberTexts => {
        cy.wrap($emberTexts.get(0)).type('Titulo Grupo', { force: true });
    });
    cy.wait(4000);
    cy.get('.view-actions').click();
    cy.wait(1000);
}