Feature: Login - Configuration General

  @user1 @web
    Scenario: Login-Cambiar diseño de página web
    Then I want to save this file with the given version "3.3.0" and stepname "CambiarDisenopagina"
      Given I navigate to page "https://3d9074f0bcbd.ngrok.io/ghost/#/signin"
      Then I enter "pruebasmiso4103@gmail.com" into input field having id "ember8"
      Then I enter "qwerty1234" into input field having id "ember10"
      Then I click on element having id "ember12"
      Then I navigate to page "https://3d9074f0bcbd.ngrok.io/ghost/#/settings/design"
      Then I enter "Group" into input field having css selector ".ember-text-field"
      Then I click on element having css selector ".view-actions"
      Then I navigate to page "https://3d9074f0bcbd.ngrok.io/ghost/#/site"