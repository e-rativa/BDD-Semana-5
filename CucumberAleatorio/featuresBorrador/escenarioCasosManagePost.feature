Feature: Login - Recorrido de Manage Post

Scenario Outline: Login - Recorrido de Manage Post
    Given I go to Ghost login
    When I login with correct data
    And I wait for 1 second
    And I try to login
    And I wait for 3 second
    And I do random event post <event>
    And I wait for 3 second
    Then I got to logout
    And I wait for 3 second

Examples:
 |event|
 |post-draft|
 |post-scheduled|
 |post-published|
 |post| 