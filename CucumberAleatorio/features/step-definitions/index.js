var {
    Given
} = require('cucumber');
var {
    When
} = require('cucumber');
var {
    Then
} = require('cucumber');
var {
    expect
} = require('chai');
const Promise = require('bluebird');
var faker = require('faker');
var {
    Before
} = require('cucumber');
let nameMock = '';

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

function borrarPost() {
    $('.post-settings').waitForDisplayed(5000);
    const settingsButton = $('.post-settings');
    settingsButton.click();
    $('.gh-btn.gh-btn-hover-red.gh-btn-icon.settings-menu-delete-button').waitForClickable(5000);
    const deleteButton = $('.gh-btn.gh-btn-hover-red.gh-btn-icon.settings-menu-delete-button');
    deleteButton.click();
    $('.gh-btn.gh-btn-red.gh-btn-icon.ember-view').waitForDisplayed(5000);
    const confirmButton = $('.gh-btn.gh-btn-red.gh-btn-icon.ember-view');
    confirmButton.click();

}

function editarContenido() {
    $('.gh-editor-title').waitForDisplayed(5000);
    const inputElement1 = $('.koenig-editor__editor');
    inputElement1.click();
    inputElement1.keys(faker.fake('{{lorem.paragraphs}}'));
}

function editarTitulo() {
    $('.gh-editor-title').waitForDisplayed(5000);
    const inputTitulo = $('.gh-editor-title');
    inputTitulo.click();
    inputTitulo.keys(faker.fake('{{name.title}}'));
}

function editarPost() {
    $('.gh-editor-title').waitForDisplayed(5000);
    editarTitulo();
    editarContenido();
}

Before(() => {
    browser.pause(1000)
    browser.url('/ghost/#/signout');
    browser.pause(1000)
});






function publicarPost() {
    const optionButton = $('.gh-publishmenu-trigger');
    optionButton.click();

    const publishButton = $('.gh-publishmenu-button');
    publishButton.click();
}
Given('I go to ghost login screen', () => {
    browser.url('/ghost/#/signin');
});

Then('I erase the post', () => {
    editarPost();
    publicarPost();
});

function generateEmail(charLength) {
    let complement = '@test.com'
    let randomLength = charLength - complement.length;
    if (randomLength <= 0){
        randomLength = 1;
    }
    let initString = faker.lorem.words(randomLength);
    initString = initString.replace(/ /g, '');
    initString = initString.slice(0, randomLength);
    let endString = initString + complement;
    // console.log(endString.length);
    return endString;
}

function createPage(title, content) {
    const titleField = $('.gh-editor-title.ember-text-area.gh-input.ember-view');
    titleField.click();
    titleField.keys(title);

    const contentField = $('.koenig-editor__editor');
    contentField.click();
    contentField.keys(content);
}

function makeString(charLimit) {
    let str = faker.lorem.paragraph()
    while (str.length < charLimit) {
        str = str + faker.lorem.paragraph();
    }
    str = str.slice(0, charLimit).trim()
    return str
}

function publishPageImmediately() {
    browser.$('.gh-publishmenu.ember-view').click();
    $('.gh-publishmenu.ember-view').waitForDisplayed(2000);
    browser.$('.gh-btn.gh-btn-blue.gh-publishmenu-button.gh-btn-icon.ember-view').click();
    browser.pause(2000);
    const contentField = $('.koenig-editor__editor');
    contentField.click();
}

function schedulePublishPage() {
    browser.$('.ember-view.ember-basic-dropdown-trigger.gh-btn.gh-btn-outline.gh-publishmenu-trigger').click();
    $('div=Schedule it for later').waitForDisplayed(5000);
    $('div=Schedule it for later').click();
    browser.$('.gh-btn.gh-btn-blue.gh-publishmenu-button.gh-btn-icon.ember-view').click();
    browser.pause(2000);
    const contentField = $('.koenig-editor__editor');
    contentField.click();
}

function cleanPage() {
    const titleField = $('.gh-editor-title.ember-text-area.gh-input.ember-view');
    titleField.click();
    titleField.setValue('')

    const contentField = $('.koenig-editor__editor');
    contentField.click();
    contentField.setValue('')
}

// Elkin Start
Given('I go to home screen', () => {
    browser.url('/ghost/#/signin');
});

Then('I go to staff screen', () => {
    browser.url('/ghost/#/staff');
});

Then('I press invite people', () => {
    $('.gh-btn=Invite people').waitForDisplayed(5000);
    let button = $('.gh-btn=Invite people');
    button.click();
})

Then('I press send button', () => {
    $('.gh-btn=Send invitation now').waitForDisplayed(5000);
    let button = $('.gh-btn=Send invitation now');
    button.click();
})

Then('I press save button', () => {
    $('button=Save').waitForDisplayed(5000);
    let button = $('button=Save');
    button.click();
})

Then('I press ghost user', () => {
    $('.apps-card-app=Ghost').waitForDisplayed(5000);
    let button = $('.apps-card-app=Ghost');
    button.click();
})

Then('I press new ghost user', () => {
    $('.apps-card-app=' + nameMock).waitForDisplayed(5000);
    let button = $('.apps-card-app=' + nameMock);
    button.click();
})

Then(/^I filled with email (.*) and (.*)$/, (char, role) => {
    console.log('--------------------------------------------------------------------')
    $('#new-user-email').waitForDisplayed(5000);
    const inputElement = $('#new-user-email');
    inputElement.click();
    let emailMock = generateEmail(char)
    inputElement.keys(emailMock);
    browser.pause(1000);
    const selectElement = $('#new-user-role');
    selectElement.selectByIndex(role);
    browser.pause(1000);

})

Then(/^I filled with empty email and (.*)$/, (role) => {
    console.log('--------------------------------------------------------------------')
    $('#new-user-email').waitForDisplayed(5000);
    browser.pause(1000);
    const selectElement = $('#new-user-role');
    selectElement.selectByIndex(role);
    browser.pause(1000);
})

Then(/^I try with empty name and (.*)$/, (role) => {
    console.log('--------------------------------------------------------------------')
    $('#user-name').waitForDisplayed(5000);
    const nameElement = $('#user-name');
    nameElement.click();
    nameElement.setValue('');
    nameElement.keys('');
    browser.pause(1000);
    const selectElement = $('#new-user-role');
    selectElement.selectByIndex(role);
    browser.pause(1000);
})

Then(/^I try with name (.*) and (.*)$/, (nameLength, role) => {
    console.log('--------------------------------------------------------------------')
    $('#user-name').waitForDisplayed(5000);
    const nameElement = $('#user-name');
    nameElement.click();
    nameElement.setValue('');
    nameMock = makeString(nameLength);
    nameElement.keys(nameMock);
    browser.pause(1000);
    const selectElement = $('#new-user-role');
    selectElement.selectByIndex(role);
    browser.pause(1000);
})

Then('I filled ghost data', () => {
    console.log('--------------------------------------------------------------------')
    $('#user-name').waitForDisplayed(5000);
    const nameElement = $('#user-name');
    nameElement.click();
    nameElement.setValue('');
    nameElement.keys('Ghost');
    browser.pause(1000);
    const selectElement = $('#new-user-role');
    selectElement.selectByIndex(2);
    browser.pause(1000);
})

Then('I expect to see alert', () => {
    $('.gh-alert.gh-alert-red').waitForDisplayed(5000);
    browser.pause(1000);
});

Then('I expect to see button alert', () => {
    $('.gh-btn-icon.gh-btn-red').waitForDisplayed(5000);
    browser.pause(1000);
});

// Elkin End

When(/^I fill with (.*) and (.*)$/, (email, password) => {
    $('input[id="ember8"]').waitForDisplayed(5000);
    const inputElement = $('input[id="ember8"]');
    inputElement.click();
    inputElement.keys(email);

    var passwordInput = $('input[id="ember10"]');
    passwordInput.click();
    passwordInput.keys(password)
});

Given('I go to ghost home screen', () => {
    browser.url('/ghost/#/signin');
});

When('I select a post random', () => {
    browser.url('/ghost/#/posts');
    $('.posts-list.gh-list').waitForClickable(5000);
    const indexRandomPost = getRandomInt(1, 6);
    const listaPost = $('.posts-list.gh-list').$$('li')
    browser.pause(1000);
    listaPost[indexRandomPost].click();

});
Given('I go to Ghost login', () => {
    browser.url('/ghost/#/signin');
    if ($('button=Cerrar').isDisplayed()) {
        $('button=Cerrar').click();
    }
});

Given(/^I wait for (.*) second$/, function (seconds) {
    return Promise.resolve().delay(seconds * 1000)
});

When(/^I fill email with (.*)$/, (email) => {

    const inputElement = $('input[name="email"]');
    inputElement.click();
    inputElement.keys(email);

});

When('I login with correct data', () => {
    $('input[id="ember8"]').waitForDisplayed(5000);
    const inputElement = $('input[id="ember8"]');
    inputElement.click();
    inputElement.keys("pruebasmiso4103@gmail.com");
    var passwordInput = $('input[id="ember10"]');
    passwordInput.click();
    passwordInput.keys("qwerty1234")
});

When('I try to login', () => {
    $('button[id="ember12"]').click();
});

When('I got to settings-general', () => {
    browser.url('/ghost/#/settings/general');
});

When('I got to settings-design', () => {
    browser.url('/ghost/#/settings/design');
});

When('I got to site', () => {
    browser.url('/ghost/#/site');
});

When('I got to settings-labs', () => {
    browser.url('/ghost/#/settings/labs');
});

When('I got to logout', () => {
    browser.url('/ghost/#/signout');
});

Then('I try to expand to edit title', () => {
    const inputElement = $('.gh-setting-action');
    inputElement.click();
});

Then('I try to erase the title name settings general', () => {
    const inputElementTitle = $('.gh-input');
    inputElementTitle.click();
    inputElementTitle.setValue('');
});

When(/^I try to edit the (.*) settings general$/, (title) => {
    const inputElement = $('.gh-input');
    inputElement.click();
    inputElement.keys(title);
});

Then('I try to contract to edit title', () => {
    const inputElement = $('.gh-setting-action');
    inputElement.click();
});

Then('I try to save edit title', () => {
    const inputElement = $('.gh-btn');
    inputElement.click();
});

Then('I try to active private site', () => {
    const inputElement = $('.input-toggle-component');
    inputElement.click();
});

Then('I try to save config private site', () => {
    const inputElement = $('.view-actions');
    inputElement.click();
});

Then('I try to erase the title settings design', () => {
    const inputElement = $('.ember-text-field');
    inputElement.click();
    inputElement.setValue('');
});

When(/^I try to edit the (.*) settings design$/, (title) => {
    const inputElement = $('.ember-text-field');
    inputElement.click();
    inputElement.keys(title);
});

Then('I try to save config settins design', () => {
    const inputElement = $('.view-actions');
    inputElement.click();
});

Then('I try to open to edit config enable members', () => {
    const inputElement = $('.gh-setting-action');
    inputElement.click();
});

Then('I try to edit config enable members', () => {
    const inputElement = $('.input-toggle-component');
    inputElement.click();
});

Then('I try to save config enable members', () => {
    const inputElement = $('.view-actions');
    inputElement.click();
});

Then(/^I do random event settings (.*)$/, (event) => {
    console.warn('Evento : ', event);
    switch (event) {
        case 'general':
            browser.url('/ghost/#/settings/general');
            break;
        case 'design':
            browser.url('/ghost/#/settings/design');
            break;
        case 'codeInjection':
            browser.url('/ghost/#/settings/code-injection');
            break;
        case 'integrations':
            browser.url('/ghost/#/settings/integrations');
            break;
        case 'labs':
            browser.url('/ghost/#/settings/labs');
            break;
        default:
            'Sin opcion de evento aleatorio'
            break;
    }
});

Then(/^I do a event randomly on post (.*)$/, (intento) => {

    const evento = getRandomInt(1, 4)

    switch (evento) {
        case 1:
            borrarPost();
            break;
        case 2:
            editarTitulo();
            publicarPost();
            break;
        case 3:
            editarContenido();
            publicarPost();
            break;
        case 4:
            editarPost();
            publicarPost();
            break;
    }

});

When('I click on forgot password', () => {
    $('button[id="ember11"]').waitForDisplayed(5000);
    const buttonForgotPassword = $('button[id="ember11"]');
    buttonForgotPassword.click();
});

When(/^I create a post with random data (.*)$/, (intento) => {
    browser.url('/ghost/#/editor/post');
    editarPost();
    browser.pause(2000);
    publicarPost();
    browser.pause(2000);
});



Then(/^I fill with (.*) with naugthy data$/, (email) => {
    const inputElement = $('input[id="ember8"]');
    inputElement.click();
    inputElement.keys(email);

});

Then(/^I confirm error text for (.*)$/, (tipo) => {
    $('.main-error').waitForDisplayed(5000);
    let error = '';
    if (tipo === 'forgotPassword') {
        error = 'We need your email address to reset your password!'
    } else if (tipo === 'login') {
        error = 'There is no user with that email address';
    }

    const alertText = browser.$('.main-error').getText();
    expect(alertText).to.include(error);
});

Then(/^I do random event post (.*)$/, (event) => {
    console.warn('Evento : ', event);
    switch (event) {
        case 'post-draft':
            browser.url('/ghost/#/posts?type=draft');
            break;
        case 'post-scheduled':
            browser.url('/ghost/#/posts?type=scheduled');
            break;
        case 'post-published':
            browser.url('/ghost/#/posts?type=published');
            break;
        case 'post':
            browser.url('/ghost/#/posts');
            break;
        default:
            'Sin opcion de evento aleatorio'
            break;
    }
});

Then(/^I do random event manage (.*)$/, (event) => {
    console.warn('Evento : ', event);
    switch (event) {
        case 'posts':
            browser.url('/ghost/#/posts');
            break;
        case 'pages':
            browser.url('/ghost/#/pages');
            break;
        case 'tags':
            browser.url('/ghost/#/tags');
            break;
        case 'staff':
            browser.url('/ghost/#/staff');
            break;
        default:
            'Sin opcion de evento aleatorio'
            break;
    }
});

Then(/^I create a page with (.*) and (.*)$/, (title, content) => {
    browser.$('a=Pages').click();
    $('a=New page').waitForDisplayed(2000);
    browser.$('a=New page').click();

    createPage(title, content)
});

Then('I go back to page list', () => {
    browser.url('/ghost/#/pages');
});

Then('I logout', () => {
    browser.url('/ghost/#/signout');
});

Then('I create a random number of page with random values', () => {
    randomPage = getRandomInt(1, 10);
    for (i = 0; i < randomPage; i++) {
        browser.url('/ghost/#/pages');
        browser.$('a=Pages').click();
        $('a=New page').waitForDisplayed(2000);
        browser.$('a=New page').click();
        createPage(faker.random.words(), faker.lorem.words())
    }
})

Then('I create a random number of page with null title', () => {
    randomPage = getRandomInt(1, 10);
    for (i = 0; i < randomPage; i++) {
        browser.url('/ghost/#/pages');
        browser.$('a=Pages').click();
        $('a=New page').waitForDisplayed(3000);
        browser.$('a=New page').click();
        createPage('', faker.lorem.words())
    }
})

Then('I create a page with a low border title value', () => {
    let title = makeString(2000)
    browser.url('/ghost/#/pages');
    browser.$('a=Pages').click();
    $('a=New page').waitForDisplayed(3000);
    browser.$('a=New page').click();
    createPage(title, faker.lorem.words())
    browser.url('/ghost/#/pages');
    $('button=Leave').waitForDisplayed(5000);
    browser.$('button=Leave').click();
})

Then('I create a page with a high border title value', () => {
    let title = makeString(2005)
    browser.url('/ghost/#/pages');
    browser.$('a=Pages').click();
    $('a=New page').waitForDisplayed(3000);
    browser.$('a=New page').click();
    createPage(title, faker.lorem.words());
    browser.url('/ghost/#/pages');
    $('button=Leave').waitForDisplayed(3000);
    browser.$('button=Leave').click();
})


Then('I create a page with a low border slug value', () => {
    let title = makeString(191)
    browser.url('/ghost/#/pages');
    browser.$('a=Pages').click();
    $('a=New page').waitForDisplayed(3000);
    browser.$('a=New page').click();
    createPage(title, faker.lorem.words())
})

Then('I create a page with a high border slug value', () => {
    let title = makeString(192)
    browser.url('/ghost/#/pages');
    browser.$('a=Pages').click();
    $('a=New page').waitForDisplayed(3000);
    browser.$('a=New page').click();
    createPage(title, faker.lorem.words())
})

Then('I create a page title with 1000 characters', () => {
    let title = makeString(1000)
    browser.url('/ghost/#/pages');
    browser.$('a=Pages').click();
    $('a=New page').waitForDisplayed(3000);
    browser.$('a=New page').click();
    createPage(title, faker.lorem.words())
    browser.url('/ghost/#/pages');
    $('button=Leave').waitForDisplayed(3000);
    browser.$('button=Leave').click();
})

Then(/^I create a page with naughty (.*) and (.*)$/, (title, content) => {
    browser.$('a=Pages').click();
    $('a=New page').waitForDisplayed(2000);
    browser.$('a=New page').click();

    createPage(title, content)

});

Then('I create a random number of page with random values and publish inmediatly', () => {
    randomPage = getRandomInt(1, 10);
    for (i = 0; i < randomPage; i++) {
        browser.url('/ghost/#/pages');
        browser.$('a=Pages').click();
        $('a=New page').waitForDisplayed(2000);
        browser.$('a=New page').click();
        createPage(faker.random.words(), faker.lorem.words())
        publishPageImmediately()
    }
})

Then('I create a random number of page with random values and schedule publish', () => {
    randomPage = getRandomInt(1, 10);
    for (i = 0; i < randomPage; i++) {
        browser.url('/ghost/#/pages');
        browser.$('a=Pages').click();
        $('a=New page').waitForDisplayed(2000);
        browser.$('a=New page').click();
        createPage(faker.random.words(), faker.lorem.words())
        schedulePublishPage()
    }
})

Then('I publish a page', () => {
    publishPageImmediately()
})

Then('I publish a schedule page', () => {
    schedulePublishPage()
})

Then('I create a page with a limit title', () => {
    let title = makeString(255)
    browser.url('/ghost/#/pages');
    browser.$('a=Pages').click();
    $('a=New page').waitForDisplayed(3000);
    browser.$('a=New page').click();
    createPage(title, faker.lorem.words())
})

Then('I create a page with a limit high title', () => {
    let title = makeString(256)
    browser.url('/ghost/#/pages');
    browser.$('a=Pages').click();
    $('a=New page').waitForDisplayed(3000);
    browser.$('a=New page').click();
    createPage(title, faker.lorem.words())
    browser.url('/ghost/#/pages');
    $('button=Leave').waitForDisplayed(3000);
    browser.$('button=Leave').click();
})

Then('I see a error publish message', () => {
    $('.gh-alert.gh-alert-red.ember-view').waitForDisplayed(5000);
    const alertText = browser.$('.gh-alert.gh-alert-red.ember-view').getText();
    expect(alertText).to.include('Saving failed: Title cannot be longer than 255 characters.');
})

Then('I select a random page', () => {
    browser.url('/ghost/#/pages');
    $('.gh-list').waitForDisplayed(5000);
    const element=$('.gh-list')
    const pages = element.$$('.gh-content-status-draft.gh-badge.gh-badge-purple.nowrap');
    lenPages = pages.length;
    randomPage = getRandomInt(0, lenPages);
    pages[randomPage].click()
});

Then('I delete a page', () => {
    $('.post-settings').waitForDisplayed(5000);
    $('.post-settings').click()
    $('span=Delete page').click()
    $('span=Delete').waitForDisplayed(3000);
    $('span=Delete').click()
})

Then('I edit a page', () => {
    cleanPage()
    createPage(faker.random.words(), faker.lorem.words())
})

Then('I unpublish a page', () => {
    browser.pause(2000)
    $('.gh-publishmenu.ember-view').waitForDisplayed(5000);
    $('.gh-publishmenu.ember-view').click()
    $('div=Unpublished').waitForDisplayed(5000);
    $('div=Unpublished').click()
    browser.pause(2000)
    $('.gh-btn.gh-btn-blue.gh-publishmenu-button.gh-btn-icon.ember-view').waitForDisplayed(5000);
    browser.$('.gh-btn.gh-btn-blue.gh-publishmenu-button.gh-btn-icon.ember-view').click();
})

Then('I unpublish a schedule page', () => {
    browser.pause(2000)
    $('div=Scheduled').waitForDisplayed(5000);
    $('div=Scheduled').click()
    $('div=Revert to draft').waitForDisplayed(5000);
    $('div=Revert to draft').click()
    browser.pause(2000)
    $('.gh-btn.gh-btn-blue.gh-publishmenu-button.gh-btn-icon.ember-view').waitForDisplayed(2000);
    browser.$('.gh-btn.gh-btn-blue.gh-publishmenu-button.gh-btn-icon.ember-view').click();
})