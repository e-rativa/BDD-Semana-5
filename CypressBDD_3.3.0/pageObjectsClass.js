let functions = {}

functions.url = 'https://e61b4ef2fb35.ngrok.io/ghost'; // Ghost 3.3.0
// functions.url = 'https://3d9074f0bcbd.ngrok.io/ghost'; // Ghost 3.42.5
functions.stepNumber = 1;

functions.login = () => {
    cy.visit(functions.url + '/#/signin');
    functions.takeScreenshot();
    cy.get('[id=ember8]').type('pruebasmiso4103@gmail.com', { force: true });
    functions.takeScreenshot();
    cy.get('[id=ember10]').type('qwerty1234', { force: true });
    functions.takeScreenshot();
    cy.wait(500);
    cy.get('[id=ember12]').click({ force: true });
    functions.takeScreenshot();
}

functions.createNewUser = (email, role) => {
    cy.get(".gh-btn").contains('Invite people').click({ force: true });
    cy.wait(1000);
    functions.takeScreenshot();
    cy.get('[id=new-user-email]').type(email, { force: true });
    functions.takeScreenshot();
    cy.get('[id=new-user-role]').select(role);
    functions.takeScreenshot();
    cy.wait(500);
    cy.get(".gh-btn.ember-view").click({ force: true });
    functions.takeScreenshot();
    cy.wait(1500);
}

functions.revokeUsers = () => {
    cy.get(".apps-configured-action.red-hover").click({ force: true , multiple: true});
    cy.wait(1500);
    functions.takeScreenshot();
}

functions.updateNameRoleUser = (oldName, name, role) => {
    cy.get(".apps-card-app").contains(oldName).click({ force: true });
    cy.wait(1000);
    functions.takeScreenshot();
    cy.get('[id=user-name]').clear({force: true});
    functions.takeScreenshot();
    cy.get('[id=user-name]').type(name, { force: true });
    functions.takeScreenshot();
    cy.get('[id=new-user-role]').select(role, {force: true});
    functions.takeScreenshot();
    cy.get(".gh-btn.gh-btn-blue.ember-view").click({ force: true });
    cy.wait(1500);
    functions.takeScreenshot();
    cy.visit(functions.url + '/#/staff');
    cy.wait(1500);
    functions.takeScreenshot();
}

functions.changePasswordDifferent = (name) => {
    cy.get(".apps-card-app").contains(name).click({ force: true });
    cy.wait(1000);
    functions.takeScreenshot();
    cy.get('[id=user-password-new]').type('test123456', { force: true });
    functions.takeScreenshot();
    cy.get('[id=user-new-password-verification]').scrollIntoView();
    functions.takeScreenshot();
    cy.get('[id=user-new-password-verification]').type('test123457', { force: true });
    functions.takeScreenshot();
    cy.get(".gh-btn.gh-btn-red.ember-view").click({ force: true });
    cy.wait(1500);
    functions.takeScreenshot();
    cy.get('.response').contains('Your new passwords do not match').should('be.visible');
    functions.takeScreenshot();
    cy.visit(functions.url + '/#/staff');
    cy.wait(1500);
    functions.takeScreenshot();
     
}


functions.changePasswordOk = (name) => {
    cy.get(".apps-card-app").contains(name).click({ force: true });
    cy.wait(1000);
    functions.takeScreenshot();
    cy.get('body').then(($body) => {
        if ($body.text().includes('Old Password')) {
            cy.get('[id=user-password-old]').type('test123456', { force: true });
            functions.takeScreenshot();
        }
      })
    cy.get('[id=user-password-new]').type('test123456', { force: true });
    functions.takeScreenshot();
    cy.get('[id=user-new-password-verification]').scrollIntoView();
    functions.takeScreenshot();
    cy.get('[id=user-new-password-verification]').type('test123456', { force: true });
    functions.takeScreenshot();
    cy.get(".gh-btn.gh-btn-red.ember-view").click({ force: true });
    cy.wait(1500);
    functions.takeScreenshot();
    cy.get('.gh-notification.gh-notification-passive.gh-notification-green.ember-view').contains('Password updated').should('be.visible');
    functions.takeScreenshot();
    cy.visit(functions.url + '/#/staff');
    cy.wait(1500);
    functions.takeScreenshot();
     
}

functions.clearStepNumber = () => {
    functions.stepNumber = 1;
}

functions.takeScreenshot = () => {
    cy.wait(1000);
    cy.screenshot('Step_' + functions.stepNumber);
    functions.stepNumber = functions.stepNumber + 1;
}

module.exports = functions;