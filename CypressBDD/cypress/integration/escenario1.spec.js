
describe('Escenario 1: Login', function () {
    it('Login sin datos', function () {
        cy.visit('https://894e1cdea8aa.ngrok.io/ghost/#/signin');
        probarLoginSinDatos();
        cy.wait(1000);
    });
    it('Login datos erróneos', function () {
        cy.visit('https://894e1cdea8aa.ngrok.io/ghost/#/signin');
        probarLoginDatosErroneos();
        cy.wait(1000);
    });
    it('Login datos correctos', function () {
        cy.visit('https://894e1cdea8aa.ngrok.io/ghost/#/signin');
        probarLoginDatosCorrectos();
        cy.wait(1000);
    });
});


function probarLoginSinDatos() {
    cy.get('[id=ember12]').click({ force: true });
}

function probarLoginDatosErroneos() {
    cy.get('[id=ember8]').type('error@hotmail.com', { force: true });
    cy.get('[id=ember10]').type('#########', { force: true });
    cy.wait(500);
    cy.get('[id=ember12]').click({ force: true });
}

function probarLoginDatosCorrectos() {
    cy.get('[id=ember8]').type('pruebasmiso4103@gmail.com', { force: true });
    cy.get('[id=ember10]').type('qwerty1234', { force: true });
    cy.wait(500);
    cy.get('[id=ember12]').click({ force: true });
}




