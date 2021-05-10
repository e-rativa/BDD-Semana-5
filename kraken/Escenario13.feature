Feature: Login - Creacion de usuario - cambiar nombre y rol

  @user1 @web
  Scenario: Escenario 13 - Pruebas de usuarios
    Given I navigate to page "https://894e1cdea8aa.ngrok.io/ghost/"
    Then I enter "pruebasmiso4103@gmail.com" into input field having css selector ".email.ember-text-field"
    Then I enter "qwerty1234" into input field having css selector ".password.ember-text-field"
    Then I click on element having css selector ".login.gh-btn.gh-btn-blue"   
    Given I navigate to page "https://894e1cdea8aa.ngrok.io/ghost/#/staff"
    Then I click on element having css selector ".apps-card-app"
    Then I enter " Editado" into input field having id "user-name"
    Then I click on element having css selector ".gh-btn.gh-btn-blue.ember-view"
    
    Given I navigate to page "https://894e1cdea8aa.ngrok.io/ghost/#/staff"

    
    

