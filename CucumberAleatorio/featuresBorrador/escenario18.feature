Feature: Login - Cambiar diseño de página web

Scenario Outline: Login - Cambiar diseño de página web
    Given I go to Ghost login
    When I login with correct data
    And I wait for 1 second
    And I try to login
    And I wait for 2 second
    And I got to settings-design
    And I wait for 2 second
    Then I try to erase the title settings design
    And I wait for 3 second
    Then I try to edit the <title> settings design
    And I wait for 3 second
    Then I try to save config settins design
    And I wait for 2 second
    When I got to site
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
 |!"1#2#35$6$7%8%90&'&¿087/5//T(I(U)T=U)L(O/&%$#"!|
 |Titulo con espacios asdfasfasasdfjnasldkfnmlaksdnflansdkjfbanlskdfbjnlaksjnrlipñwertjpñoweirjtkgndsfñgmnsdlkfmnglksdjfnglksjdnflgkjsndlkgjnsdflkgjnlsdfjngflsdjkgnlsdjfnglskdjfglksdjfnklglksdfjglksdjfnglksdjnfvlsdmnbñsdknfgñksndlfgkjnldkgjnsldkfjgnlskjdbfnlñjkgnñsdjfnglsjdnlgfkjnbdslakjgnsljdkanfgñsjknañfskjnañlfjnñsajnñsjanfñfsjandñdskjna{ñskjnsña|
 ||