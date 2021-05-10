Feature: Login - Creacion de usuario - cambiar contraseñas diferentes

  @user1 @web
  Scenario: Escenario 14 - Pruebas de usuarios
    Given I navigate to page "https://3b429be77858.ngrok.io/ghost/"
    Then I enter "pruebasmiso4103@gmail.com" into input field having css selector ".email.ember-text-field"
    Then I enter "qwerty1234" into input field having css selector ".password.ember-text-field"
    Then I click on element having css selector ".login.gh-btn.gh-btn-blue"   
    Given I navigate to page "https://3b429be77858.ngrok.io/ghost/#/staff"
    Then I click on element having css selector ".apps-card-app"
    Then I enter "test123456" into input field having id "user-password-new"
    Then I enter "test123457" into input field having id "user-new-password-verification"
    Then I click on element having css selector ".gh-btn.gh-btn-red.ember-view"
    Then I should see text "Your new passwords do not match"
    
    Given I navigate to page "https://3b429be77858.ngrok.io/ghost/#/staff"

    
    

