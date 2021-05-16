let id=1;
describe('Login-Crear post- publicar post con url y feature', function () {

    const titulo = 'Titulo' + getRandomInt(0, 1000000);
    it('crearPost', function () {
        cy.visit('https://3d9074f0bcbd.ngrok.io/ghost/#/signin');
        screenShot('CrearPost',true);
        probarLoginDatosCorrectos();
        screenShot('CrearPost',false);
        cy.visit('https://3d9074f0bcbd.ngrok.io/ghost/#/editor/post');
        screenShot('CrearPost',false);
        cy.wait(2000);
        llenarTitulo(titulo);
        screenShot('CrearPost',false);
        cy.wait(2000);
        llenarContenido();
        screenShot('CrearPost',false);
        cy.wait(2000);

    });
    it('Publicar post con url y feature', function () {
        cy.visit('https://3d9074f0bcbd.ngrok.io/ghost/#/signin');
        screenShot('CrearPostURLFeature',true);
        probarLoginDatosCorrectos();
        screenShot('CrearPostURLFeature',false);
        cy.wait(1000);
        cy.visit('https://3d9074f0bcbd.ngrok.io/ghost/#/posts');
        screenShot('CrearPostURLFeature',false);
        abrirPost(titulo);
        screenShot('CrearPostURLFeature',false);
        cy.wait(4000);
        agregarUrlFeature();
        screenShot('CrearPostURLFeature',false);
        cy.wait(1000);
        publicarPost();
        screenShot('CrearPostURLFeature',false);
        cy.wait(2000);
    });

});

function publicarPost() {
    cy.get('.gh-publishmenu-trigger').click();
    cy.wait(500);
    cy.get('.gh-publishmenu-button').click();
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}
function agregarUrlFeature() {
    cy.get('.post-settings').click();
    cy.wait(500);
    cy.get('[id=url]').type('Post', { force: true });
    cy.wait(500);
    cy.get('.input-toggle-component').click();
    cy.wait(500);
    cy.get('.close').click();
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
        cy.get('a.blue.link.fw4.flex.items-center.ember-view').click()
}

function screenShot(step,restart){
    if(restart){
        id=1;
    }
    cy.wait(2000);
    cy.screenshot('Escenario5-'+step+id);
    id++;
}