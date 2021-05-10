
Feature: Create a tag 

  @user1 @web
  Scenario: Create a tag without title
    Given I navigate to page "https://3b429be77858.ngrok.io/ghost/"
     When I enter "pruebasmiso4103@gmail.com" into input field having id "ember8"
      And I enter "qwerty1234" into input field having id "ember10"
      And I click on element having id "ember12"
     Then I navigate to page "https://3b429be77858.ngrok.io/ghost/#/tags/new"
     Then I click on element having css selector ".gh-btn.gh-btn-blue.gh-btn-icon.ember-view"
