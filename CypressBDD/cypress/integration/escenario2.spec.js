let id=1;
describe('Escenario 2: Recuperar contraseña', function () {
    it('recuperar contraseña sin datos', function () {
        cy.visit('https://e61b4ef2fb35.ngrok.io/ghost/#/signin');
        screenShot('RecuperarContrasenaSinDatos',true);
        probarRecuperacionContrasenaSinDatos();
        screenShot('RecuperarContrasenaSinDatos',false);
        cy.wait(1000);
    });
    it('Recuperar contraseña datos erroneos', function () {
        cy.visit('https://e61b4ef2fb35.ngrok.io/ghost/#/signin');
        screenShot('RecuperarContrasenaDatosErroneos',true);
        probarRecuperacionContrasenaDatosErroneos();
        screenShot('RecuperarContrasenaDatosErroneos',false);
        cy.wait(1000);
    });
    it('Recuperar contraseña datos Correctos', function () {
        cy.visit('https://e61b4ef2fb35.ngrok.io/ghost/#/signin');
        screenShot('RecuperarContrasenaDatosCorrectos',true);
        probarRecuperacionContrasenaDatosCorrectos();
        screenShot('RecuperarContrasenaDatosCorrectos',false);
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

function screenShot(step,restart){
    if(restart){
        id=1;
    }
    cy.wait(2000);
    cy.screenshot('Escenario2-'+step+id);
    id++;
}

