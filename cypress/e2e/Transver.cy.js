///<reference types="Cypress"/>

// const { includes } = require("cypress/types/lodash")/



describe('traversing methods',()=>{
    beforeEach(()=>{
        cy.visit('https://www.webdriveruniversity.com/')
        cy.get('#data-table').invoke('removeAttr', 'target').click()
    })

    it('.children() method',()=>{
        cy.get('.traversal-drinks-list').children('#coffee').should('include.text', 'Coffee')
    })

    it('using the .parent method()',()=>{


        cy.get('.traversal-mark').parent().should('include.text','Lorem ipsum dolor sit amet, consectetur adipiscing elit')
    })

    it('using eq method method',()=>{
        cy.get('.traversal-drinks-list').eq('0').should('include.text', 'Coffee')
    })

    it('using the filter method()',()=>{

        // cy.get('.btn-group-toggle button').filter('.active').should('include.text','Button-1')
        cy.get('.btn-group-toggle > * ').filter('.active').should('include.text','Button-1')
    })

    it.only('using the sibling method',()=>{

        cy.get('#t01 tbody tr td').siblings().should('have.length',9)
    })

   
})
