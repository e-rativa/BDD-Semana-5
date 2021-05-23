Feature: Update a User
    As an user I want to update a user's name and role in order to update the information of the users

 Scenario Outline: Update valido (name 20, 191 characters) (Roles Admin, author, contributor y editor)
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
    And I try with name <char> and <role>
    And I wait for 2 second
    And I press save button
    And I wait for 2 second
    And I go to staff screen
    And I wait for 2 second
    And I press new ghost user
    And I wait for 2 second
    And I filled ghost data
    And I press save button
    And I wait for 2 second
    And I go to staff screen
    And I wait for 2 second
    Then I logout
    And I wait for 2 second
    

Examples:

| char | role | 
| 15  | 0 |
| 15  | 1 |
| 15  | 2 |
| 15  | 3 |
| 191  | 0 |
| 191  | 1 |
| 191  | 2 |
| 191  | 3 |