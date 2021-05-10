
describe('Escenario 4: Login-Crear post- publicar post agendado', function () {

    const titulo = 'Titulo' + getRandomInt(0, 1000000);
    it('crearPost', function () {
        cy.visit('https://e61b4ef2fb35.ngrok.io/ghost/#/signin');
        probarLoginDatosCorrectos();
        cy.visit('https://e61b4ef2fb35.ngrok.io/ghost/#/editor/post');
        cy.wait(2000);
        llenarTitulo(titulo);
        cy.wait(2000);
        llenarContenido();
        cy.wait(2000);

    });
    it('Publicar post agendado', function () {
        cy.visit('https://e61b4ef2fb35.ngrok.io/ghost/#/signin');
        probarLoginDatosCorrectos();
        cy.wait(1000);
        cy.visit('https://e61b4ef2fb35.ngrok.io/ghost/#/posts');
        cy.wait(4000);
        abrirPost(titulo);
        cy.wait(1000);
        publicarPostAgendado();
        cy.wait(2000);
    });

});

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}
function publicarPostAgendado() {
    cy.get('.gh-publishmenu-trigger').click();
    cy.wait(500);
    cy.get('.gh-publishmenu-radio-label').contains('Schedule it for later').click();
    cy.wait(500);
    cy.get('.gh-publishmenu-button').click();
}

function abrirPost(titulo) {
    cy.get(".gh-post-list-title").contains(titulo).click({ force: true });

}

function probarLoginDatosCorrectos() {
    cy.get('[id=ember8]').type('pruebasmiso4103@gmail.com', { force: true });
    cy.get('[id=ember10]').type('qwerty1234', { force: true });
    cy.wait(500);
    cy.get('[id=ember12]').click({ force: true });
}

function llenarTitulo(titulo) {
    cy.get('textarea').then($textAreas => {
        cy.wrap($textAreas.get(0)).type(titulo, { force: true });
        cy.wait(1000);
    });

}

function llenarContenido() {

    cy.get('article').find('p')
        .then($textAreas => {
            $textAreas.get(0).innerHTML = 'Contenido post';
        });

}

