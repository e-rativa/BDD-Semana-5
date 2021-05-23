Feature: Invite a User
    As an user create a new user in order to give access to new users

 Scenario Outline: Users invalidos (Email 191 caracteres) (Roles Admin, author, contributor y editor)
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
    Then I expect to see button alert
    And I wait for 2 second
    And I logout
    And I wait for 2 second

Examples:
| char | role | 
| 191  | 0 |
| 191  | 1 |
| 191  | 2 |
| 191  | 3 |
| 192  | 0 |
| 192  | 1 |
| 192  | 2 |
| 192  | 3 |