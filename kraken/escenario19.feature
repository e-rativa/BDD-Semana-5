Feature: Login - Configuration General

@user1 @web
  Scenario: Login-Habilitar miembros
    Given I navigate to page "https://894e1cdea8aa.ngrok.io/ghost/#/signin"
    Then I enter "pruebasmiso4103@gmail.com" into input field having id "ember8"
    Then I enter "qwerty1234" into input field having id "ember10"
    Then I click on element having id "ember12"
    Then I click on element having css selector ".gh-mobile-nav-bar-more"
    Then I navigate to page "https://e61b4ef2fb35.ngrok.io/ghost/#/settings/labs"
    Then I click on element having css selector ".input-toggle-component"
    Then I click on element having css selector ".gh-mobile-nav-bar-more"
    Then I navigate to page "https://e61b4ef2fb35.ngrok.io/ghost/#/members"