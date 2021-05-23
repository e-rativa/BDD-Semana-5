Feature: Login - Recorrido de Manage

Scenario Outline: Login - Recorrido de Manage
    Given I go to Ghost login
    When I login with correct data
    And I wait for 1 second
    And I try to login
    And I wait for 3 second
    And I do random event manage <event>
    And I wait for 3 second
    Then I got to logout
    And I wait for 3 second

Examples:
 |event|
 |posts|
 |pages|
 |tags|
 |staff| 