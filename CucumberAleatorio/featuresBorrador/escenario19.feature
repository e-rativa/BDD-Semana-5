Feature: Login - Habilitar miembros

Scenario: Login - Habilitar miembros
    Given I go to Ghost login
    When I login with correct data
    And I wait for 1 second
    And I try to login
    And I wait for 2 second
    And I got to settings-labs
    And I wait for 2 second
    Then I try to open to edit config enable members
    And I wait for 2 second
    Then I try to edit config enable members
    And I wait for 2 second
    Then I try to save config enable members
    And I wait for 2 second