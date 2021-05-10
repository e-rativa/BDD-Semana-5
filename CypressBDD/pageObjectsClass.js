let functions = {}

functions.url = 'https://e61b4ef2fb35.ngrok.io/ghost';

functions.login = () => {
    cy.visit(functions.url + '/#/signin');
    cy.get('[id=ember8]').type('pruebasmiso4103@gmail.com', { force: true });
    cy.get('[id=ember10]').type('qwerty1234', { force: true });
    cy.wait(500);
    cy.get('[id=ember12]').click({ force: true });
}

functions.createNewUser = (email, role) => {
    cy.get(".gh-btn").contains('Invite people').click({ force: true });
    cy.wait(1000);
    cy.get('[id=new-user-email]').type(email, { force: true });
    cy.get('[id=new-user-role]').select(role);
    cy.wait(500);
    cy.get(".gh-btn.ember-view").click({ force: true });
    cy.wait(1500);
}

functions.revokeUsers = () => {
    cy.get(".apps-configured-action.red-hover").click({ force: true , multiple: true});
    cy.wait(1500);
}

functions.updateNameRoleUser = (oldName, name, role) => {
    cy.get(".apps-card-app").contains(oldName).click({ force: true });
    cy.wait(1000);
    cy.get('[id=user-name]').clear({force: true});
    cy.get('[id=user-name]').type(name, { force: true });
    cy.get('[id=new-user-role]').select(role, {force: true});
    cy.get(".gh-btn.gh-btn-blue.ember-view").click({ force: true });
    cy.wait(1500);
    cy.visit(functions.url + '/#/staff');
    cy.wait(1500);
}

functions.changePasswordDifferent = (name) => {
    cy.get(".apps-card-app").contains(name).click({ force: true });
    cy.wait(1000);
    cy.get('[id=user-password-new]').type('test123456', { force: true });
    cy.get('[id=user-new-password-verification]').scrollIntoView();
    cy.get('[id=user-new-password-verification]').type('test123457', { force: true });
    cy.get(".gh-btn.gh-btn-red.ember-view").click({ force: true });
    cy.wait(1500);
    cy.get('.response').contains('Your new passwords do not match').should('be.visible');
    cy.visit(functions.url + '/#/staff');
    cy.wait(1500);
     
}


functions.changePasswordOk = (name) => {
    cy.get(".apps-card-app").contains(name).click({ force: true });
    cy.wait(1000);
    cy.get('body').then(($body) => {
        if ($body.text().includes('Old Password')) {
            cy.get('[id=user-password-old]').type('test123456', { force: true });
        }
      })
    cy.get('[id=user-password-new]').type('test123456', { force: true });
    cy.get('[id=user-new-password-verification]').scrollIntoView();
    cy.get('[id=user-new-password-verification]').type('test123456', { force: true });
    cy.get(".gh-btn.gh-btn-red.ember-view").click({ force: true });
    cy.wait(1500);
    cy.get('.gh-notification.gh-notification-passive.gh-notification-green.ember-view').contains('Password updated').should('be.visible');
    cy.visit(functions.url + '/#/staff');
    cy.wait(1500);
     
}

module.exports = functions;