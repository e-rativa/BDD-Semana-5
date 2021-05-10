describe('Escenario 20: Login-logout', function () {
    it('LogOut', function () {
        cy.visit('https://e61b4ef2fb35.ngrok.io/ghost/#/signin');
        Login();
        cy.wait(1000);
        LogOut();
        cy.wait(1000);
        cy.visit('https://e61b4ef2fb35.ngrok.io/ghost/#/signout');
    });
});

function Login() {
    cy.get('[id=ember8]').type('pruebasmiso4103@gmail.com', { force: true });
    cy.get('[id=ember10]').type('qwerty1234', { force: true });
    cy.wait(500);
    cy.get('[id=ember12]').click({ force: true });
}

function LogOut() {
    cy.get('.gh-nav-bottom').click({ force: true });
}