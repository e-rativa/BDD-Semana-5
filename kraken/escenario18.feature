Feature: Login - Configuration General

@user1 @web
  Scenario: Login-Cambiar diseño de página web
    Given I navigate to page "https://894e1cdea8aa.ngrok.io/ghost/#/signin"
    Then I enter "pruebasmiso4103@gmail.com" into input field having id "ember8"
    Then I enter "qwerty1234" into input field having id "ember10"
    Then I click on element having id "ember12"
    Then I navigate to page "https://3b429be77858.ngrok.io/ghost/#/settings/design"
    Then I enter "Group" into input field having css selector ".ember-text-field"
    Then I click on element having css selector ".view-actions"
    Then I navigate to page "https://3b429be77858.ngrok.io/ghost/#/site"