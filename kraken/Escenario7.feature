Feature: Publish a page

  @user1 @web
  Scenario: Publish page immediately
  Then I want to save this file with the given version "3.3.0" and stepname "PublicarPagina"
    Given I navigate to page "https://3d9074f0bcbd.ngrok.io/ghost/"
     When I enter "pruebasmiso4103@gmail.com" into input field having id "ember8"
      And I enter "qwerty1234" into input field having id "ember10"
      And I click on element having id "ember12"
     Then I navigate to page "https://3d9074f0bcbd.ngrok.io/ghost/#/editor/page"
     Then I enter "Lorem Ipsum" into input field having css selector ".gh-editor-title.ember-text-area.gh-input.ember-view"
     Then I enter "Lorem Ipsum is simply dummy text of the printing and typesetting industry." into input field having css selector ".koenig-editor__editor"
     Then I click on element having css selector ".gh-btn.gh-btn-outline.gh-publishmenu-trigger.ember-basic-dropdown-trigger.ember-view"
     Then I click on element having css selector ".gh-btn.gh-btn-blue.gh-publishmenu-button.gh-btn-icon.ember-view"
     Then I click on element having css selector ".blue.link.fw4.flex.items-center.ember-view"
