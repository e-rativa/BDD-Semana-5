Feature: Login - Configuration General

@user1 @web
  Scenario: Login-logout
    Given I navigate to page "https://894e1cdea8aa.ngrok.io/ghost/#/signin"
    Then I enter "pruebasmiso4103@gmail.com" into input field having id "ember8"
    Then I enter "qwerty1234" into input field having id "ember10"
    Then I click on element having id "ember12"
    Then I click on element having css selector ".gh-mobile-nav-bar-more"
    Then I click on element having css selector ".gh-nav-bottom"
    Then I navigate to page "https://e61b4ef2fb35.ngrok.io/ghost/#/signout"