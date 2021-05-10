
Feature: Create a tag 

  @user1 @web
  Scenario: Create a tag with name and description
    Given I navigate to page "https://894e1cdea8aa.ngrok.io/ghost/"
     When I enter "pruebasmiso4103@gmail.com" into input field having id "ember8"
      And I enter "qwerty1234" into input field having id "ember10"
      And I click on element having id "ember12"
     Then I navigate to page "https://894e1cdea8aa.ngrok.io/ghost/#/tags/new"
     Then I enter "Tag1" into input field having id "tag-name"
     Then I enter "Descripcion" into input field having id "tag-description"
     Then I click on element having css selector ".gh-btn.gh-btn-blue.gh-btn-icon.ember-view"
