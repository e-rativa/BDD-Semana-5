describe('Escenario 20: Login-logout', function () {
    it('LogOut', function () {
        cy.visit('http://localhost:2368/ghost/#/signin');
        Login();
        cy.wait(1000);
        LogOut();
        cy.wait(1000);
        cy.visit('http://localhost:2368/ghost/#/signout');
    });
});

function Login() {
    cy.get('[id=ember8]').type('diegofgarciao@gmail.com', { force: true });
    cy.get('[id=ember10]').type('qwert12345', { force: true });
    cy.wait(500);
    cy.get('[id=ember12]').click({ force: true });
}

function LogOut() {
    cy.get('.gh-nav-bottom').click({ force: true });
}