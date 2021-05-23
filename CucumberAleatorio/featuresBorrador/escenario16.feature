Feature: Login - Configuration General

Scenario Outline: Login - Configuration General
    Given I go to Ghost login
    When I login with correct data
    And I wait for 1 second
    And I try to login
    And I wait for 2 second
    And I got to settings-general
    And I wait for 2 second
    Then I try to expand to edit title
    And I wait for 2 second
    Then I try to erase the title name settings general
    And I wait for 2 second
    Then I try to edit the <title> settings general
    And I wait for 2 second
    Then I try to contract to edit title
    And I wait for 2 second
    Then I try to save edit title
    And I wait for 2 second
    And I got to settings-general
    And I wait for 2 second
    Then I got to logout
    And I wait for 2 second

Examples:
 |title|
 |Titulo con espacios|
 |Titulossinespacios|
 |123456789|
 |!"##$$%%&&///(()=)(/&%$#"!|
 |1T2I3T4U5L6O789|
 |1t2i3t4u5l6o789|
 |!"1#2#35$6$7%8%90&'&¿087/5//T(I(U)T=U)L(O/&%$#"!|
 |Titulo con espacios asdfasfasasdfjnasldkfnmlaksdnflansdkjfbanlskdfbjnlaksjnrlipñwertjpñoweirjtkgndsfñgmnsdlkfmnglksdjfnglksjdnflgkjsndlkgjnsdflkgjnlsdfjngflsdjkgnlsdjfnglskdjfglksdjfnklglksdfjglksdjfnglksdjnfvlsdmnbñsdknfgñksndlfgkjnldkgjnsldkfjgnlskjdbfnlñjkgnñsdjfnglsjdnlgfkjnbdslakjgnsljdkanfgñsjknañfskjnañlfjnñsajnñsjanfñfsjandñdskjna{ñskjnsña|
 ||