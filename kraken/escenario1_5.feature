Feature: Shared board connection

  @user1 @web
  Scenario: Login
  Then I want to save this file with the given version "3.3.0" and stepname "Login"
    Given I navigate to page "http://3d9074f0bcbd.ngrok.io/ghost/#/signin"
    Then I enter "" into input field having id "ember8"
    Then I enter "" into input field having id "ember10"
    Then I click on element having id "ember12"
    Then I should see text "Please fill out the form to sign in."
    Given I navigate to page "http://3d9074f0bcbd.ngrok.io/ghost/#/signin"
    Then I enter "error@hotmail.com" into input field having id "ember8"
    Then I enter "#########" into input field having id "ember10"
    Then I click on element having id "ember12"
    Then I should see text "Access denied."
    Then I navigate to page "http://3d9074f0bcbd.ngrok.io/ghost/#/signin"
    Then I enter "pruebasmiso4103@gmail.com" into input field having id "ember8"
    Then I enter "qwerty1234" into input field having id "ember10"
    Then I click on element having id "ember12"
    Then I navigate to page "http://3d9074f0bcbd.ngrok.io/ghost/#/signout"
    Then I send a signal to user 2 containing "continue 2"

  @user2 @web
  Scenario: Recuperar contraseña
  Then I want to save this file with the given version "3.3.0" and stepname "RecuperarContrasena"
    Given I wait for a signal containing "continue 2" for 60 seconds
    Given I navigate to page "http://3d9074f0bcbd.ngrok.io/ghost/#/signin"
    Then I click on element having id "ember11"
    Then I should see text "We need your email address to reset your password!" 
    Then I enter "error@hotmail.com" into input field having id "ember8"
    Then I click on element having id "ember11"
    Then I should see text "User not found."
    Then I navigate to page "http://3d9074f0bcbd.ngrok.io/ghost/#/signin"
    Then I enter "pruebasmiso4103@gmail.com" into input field having id "ember8"
    Then I click on element having id "ember11"
    Then I send a signal to user 3 containing "continue 3"

  @user3 @web
  Scenario: Login-Crear post
  Then I want to save this file with the given version "3.3.0" and stepname "PublicarPost"
    Given I wait for a signal containing "continue 3" for 120 seconds
    Given I navigate to page "http://3d9074f0bcbd.ngrok.io/ghost/#/signin"
    Then I enter "pruebasmiso4103@gmail.com" into input field having id "ember8"
    Then I enter "qwerty1234" into input field having id "ember10"
    Then I click on element having id "ember12"
    Then I navigate to page "http://3d9074f0bcbd.ngrok.io/ghost/#/editor/post"
    Then I enter "Titulo" into input field having css selector ".gh-editor-title"
    Then I enter "AAAAAAAAAAAAAAA" into input field having css selector ".koenig-editor__editor"
    Then I click on element having css selector ".gh-publishmenu-trigger" 
    Then I click on element having css selector ".gh-publishmenu-button"
    Then I navigate to page "http://3d9074f0bcbd.ngrok.io/ghost/#/signout"
    Then I send a signal to user 4 containing "continue 4"

  @user4 @web
  Scenario: Login-Crear post- publicar post agendado
  Then I want to save this file with the given version "3.3.0" and stepname "PublicarPostAgendado"
    Given I wait for a signal containing "continue 4" for 180 seconds
    Given I navigate to page "http://3d9074f0bcbd.ngrok.io/ghost/#/signin"
    Then I enter "pruebasmiso4103@gmail.com" into input field having id "ember8"
    Then I enter "qwerty1234" into input field having id "ember10"
    Then I click on element having id "ember12"
    Then I navigate to page "http://3d9074f0bcbd.ngrok.io/ghost/#/editor/post"
    Then I enter "Titulo" into input field having css selector ".gh-editor-title"
    Then I enter "AAAAAAAAAAAAAAA" into input field having css selector ".koenig-editor__editor"
    Then I click on element having css selector ".gh-publishmenu-trigger" 
    Then I click on element having css selector ".ember-basic-dropdown"
    Then I click on element having css selector ".ember-basic-dropdown"
    Then I click on element having css selector ".gh-publishmenu-button"
    Then I navigate to page "http://3d9074f0bcbd.ngrok.io/ghost/#/signout"
    Then I send a signal to user 5 containing "continue 5"

  @user5 @web
  Scenario: Login-Crear post- publicar post con url y feature
  Then I want to save this file with the given version "3.3.0" and stepname "PublicarPostUrlFeature"
    Given I wait for a signal containing "continue 5" for 240 seconds
    Given I navigate to page "http://3d9074f0bcbd.ngrok.io/ghost/#/signin"
    Then I enter "pruebasmiso4103@gmail.com" into input field having id "ember8"
    Then I enter "qwerty1234" into input field having id "ember10"
    Then I click on element having id "ember12"
    Then I navigate to page "http://3d9074f0bcbd.ngrok.io/ghost/#/editor/post"
    Then I enter "Titulo" into input field having css selector ".gh-editor-title"
    Then I enter "AAAAAAAAAAAAAAA" into input field having css selector ".koenig-editor__editor"
    Then I click on element having css selector ".post-settings"
    Then I enter "Post" into input field having id "url"
    Then I click on element having css selector ".input-toggle-component"
    Then I click on element having css selector ".close"
    Then I click on element having css selector ".gh-publishmenu-trigger" 
    Then I click on element having css selector ".gh-publishmenu-button"
    Then I navigate to page "http://3d9074f0bcbd.ngrok.io/ghost/#/signout"
  

