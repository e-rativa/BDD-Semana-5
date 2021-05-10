describe('Escenario 19: Login-Habilitar miembros', function () {
    it('Habilitar miembros', function () {
        cy.visit('https://3b429be77858.ngrok.io/ghost/#/signin');
        Login();
        cy.wait(1000);
        cy.visit('https://3b429be77858.ngrok.io/ghost/#/settings/labs');
        cy.wait(2000);
        habilitarMembers();
        cy.wait(1000);
    });
});

function Login() {
    cy.get('[id=ember8]').type('pruebasmiso4103@gmail.com', { force: true });
    cy.get('[id=ember10]').type('qwerty1234', { force: true });
    cy.wait(500);
    cy.get('[id=ember12]').click({ force: true });
}

function habilitarMembers() {
    cy.get('.input-toggle-component').then($toggles => {
        cy.get($toggles.get(0)).click({ force: true });
    });
    cy.wait(1000);
    cy.visit('https://3b429be77858.ngrok.io/ghost/#/members');
}