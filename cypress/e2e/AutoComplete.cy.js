///<reference types="cypress"/>

describe("testing the contact us",() =>{

    it('fillup the contanct us form',() =>{
     cy.visit('https://webdriveruniversity.com/') 

     cy.get('#autocomplete-textfield').invoke('removeAttr','target').click()

     cy.get('#myInput').type('w')

     cy.get('#myInputautocomplete-list div1').each((foodItemlist)=>{
      
        if(foodItemlist.text () === 'Wine'){

    cy.wrap(foodItemlist).click()

    cy.get('#submit-button').click()

    cy.url().should('include','Wine')

        }

        
     })

    })
    
})