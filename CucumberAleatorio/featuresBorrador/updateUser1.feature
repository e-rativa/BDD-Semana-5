Feature: Update a User
    As an user I want to update a user's name and role in order to update the information of the users

 Scenario Outline: Update Invalido (name vacio) (Roles Admin, author, contributor y editor)
    Given I go to home screen
    And I wait for 2 second
    When I login with correct data
    And I wait for 2 second
    And I try to login
    And I wait for 2 second
    And I go to staff screen
    And I wait for 2 second
    And I press ghost user
    And I wait for 2 second
    And I try with empty name and <role>
    And I wait for 2 second
    And I press save button
    And I wait for 2 second
    Then I expect to see button alert
    And I wait for 2 second
    Then I logout
    And I wait for 2 second
    
Examples:
| role | 
| 0 |
| 1 |
| 2 |
| 3 |