 Feature: Login - Configuration General

  @user1 @web
    Scenario: Login - Activar Sitio Privado
    Then I want to save this file with the given version "3.3.0" and stepname "ActivarSitioPrivado"
      Given I navigate to page "https://e61b4ef2fb35.ngrok.io/ghost/#/signin"
      Then I enter "pruebasmiso4103@gmail.com" into input field having id "ember8"
      Then I enter "qwerty1234" into input field having id "ember10"
      Then I click on element having id "ember12"
      Then I navigate to page "https://e61b4ef2fb35.ngrok.io/ghost/#/settings/general"
      Then I click on element having css selector ".input-toggle-component"
      Then I click on element having css selector ".view-actions"