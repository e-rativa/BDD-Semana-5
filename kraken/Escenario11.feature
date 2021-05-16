Feature: Login - Creacion de Usuarios

  @user1 @web
  Scenario: Escenario 11 - Pruebas de usuarios
  Then I want to save this file with the given version "3.3.0" and stepname "CreacionDeUsuarios"
    Given I navigate to page "https://e61b4ef2fb35.ngrok.io/ghost/"
    Then I enter "pruebasmiso4103@gmail.com" into input field having css selector ".email.ember-text-field"
    Then I enter "qwerty1234" into input field having css selector ".password.ember-text-field"
    Then I click on element having css selector ".login.gh-btn.gh-btn-blue"   
    Given I navigate to page "https://e61b4ef2fb35.ngrok.io/ghost/#/staff"
    Then I click on element having css selector ".gh-btn"
    Then I enter "admin@test.com" into input field having id "new-user-email"
    Then I select option with value "60984528d22e39939d5896f4" for dropdown with id "new-user-role"
    Then I click on element having css selector ".gh-btn.ember-view"
    Then I click on element having css selector ".gh-btn"
    Then I enter "editor@test.com" into input field having id "new-user-email"
    Then I select option with value "60984528d22e39939d5896f5" for dropdown with id "new-user-role"
    Then I click on element having css selector ".gh-btn.ember-view"
    Then I click on element having css selector ".gh-btn"
    Then I enter "author@test.com" into input field having id "new-user-email"
    Then I select option with value "60984528d22e39939d5896f6" for dropdown with id "new-user-role"
    Then I click on element having css selector ".gh-btn.ember-view"
    Then I click on element having css selector ".gh-btn"
    Then I enter "contributor@test.com" into input field having id "new-user-email"
    Then I select option with value "60984528d22e39939d5896f7" for dropdown with id "new-user-role"
    Then I click on element having css selector ".gh-btn.ember-view"
    Given I navigate to page "https://e61b4ef2fb35.ngrok.io/ghost/#/posts"
    Given I navigate to page "https://e61b4ef2fb35.ngrok.io/ghost/#/staff"
    Then I click on element having css selector ".apps-configured-action.red-hover"
    Then I click on element having css selector ".apps-configured-action.red-hover"
    Then I click on element having css selector ".apps-configured-action.red-hover"
    Then I click on element having css selector ".apps-configured-action.red-hover"
    
    
    

