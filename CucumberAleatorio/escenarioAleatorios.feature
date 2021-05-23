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



## 1
Scenario Outline: Create correct page
    Given I go to ghost home screen
    And I wait for 2 second
    When  I login with correct data
    And I wait for 1 second
    And I try to login
    And I wait for 2 second
    Then I create a page with <title> and <content>
    And I wait for 2 second
    Then I go back to page list
    And I wait for 1 second
    Then I logout
    And I wait for 2 second

Examples:

| title       | content                                                                                                              |
| Transcof    | Dilation of Left Common Carotid Artery, Bifurcation, with Three Intraluminal Devices, Percutaneous Approach          |
| Voyatouch   | Alteration of Right Elbow Region with Synthetic Substitute, Open Approach                                            |
| Veribet     | Revision of Autologous Tissue Substitute in Right Rib, Percutaneous Approach                                         |
| Solarbreeze | Introduction of Electrolytic and Water Balance Substance into Lower GI, Via Natural or Artificial Opening Endoscopic |
| Bytecard    | Inspection of Penis, Percutaneous Approach                                                                           |
| Duobam      | Excision of Left Eye, Percutaneous Approach                                                                          |
| Redhold     | Repair Right Cephalic Vein, Open Approach                                                                            |



## 2
Scenario: Create random number of page with random values
    Given I go to ghost home screen
    And I wait for 2 second
    When  I login with correct data
    And I wait for 1 second
    And I try to login
    And I wait for 2 second
    Then I create a random number of page with random values
    And I wait for 1 second
    Then I logout
    And I wait for 2 second

## 3
Scenario: Create random number of page with null title
    Given I go to ghost home screen
    And I wait for 2 second
    When  I login with correct data
    And I wait for 1 second
    And I try to login
    And I wait for 2 second
    Then I create a random number of page with null title
    And I wait for 1 second
    Then I logout
    And I wait for 2 second

## 4
Scenario: Create a page with a low border title value
    Given I go to ghost home screen
    And I wait for 2 second
    When  I login with correct data
    And I wait for 1 second
    And I try to login
    And I wait for 2 second
    Then I create a page with a low border title value
    And I wait for 1 second

    Then I logout
    And I wait for 2 second

## 5
Scenario: Create a page with a high border title value
    Given I go to ghost home screen
    And I wait for 2 second
    When  I login with correct data
    And I wait for 1 second
    And I try to login
    And I wait for 2 second
    Then I create a page with a high border title value
    And I wait for 4 second
    Then I logout
    And I wait for 2 second

## 6
Scenario: Create a page with a low border slug value
    Given I go to ghost home screen
    And I wait for 2 second
    When  I login with correct data
    And I wait for 1 second
    And I try to login
    And I wait for 2 second
    Then I create a page with a low border slug value
    And I wait for 4 second
    Then I logout
    And I wait for 2 second

## 7
Scenario: Create a page with a high border slug value
    Given I go to ghost home screen
    And I wait for 2 second
    When  I login with correct data
    And I wait for 1 second
    And I try to login
    And I wait for 2 second
    Then I create a page with a high border slug value
    And I wait for 4 second
    Then I logout
    And I wait for 2 second

##8 

Scenario Outline: Create correct page
    Given I go to ghost home screen
    And I wait for 2 second
    When  I login with correct data
    And I wait for 1 second
    And I try to login
    And I wait for 2 second
    Then I create a page with <title> and <content>
    And I wait for 2 second
    Then I go back to page list
    And I wait for 1 second
    Then I logout
    And I wait for 2 second

Examples:

|title|content|
|・(￣∀￣)・:*:|NULL|
|../../../../../../../../../../../etc/hosts|᠎|
|​|１２３|
|"''''"'"|"''''"'"|
|123456|사회과학원 어학연구소|
|・(￣∀￣)・:*:|<svg><script>0<1>alert('XSS')</script>|
|åß∂ƒ©˙∆˚¬…æ|𠜎𠜱𠝹𠱓𠱸𠲖𠳏|
|‪‪test‪|<img src=x onerror=alert('hi') />|
|₀₁₂|울란바토르|

## 9
Scenario: Create a page with random values and publish inmediatly
    Given I go to ghost home screen
    And I wait for 2 second
    When  I login with correct data
    And I wait for 1 second
    And I try to login
    And I wait for 2 second
    Then I create a random number of page with random values and publish inmediatly
    And I wait for 1 second
    Then I logout
    And I wait for 2 second

## 10
Scenario: I create a random number of page with random values and schedule publish
    Given I go to ghost home screen
    And I wait for 2 second
    When  I login with correct data
    And I wait for 1 second
    And I try to login
    And I wait for 2 second
    Then I create a random number of page with random values and schedule publish
    And I wait for 1 second
    Then I logout
    And I wait for 2 second

## 11
Scenario: I create a page with limit border title and publish inmediatly
    Given I go to ghost home screen
    And I wait for 2 second
    When  I login with correct data
    And I wait for 1 second
    And I try to login
    And I wait for 2 second
    Then I create a page with a limit title
    And I wait for 4 second
    Then I publish a page
    Then I logout
    And I wait for 2 second

## 12
Scenario: I create a page with high border title and publish inmediatly
    Given I go to ghost home screen
    And I wait for 2 second
    When  I login with correct data
    And I wait for 1 second
    And I try to login
    And I wait for 2 second
    Then I create a page with a limit high title
    And I wait for 4 second
    Then I logout
    And I wait for 2 second

## 13
Scenario: I delete a random page
    Given I go to ghost home screen
    And I wait for 2 second
    When  I login with correct data
    And I wait for 1 second
    And I try to login
    And I wait for 2 second
    Then I select a random page
    And I wait for 4 second
    Then I delete a page
    And I wait for 2 second
    Then I logout
    And I wait for 2 second

## 14
Scenario: I edit a random page
    Given I go to ghost home screen
    And I wait for 2 second
    When  I login with correct data
    And I wait for 1 second
    And I try to login
    And I wait for 2 second
    Then I select a random page
    And I wait for 4 second
    Then I edit a page
    And I wait for 2 second
    Then I logout
    And I wait for 2 second

## 15
Scenario: I edit and delete a random page
    Given I go to ghost home screen
    And I wait for 2 second
    When  I login with correct data
    And I wait for 1 second
    And I try to login
    And I wait for 2 second
    Then I select a random page
    And I wait for 4 second
    Then I edit a page
    And I wait for 2 second
    Then I delete a page
    Then I logout
    And I wait for 2 second

## 16
Scenario: I edit and publish immediately a page
    Given I go to ghost home screen
    And I wait for 2 second
    When  I login with correct data
    And I wait for 1 second
    And I try to login
    And I wait for 2 second
    Then I select a random page
    And I wait for 4 second
    Then I edit a page
    And I wait for 2 second
    Then I publish a page
    Then I logout
    And I wait for 2 second

## 17
Scenario: I edit and schedule page
    Given I go to ghost home screen
    And I wait for 2 second
    When  I login with correct data
    And I wait for 1 second
    And I try to login
    And I wait for 2 second
    Then I select a random page
    And I wait for 4 second
    Then I edit a page
    And I wait for 2 second
    Then I publish a schedule page
    Then I logout
    And I wait for 2 second

## 18
Scenario: I edit a random page, publish immediately and delete a page
    Given I go to ghost home screen
    And I wait for 2 second
    When  I login with correct data
    And I wait for 1 second
    And I try to login
    And I wait for 2 second
    Then I select a random page
    And I wait for 4 second
    Then I edit a page
    And I wait for 2 second
    Then I publish a page
    And I wait for 2 second
    Then I delete a page
    And I wait for 2 second
    Then I logout
    And I wait for 2 second

## 19
Scenario: I edit a random page, publish schedule and delete a page
    Given I go to ghost home screen
    And I wait for 2 second
    When  I login with correct data
    And I wait for 1 second
    And I try to login
    And I wait for 2 second
    Then I select a random page
    And I wait for 4 second
    Then I edit a page
    And I wait for 2 second
    Then I publish a schedule page
    And I wait for 2 second
    Then I delete a page
    And I wait for 2 second
    Then I logout
    And I wait for 2 second

## 20
Scenario: I select a random post publish immediately and unpublish a page
    Given I go to ghost home screen
    And I wait for 2 second
    When  I login with correct data
    And I wait for 1 second
    And I try to login
    And I wait for 2 second
    Then I select a random page
    And I wait for 2 second
    Then I publish a page
    And I wait for 2 second
    Then I unpublish a page
    And I wait for 2 second
    Then I logout
    And I wait for 2 second

## 21
Scenario: I select a random post publish a schedule and unpublish a page
    Given I go to ghost home screen
    And I wait for 2 second
    When  I login with correct data
    And I wait for 1 second
    And I try to login
    And I wait for 2 second
    Then I select a random page
    And I wait for 2 second
    Then I publish a schedule page
    And I wait for 2 second
    Then I unpublish a schedule page
    And I wait for 2 second
    Then I logout
    And I wait for 2 second

## 22
Scenario: I create a random post and edit a page
    Given I go to ghost home screen
    And I wait for 2 second
    When  I login with correct data
    And I wait for 1 second
    And I try to login
    And I wait for 2 second
    Then I create a page with a low border slug value
    And I wait for 2 second
    Then I edit a page
    And I wait for 2 second
    Then I logout
    And I wait for 2 second

## 23
Scenario: I create a random post and edit a page and publish immediately
    Given I go to ghost home screen
    And I wait for 2 second
    When  I login with correct data
    And I wait for 1 second
    And I try to login
    And I wait for 2 second
    Then I create a page with a low border slug value
    And I wait for 2 second
    Then I edit a page
    And I wait for 2 second
    Then I publish a page
    And I wait for 2 second
    Then I logout
    And I wait for 2 second

## 24
Scenario: I create a random post and edit a page and schedule page
    Given I go to ghost home screen
    And I wait for 2 second
    When  I login with correct data
    And I wait for 1 second
    And I try to login
    And I wait for 2 second
    Then I create a page with a low border slug value
    And I wait for 2 second
    Then I edit a page
    And I wait for 2 second
    Then I publish a schedule page
    And I wait for 2 second
    Then I logout
    And I wait for 2 second

## 25
Scenario: I create a random post and edit a page and publish immediately and unpublish
    Given I go to ghost home screen
    And I wait for 2 second
    When  I login with correct data
    And I wait for 1 second
    And I try to login
    And I wait for 2 second
    Then I create a page with a low border slug value
    And I wait for 2 second
    Then I edit a page
    And I wait for 2 second
    Then I publish a page
    And I wait for 2 second
    Then I unpublish a page
    And I wait for 2 second
    Then I logout
    And I wait for 2 second

## 26
Scenario: I create a random post and edit a page, schedule and unplublish a page
    Given I go to ghost home screen
    And I wait for 2 second
    When  I login with correct data
    And I wait for 1 second
    And I try to login
    And I wait for 2 second
    Then I create a page with a low border slug value
    And I wait for 2 second
    Then I edit a page
    And I wait for 2 second
    Then I publish a schedule page
    And I wait for 2 second
    Then I unpublish a schedule page
    And I wait for 2 second
    Then I logout
    And I wait for 2 second

## 27
Scenario: I create a random post and delete it
    Given I go to ghost home screen
    And I wait for 2 second
    When  I login with correct data
    And I wait for 1 second
    And I try to login
    And I wait for 2 second
    Then I create a page with a low border slug value
    And I wait for 2 second
    Then I delete a page
    And I wait for 2 second
    Then I logout
    And I wait for 2 second

## 28
Scenario: I create a random post, edit and delete it
    Given I go to ghost home screen
    And I wait for 2 second
    When  I login with correct data
    And I wait for 1 second
    And I try to login
    And I wait for 2 second
    Then I create a page with a low border slug value
    And I wait for 2 second
    Then I edit a page
    And I wait for 2 second
    Then I delete a page
    And I wait for 2 second
    Then I logout
    And I wait for 2 second

## 29
Scenario: I create a random post, publish, edit, unpublish
    Given I go to ghost home screen
    And I wait for 2 second
    When  I login with correct data
    And I wait for 1 second
    And I try to login
    And I wait for 2 second
    Then I create a page with a low border slug value
    And I wait for 2 second
    Then I publish a page
    And I wait for 2 second
    Then I edit a page
    And I wait for 2 second
    Then I unpublish a page
    And I wait for 2 second
    Then I logout
    And I wait for 2 second

## 30
Scenario: I create a random post, schedule publish, edit, unpublish
    Given I go to ghost home screen
    And I wait for 2 second
    When  I login with correct data
    And I wait for 1 second
    And I try to login
    And I wait for 2 second
    Then I create a page with a low border slug value
    And I wait for 2 second
    Then I publish a schedule page
    And I wait for 2 second
    Then I edit a page
    And I wait for 2 second
    Then I unpublish a schedule page
    And I wait for 2 second
    Then I logout
    And I wait for 2 second


 Scenario Outline: Login Datos apriori
    Given I go to ghost login screen
    When I fill with <email> and <password>
    And I try to login
    And I wait for 1 second
    Then I confirm error text for login
    And I wait for 1 second
    And I logout

Examples:
|email|password|
|fmatcham0@cam.ac.uk|b1Q1f0|
|ahelversen1@house.gov|2Ym4o1hjP7jw|
|bshawcross2@typepad.com|h8Ij2H|
|vleaning3@globo.com|TTHTKJuU7|
|bshuxsmith4@istockphoto.com|qL0aixqOs|
|ofernandes5@zdnet.com|vNJ6Qhg4|

 Scenario Outline: Crear Post datos aletoreos
    Given I go to ghost login screen
    When I login with correct data
    And I try to login
    And I wait for 2 second
    And I create a post with random data <try>
    And I wait for 1 second
    Then I logout

Examples:
|try|
|1|
|2|
|3|
|4|
|5|
|6|


 Scenario Outline: Posts eventos aleatoreos
    Given I go to ghost login screen
    When I login with correct data
    And I wait for 1 second
    And I try to login
    And I wait for 3 second
    And I select a random to post
    And I wait for 3 second
    And I do random event <try>
    And I wait for 3 second
    Then I logout

Examples:
 |try|
 |1|
 |2|
 |3|
 |4|
 |5|
 |6|
 |7|
 |8|
 |9|
 |10|
 |11|
 |12|



 Scenario Outline: Recuperar contraseña datos apriori raros
    Given I go to ghost login screen
    When I fill with <email> with naugthy data
    And I click on forgot password
    And I wait for 1 second
    Then I confirm error text for forgotPassword
    And I wait for 1 second
    And I logout

Examples:
|email|
|/dev/null; touch /tmp/blns.fail ; echo|
|␢|
|1E02|
|0/0|
|部落格|
|NULL| 


