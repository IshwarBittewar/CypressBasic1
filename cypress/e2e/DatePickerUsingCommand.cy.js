/// <reference types ="cypress"/>

describe("validating the date picker",()=>{

it('selectingdate',()=>{

    cy.visit('https://www.webdriveruniversity.com/')
        // click on date picker tab
        cy.get('#datepicker').invoke('removeAttr', 'target').click()

        cy.get('[id="datepicker"]').click()

        cy.get('.datepicker-switch').first().click()

        // cy.selectprevDate('2011', 'Aug','15')
        cy.selectNextDate('2031', 'Aug','15')
})

})
