///<reference types="cypress"/>

describe("testing the contact us",() =>{

    it('fillup the contanct us form',() =>{
     cy.visit('https://webdriveruniversity.com/') 

     cy.get('#contact-us').invoke('removeAttr','target').click()

     cy.get('[placeholder="First Name"]').type('hello')

     cy.get('[placeholder="Last Name"]').type('world')

     cy.get('[placeholder="Email Address"]').type('helloworld@gmail.com')

     cy.get('[placeholder="Comments"]').type('detils of form is filled as above')

     cy.get('[type="submit"]').click()

    })
    
})