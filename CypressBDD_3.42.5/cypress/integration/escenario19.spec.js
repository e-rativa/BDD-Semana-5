let count = 0;
describe('Escenario 19: Login-Habilitar miembros', function () {
    it('Habilitar miembros', function () {
        cy.visit('https://3d9074f0bcbd.ngrok.io/ghost/#/signin');
        cy.screenshot('Escenario HabilitarMiembros-'+(count++)+'');
        cy.wait(1000);
        Login();
        cy.wait(1000);
        cy.visit('https://3d9074f0bcbd.ngrok.io/ghost/#/settings/labs');
        cy.screenshot('Escenario HabilitarMiembros-'+(count++)+'');
        cy.wait(2000);
        habilitarMembers();
        cy.wait(1000);
    });
});

function Login() {
    cy.get('[id=ember8]').type('pruebasmiso4103@gmail.com', { force: true });
    cy.screenshot('Escenario HabilitarMiembros-'+(count++)+'');
    cy.wait(1000);
    cy.get('[id=ember10]').type('qwerty1234', { force: true });
    cy.screenshot('Escenario HabilitarMiembros-'+(count++)+'');
    cy.wait(1000);
    cy.get('[id=ember12]').click({ force: true });
    cy.screenshot('Escenario HabilitarMiembros-'+(count++)+'');
    cy.wait(1000);
}

function habilitarMembers() {
    cy.get('.input-toggle-component').then($toggles => {
        cy.get($toggles.get(0)).click({ force: true });
    });
    cy.screenshot('Escenario HabilitarMiembros-'+(count++)+'');
    cy.wait(1000);
    cy.visit('https://3d9074f0bcbd.ngrok.io/ghost/#/members');
    cy.screenshot('Escenario HabilitarMiembros-'+(count++)+'');
    cy.wait(1000);
}