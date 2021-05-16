
Feature: Create a tag 

  @user1 @web
  Scenario: Create a tag with name and description
  Then I want to save this file with the given version "3.3.0" and stepname "CrearTagNombreDescripcion"
    Given I navigate to page "https://3d9074f0bcbd.ngrok.io/ghost/"
     When I enter "pruebasmiso4103@gmail.com" into input field having id "ember8"
      And I enter "qwerty1234" into input field having id "ember10"
      And I click on element having id "ember12"
     Then I navigate to page "https://3d9074f0bcbd.ngrok.io/ghost/#/tags/new"
     Then I enter "Tag1" into input field having id "tag-name"
     Then I enter "Descripcion" into input field having id "tag-description"
     Then I click on element having css selector ".gh-btn.gh-btn-blue.gh-btn-icon.ember-view"
