const urlBase = 'https://894e1cdea8aa.ngrok.io/'
var pageTitle = ''
var pageDescription = ''
var tagName = ''
var tagDescription = ''
var date
describe('Test escenarios 6 to 10', () => {
    
    beforeEach(()=>{
       cy.visit(urlBase+'ghost/#/signin')
        cy.wait(1000)
        cy.get('form').within(() => {
            cy.get('input[id="ember8"]').type('pruebasmiso4103@gmail.com')
            cy.get('input[id="ember10"]').type('qwerty1234')
            cy.get('button[id="ember12"]').click()
        })
    })
    it('Escenario 6', () => {
        pageTitle = ''
        pageDescription = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        cy.get('a[href*="#/pages/"]').click()
        createPage(pageTitle, pageDescription)
        pageTitle = 'Lorem Ipsum'
        pageDescription = ''
        createPage(pageTitle, pageDescription)
        pageTitle = 'Lorem Ipsum'
        pageDescription = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        createPage(pageTitle, pageDescription)

    })
    it('Escenario 7', () => {
        pageTitle = 'Publish page immediately'
        pageDescription = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        cy.get('a[href*="#/pages/"]').click()
        createPage(pageTitle, pageDescription)
        publishPage(true)
    })

    it('Escenario 8', () => {
        pageTitle = 'Publish scheduled page'
        pageDescription = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        cy.get('a[href*="#/pages/"]').click()
        createPage(pageTitle, pageDescription)
        publishPage(false)
    })

    it('Escenario 9', () => {
        createTag(tagName, tagDescription)        

    })

    it('Escenario 10', () => {
        tagName = 'tag1'
        tagDescription = 'Description'
        createTag(tagName, tagDescription)
    })
  })

  function createPage(title, description) {
    cy.url().should('eq', urlBase+'ghost/#/pages')
    cy.get('a.gh-btn.gh-btn-green.ember-view').click()
    cy.get('.koenig-editor__editor').type(".")
    cy.get('a.blue.link.fw4.flex.items-center.ember-view').click()
    cy.get(".gh-post-list-title").contains('(Untitled)').click({force: true});

    if (title && !description) {
        cy.get('textarea.gh-editor-title.ember-text-area.gh-input.ember-view').clear()
        cy.get('textarea.gh-editor-title.ember-text-area.gh-input.ember-view').type(title)
        cy.get('.koenig-editor__editor').click()
        cy.wait(6000)
        cy.get('a.blue.link.fw4.flex.items-center.ember-view').click({force: true})

    }
    else if (description && !title){
        cy.get('.koenig-editor__editor').clear()
        cy.get('.koenig-editor__editor').type(description)
        cy.wait(6000)
        cy.get('a.blue.link.fw4.flex.items-center.ember-view').click({force: true})
    }
    else {
        cy.get('.koenig-editor__editor').clear()
        cy.get('textarea.gh-editor-title.ember-text-area.gh-input.ember-view').clear()
        cy.get('textarea.gh-editor-title.ember-text-area.gh-input.ember-view').type(title)
        cy.get('.koenig-editor__editor').type(description)
        cy.wait(6000)
        cy.get('a.blue.link.fw4.flex.items-center.ember-view').click({force: true})
    }
  }

  function publishPage(inmediatlyPublish) {
      if (inmediatlyPublish){
        cy.get(".gh-post-list-title").contains('Publish page immediately').click({force: true});
        cy.get("div.gh-btn.gh-btn-outline.gh-publishmenu-trigger.ember-basic-dropdown-trigger.ember-view").click()
      }
      else {
        cy.get(".gh-post-list-title").contains('Publish scheduled page').click({force: true});
        cy.get("div.gh-btn.gh-btn-outline.gh-publishmenu-trigger.ember-basic-dropdown-trigger.ember-view").click()
        cy.get("div.gh-publishmenu-radio-label").contains("Schedule it for later").click()
      }
      cy.get("button.gh-btn.gh-btn-blue.gh-publishmenu-button.gh-btn-icon.ember-view").click()
      cy.wait(6000)
      cy.get('a.blue.link.fw4.flex.items-center.ember-view').click({force: true})

  }

  function createTag(name, description){
      cy.get('a[href*="#/tags/"]').click({force: true})
      cy.get('a.ember-view.gh-btn.gh-btn-green').click({force: true})
      if (name && description){
        cy.get('input[id="tag-name"]').type(name, {force: true})
        cy.get('textarea[id="tag-description"]').type(description, {force: true})
        cy.get('button.gh-btn.gh-btn-blue.gh-btn-icon.ember-view').click({force: true})
      }
      else {
        cy.get('button.gh-btn.gh-btn-blue.gh-btn-icon.ember-view').click()
        cy.get('button.gh-btn.gh-btn-blue.gh-btn-icon.gh-btn-red.ember-view').then(($header)=>{
            expect($header[0].innerText).to.equal('Retry')
        })
      }
  }
