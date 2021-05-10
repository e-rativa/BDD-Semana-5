Feature: Login - Creacion de usuario - Revocar usuario

  @user1 @web
  Scenario: Escenario 12 - Pruebas de usuarios
    Given I navigate to page "https://894e1cdea8aa.ngrok.io/ghost/"
    Then I enter "pruebasmiso4103@gmail.com" into input field having css selector ".email.ember-text-field"
    Then I enter "qwerty1234" into input field having css selector ".password.ember-text-field"
    Then I click on element having css selector ".login.gh-btn.gh-btn-blue"   
    Given I navigate to page "https://894e1cdea8aa.ngrok.io/ghost/#/staff"
    Then I click on element having css selector ".gh-btn"
    Then I enter "admin@test.com" into input field having id "new-user-email"
    Then I select option with value "60984528d22e39939d5896f4" for dropdown with id "new-user-role"
    Then I click on element having css selector ".gh-btn.ember-view"
    
    Given I navigate to page "https://894e1cdea8aa.ngrok.io/ghost/#/posts"
    Given I navigate to page "https://894e1cdea8aa.ngrok.io/ghost/#/staff"
    Then I click on element having css selector ".apps-configured-action.red-hover"
    
    
    

