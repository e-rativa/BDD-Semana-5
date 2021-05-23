Feature: Login - Activar sitio privado

Scenario: Login - Activar sitio privado
    Given I go to Ghost login
    When I login with correct data
    And I wait for 1 second
    And I try to login
    And I wait for 2 second
    And I got to settings-general
    And I wait for 2 second
    Then I try to active private site
    And I wait for 3 second
    Then I try to active private site
    And I wait for 3 second
    Then I try to save config private site
    And I wait for 3 second
    Then I got to logout
    And I wait for 2 second
