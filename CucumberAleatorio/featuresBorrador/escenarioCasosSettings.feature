Feature: Login - Recorrido de opciones Settings

Scenario Outline: Login - Recorrido de opciones Settings
    Given I go to Ghost login
    When I login with correct data
    And I wait for 1 second
    And I try to login
    And I wait for 3 second
    And I do random event settings <event>
    And I wait for 3 second
    Then I got to logout
    And I wait for 3 second

Examples:
 |event|
 |general|
 |design|
 |code-injection|
 |integrations|
 |labs|
 