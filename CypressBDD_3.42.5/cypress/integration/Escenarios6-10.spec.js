const urlBase = 'https://3d9074f0bcbd.ngrok.io/'
var pageTitle = ''
var pageDescription = ''
var tagName = ''
var tagDescription = ''
var date
let index_val = 6;
describe('Test escenarios 6 to 10', () => {
    
    beforeEach(()=>{
        
       cy.visit(urlBase+'ghost/#/signin')
        cy.wait(1000)
        cy.get('form').within(() => {
            cy.get('input[id="ember8"]').type('pruebasmiso4103@gmail.com')
            cy.screenshot('Escenario_'+index_val+'/Escenario_'+index_val+'_username');
            cy.wait(1000)
            cy.get('input[id="ember10"]').type('qwerty1234')
            cy.screenshot('Escenario_'+index_val+'/Escenario_'+index_val+'_password');
            cy.wait(1000)
            cy.get('button[id="ember12"]').click()
            cy.screenshot('Escenario_'+index_val+'/Escenario_'+index_val+'_login');
            cy.wait(1000)
            index_val = index_val + 1; 
        })
    })
    it('Escenario 6', () => {
        const escenario = 6;
        pageTitle = ''
        pageDescription = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        cy.get('a[href*="#/pages/"]').click()
        createPage(pageTitle, pageDescription, escenario)
        pageTitle = 'Lorem Ipsum'
        pageDescription = ''
        createPage(pageTitle, pageDescription, escenario)
        pageTitle = 'Lorem Ipsum'
        pageDescription = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        createPage(pageTitle, pageDescription, escenario)

    })
    it('Escenario 7', () => {
        const escenario = 7;
        pageTitle = 'Publish page immediately'
        pageDescription = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        cy.get('a[href*="#/pages/"]').click()
        createPage(pageTitle, pageDescription, escenario)
        publishPage(true, escenario)
    })

    it('Escenario 8', () => {
        const escenario = 8;
        pageTitle = 'Publish scheduled page'
        pageDescription = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        cy.get('a[href*="#/pages/"]').click()
        createPage(pageTitle, pageDescription, escenario)
        publishPage(false, escenario)
    })

    it('Escenario 9', () => {
        const escenario = 9;
        createTag(tagName, tagDescription, escenario)        
    })

    it('Escenario 10', () => {
        const escenario = 10;
        tagName = 'tag1'
        tagDescription = 'Description'
        createTag(tagName, tagDescription, escenario)
    })
  })

  function createPage(title, description, escenario) {
    cy.url().should('eq', urlBase+'ghost/#/pages')
    cy.screenshot('Escenario_'+escenario+'/Escenario_'+escenario+'_vista_paginas');
    cy.wait(1000)
    cy.get('a.gh-btn.gh-btn-green.ember-view').click()
    cy.get('.koenig-editor__editor').type(".")
    cy.get('a.blue.link.fw4.flex.items-center.ember-view').click()
    cy.get(".gh-post-list-title").contains('(Untitled)').click({force: true});

    if (title && !description) {
        cy.get('textarea.gh-editor-title.ember-text-area.gh-input.ember-view').clear()
        cy.get('textarea.gh-editor-title.ember-text-area.gh-input.ember-view').type(title)
        cy.get('.koenig-editor__editor').click()
        cy.wait(3000)
        cy.screenshot('Escenario_'+escenario+'/Escenario_'+escenario+'_pagina_sin_descripcion');
        cy.wait(1000)
        cy.get('a.blue.link.fw4.flex.items-center.ember-view').click({force: true})

    }
    else if (description && !title){
        cy.get('.koenig-editor__editor').clear()
        cy.get('.koenig-editor__editor').type(description)
        cy.wait(3000)
        cy.screenshot('Escenario_'+escenario+'/Escenario_'+escenario+'_pagina_sin_titulo');
        cy.wait(1000)
        cy.get('a.blue.link.fw4.flex.items-center.ember-view').click({force: true})
    }
    else {
        cy.get('.koenig-editor__editor').clear()
        cy.get('textarea.gh-editor-title.ember-text-area.gh-input.ember-view').clear()
        cy.get('textarea.gh-editor-title.ember-text-area.gh-input.ember-view').type(title)
        cy.get('.koenig-editor__editor').type(description)
        cy.wait(3000)
        cy.screenshot('Escenario_'+escenario+'/Escenario_'+escenario+'_pagina_completa');
        cy.wait(1000)
        cy.get('a.blue.link.fw4.flex.items-center.ember-view').click({force: true})
    }
  }

  function publishPage(inmediatlyPublish, escenario) {
      if (inmediatlyPublish){
        cy.get(".gh-post-list-title").contains('Publish page immediately').click({force: true});
        cy.get("div.gh-btn.gh-btn-outline.gh-publishmenu-trigger.ember-basic-dropdown-trigger.ember-view").click()
        cy.screenshot('Escenario_'+escenario+'/Escenario_'+escenario+'_pagina_publicar_pagina_inmediatamente');
        cy.wait(1000)
      }
      else {
        cy.get(".gh-post-list-title").contains('Publish scheduled page').click({force: true});
        cy.get("div.gh-btn.gh-btn-outline.gh-publishmenu-trigger.ember-basic-dropdown-trigger.ember-view").click()
        cy.get("div.gh-publishmenu-radio-label").contains("Schedule it for later").click()
        cy.screenshot('Escenario_'+escenario+'/Escenario_'+escenario+'_pagina_publicar_pagina_agendada');
        cy.wait(1000)
      }
      cy.get("button.gh-btn.gh-btn-blue.gh-publishmenu-button.gh-btn-icon.ember-view").click()
      cy.wait(3000)
      cy.screenshot('Escenario_'+escenario+'/Escenario_'+escenario+'_pagina_publicada');
      cy.wait(1000)
      cy.get('a.blue.link.fw4.flex.items-center.ember-view').click({force: true})

  }

  function createTag(name, description, escenario){
      cy.get('a[href*="#/tags/"]').click({force: true})
      cy.get('a.ember-view.gh-btn.gh-btn-green').click({force: true})
      cy.screenshot('Escenario_'+escenario+'/Escenario_'+escenario+'_tags');
      cy.wait(1000)
      if (name && description){
        cy.get('input[id="tag-name"]').type(name, {force: true})
        cy.get('textarea[id="tag-description"]').type(description, {force: true})
        cy.get('button.gh-btn.gh-btn-blue.gh-btn-icon.ember-view').click({force: true})
        cy.screenshot('Escenario_'+escenario+'/Escenario_'+escenario+'_tag_completo');
        cy.wait(1000)
      }
      else {
        cy.get('button.gh-btn.gh-btn-blue.gh-btn-icon.ember-view').click()
        cy.get('button.gh-btn.gh-btn-blue.gh-btn-icon.gh-btn-red.ember-view').then(($header)=>{
            expect($header[0].innerText).to.equal('Retry')
        })
        cy.screenshot('Escenario_'+escenario+'/Escenario_'+escenario+'_tag_sin_datos');
        cy.wait(1000)
      }
  }
