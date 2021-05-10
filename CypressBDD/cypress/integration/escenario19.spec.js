describe('Escenario 19: Login-Habilitar miembros', function () {
    it('Habilitar miembros', function () {
        cy.visit('http://localhost:2368/ghost/#/signin');
        Login();
        cy.wait(1000);
        cy.visit('http://localhost:2368/ghost/#/settings/labs');
        cy.wait(2000);
        habilitarMembers();
    });
});

function Login() {
    cy.get('[id=ember8]').type('diegofgarciao@gmail.com', { force: true });
    cy.get('[id=ember10]').type('qwert12345', { force: true });
    cy.wait(500);
    cy.get('[id=ember12]').click({ force: true });
}

function habilitarMembers() {
    cy.get('.input-toggle-component').then($toggles =>{
        cy.get($toggles.get(0)).click({ force: true });
    });
    cy.wait(500);
    cy.visit('http://localhost:2368/ghost/#/members');
}