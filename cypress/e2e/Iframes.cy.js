/// <reference types ="cypress"/>

describe('testing the iframes',()=>{

it('valditaing the iframe',()=>{

cy.visit('https://webdriveruniversity.com/')

cy.get('#iframe').invoke('removeAttr','target').click()

cy.get('#frame').then((insideinfo)=>{

const iframeBody1 =insideinfo.contents().find('body')

cy.wrap(iframeBody1).as('insideIframe')

cy.get('@insideIframe').find('#button-find-out-more').click()

cy.get('@insideIframe').find('.modal-body p').should('include.text','Welcome to webdriveruniversity.com we sell a wide range of electrical goods such as laptops, game consoles, cameras...')

cy.get('@insideIframe').find('[data-dismiss="modal"]').contains('Find Out More').click()
})
})



})