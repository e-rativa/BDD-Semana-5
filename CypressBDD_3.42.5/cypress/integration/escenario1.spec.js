
let id=1;
describe('Escenario 1: Login', function () {
    it('Login sin datos', function () {
        cy.visit('https://3d9074f0bcbd.ngrok.io/ghost/#/signin');
        screenShot('LoginSinDatos',true);
        probarLoginSinDatos();
        screenShot('LoginSinDatos',false);
        cy.wait(1000);
    });
    it('Login datos erróneos', function () {
        cy.visit('https://3d9074f0bcbd.ngrok.io/ghost/#/signin');
        screenShot('LoginDatosErroneos',true);
        probarLoginDatosErroneos();
        screenShot('LoginDatosErroneos',false);
        cy.wait(1000);
    });
    it('Login datos correctos', function () {
        cy.visit('https://3d9074f0bcbd.ngrok.io/ghost/#/signin');
        screenShot('LoginDatosCorrectos',true);
        probarLoginDatosCorrectos();
        screenShot('LoginDatosCorrectos',false);
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
    screenShot('LoginDatosCorrectos',false);
    cy.get('[id=ember12]').click({ force: true });
}

function screenShot(step,restart){
    if(restart){
        id=1;
    }
    cy.wait(2000);
    cy.screenshot('Escenario1-'+step+id);
    id++;
}




