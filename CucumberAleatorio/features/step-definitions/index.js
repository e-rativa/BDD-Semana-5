var { Given } = require('cucumber');
var { When } = require('cucumber');
var { Then } = require('cucumber');
var { expect } = require('chai');
var { expect } = require('chai');
const Promise = require('bluebird');
var faker  = require('faker');
//const Promise = require('bluebird');
const seleniumWebdriver = require('selenium-webdriver');
const { Builder, By, until } = require('selenium-webdriver');

Given('I go to Ghost login', () => {
    browser.url('/ghost/#/signin');
    if ($('button=Cerrar').isDisplayed()) {
        $('button=Cerrar').click();
    }
});

Given(/^I wait for (.*) second$/, function (seconds) {
    return Promise.resolve().delay(seconds * 1000)
});

When('I login with correct data',()=>{
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

When('I got to settings-general',()=>{
    browser.url('/ghost/#/settings/general');
});

When('I got to settings-design',()=>{
    browser.url('/ghost/#/settings/design');
});

When('I got to site',()=>{
    browser.url('/ghost/#/site');
});

When('I got to settings-labs',()=>{
    browser.url('/ghost/#/settings/labs');
});

When('I got to logout',()=>{
    browser.url('/ghost/#/signout');
});

Then('I try to expand to edit title', () => {
    const inputElement = $('.gh-setting-action');
    inputElement.click();
});

Then('I try to erase the title name settings general',() =>{
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

Then('I try to erase the title settings design',() =>{
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

Then(/^I do random event settings (.*)$/,(event)=>{
    console.warn('Evento : ',event);
    switch(event){
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
        default:'Sin opcion de evento aleatorio'
        break;
    }
   });

   Then(/^I do random event post (.*)$/,(event)=>{
    console.warn('Evento : ',event);
    switch(event){
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
        default:'Sin opcion de evento aleatorio'
        break;
    }
   });

   Then(/^I do random event manage (.*)$/,(event)=>{
    console.warn('Evento : ',event);
    switch(event){
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
        default:'Sin opcion de evento aleatorio'
        break;
    }
   });