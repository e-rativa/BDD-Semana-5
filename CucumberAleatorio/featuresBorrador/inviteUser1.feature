Feature: Invite a User
    As an user create a new user in order to give access to new users

 Scenario Outline: Users validos (Email 18 caracteres) (Roles Admin, author, contributor y editor)
    Given I go to home screen
    And I wait for 2 second
    When I login with correct data
    And I wait for 2 second
    And I try to login
    And I wait for 2 second
    And I go to staff screen
    And I wait for 2 second
    And I press invite people
    And I wait for 2 second  
    And I filled with email <char> and <role>
    And I wait for 2 second
    And I press send button
    And I wait for 2 second
    Then I expect to see alert
    And I wait for 2 second
    And I logout
    And I wait for 2 second

Examples:
| char | role | 
| 15  | 0 |
| 15  | 1 |
| 15  | 2 |
| 15  | 3 |