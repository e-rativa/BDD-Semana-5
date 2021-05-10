
describe('Escenario 2: Recuperar contraseña', function () {
    it('recuperar contraseña sin datos', function () {
        cy.visit('https://e61b4ef2fb35.ngrok.io/ghost/#/signin');
        probarRecuperacionContrasenaSinDatos();
        cy.wait(1000);
    });
    it('Login datos erróneos', function () {
        cy.visit('https://e61b4ef2fb35.ngrok.io/ghost/#/signin');
        probarRecuperacionContrasenaDatosErroneos();
        cy.wait(1000);
    });
    it('Login datos correctos', function () {
        cy.visit('https://e61b4ef2fb35.ngrok.io/ghost/#/signin');
        probarRecuperacionContrasenaDatosCorrectos();
        cy.wait(1000);
    });
});

function probarRecuperacionContrasenaSinDatos() {
    cy.get('[id=ember11]').click({ force: true });
}

function probarRecuperacionContrasenaDatosErroneos() {
    cy.get('[id=ember8]').type('error@hotmail.com', { force: true });
    cy.wait(500);
    cy.get('[id=ember11]').click({ force: true });
}

function probarRecuperacionContrasenaDatosCorrectos() {
    cy.get('[id=ember8]').type('pruebasmiso4103@gmail.com', { force: true });
    cy.wait(500);
    cy.get('[id=ember11]').click({ force: true });
}

