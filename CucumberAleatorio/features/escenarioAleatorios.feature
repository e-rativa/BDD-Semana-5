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
 |!"1#2#35$6$7%8%90&'&¿087/5//T(I(U)T=U)L(O/&%$#"!|
 |Titulo con espacios asdfasfasasdfjnasldkfnmlaksdnflansdkjfbanlskdfbjnlaksjnrlipñwertjpñoweirjtkgndsfñgmnsdlkfmnglksdjfnglksjdnflgkjsndlkgjnsdflkgjnlsdfjngflsdjkgnlsdjfnglskdjfglksdjfnklglksdfjglksdjfnglksdjnfvlsdmnbñsdknfgñksndlfgkjnldkgjnsldkfjgnlskjdbfnlñjkgnñsdjfnglsjdnlgfkjnbdslakjgnsljdkanfgñsjknañfskjnañlfjnñsajnñsjanfñfsjandñdskjna{ñskjnsña|
 ||

 Scenario: Login - Activar sitio privado
    Given I go to Ghost login
    When I login with correct data
    And I wait for 1 second
    And I try to login
    And I wait for 2 second
    And I got to settings-general
    And I wait for 2 second
    Then I try to active private site
    And I wait for 2 second
    Then I try to save config private site
    And I wait for 2 second
    Then I try to active private site
    And I wait for 2 second
    Then I try to save config private site
    And I wait for 2 second
    Then I got to logout
    And I wait for 2 second

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
    Then I got to logout
    And I wait for 2 second

Scenario: Login - Logout
    Given I go to Ghost login
    When I login with correct data
    And I wait for 1 second
    And I try to login
    And I wait for 2 second
    And I got to settings-general
    And I wait for 2 second
    Then I got to logout
    And I wait for 2 second

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