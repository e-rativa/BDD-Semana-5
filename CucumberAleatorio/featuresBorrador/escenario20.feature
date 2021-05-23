Feature: Login - Logout

Scenario: Login - Logout
    Given I go to Ghost login
    When I login with correct data
    And I wait for 1 second
    And I try to login
    And I wait for 2 second
    And I got to settings-general
    And I wait for 3 second
    Then I got to logout
    And I wait for 3 second