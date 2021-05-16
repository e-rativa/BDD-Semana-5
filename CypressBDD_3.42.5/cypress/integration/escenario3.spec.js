let id=1;
describe('Escenario 3: Login-Crear post', function () {

    const titulo = 'Titulo' + getRandomInt(0, 1000000);
    it('crearPost', function () {
        cy.visit('https://3d9074f0bcbd.ngrok.io/ghost/#/signin');
        screenShot('CrearPost',true);
        probarLoginDatosCorrectos();
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
    it('Publicar post', function () {
        cy.visit('https://3d9074f0bcbd.ngrok.io/ghost/#/signin');
        screenShot('PublicarPost',true);
        probarLoginDatosCorrectos();
        screenShot('PublicarPost',false);
        cy.wait(2000);
        cy.visit('https://3d9074f0bcbd.ngrok.io/ghost/#/posts');
        screenShot('PublicarPost',false);
        cy.wait(4000);
        abrirPost(titulo);
        screenShot('PublicarPost',false);
        cy.wait(1000);
        publicarPost();
        screenShot('PublicarPost',false);
        cy.wait(2000);
    });

});

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}
function publicarPost() {
    cy.get('.gh-publishmenu-trigger').click();
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

    //cy.get('.koenig-editor__editor').type(".")
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
    cy.screenshot('Escenario3-'+step+id);
    id++;
}

