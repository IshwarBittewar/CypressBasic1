/// <reference types ="cypress"/>

describe('testing the dropdwonbutton ,checkbox ,radio button',()=>{ 

    beforeEach(()=>{
         //  visit website
            cy.visit('https://webdriveruniversity.com/') 
        //  sellecting the particular element
             cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr','target').click()
    })

    it('tesitng the dropdown',()=>{
   
     cy.get('#dropdowm-menu-1').select('SQL')

     cy.get('#dropdowm-menu-2').select('TestNG')

     cy.get('#dropdowm-menu-3').select('JavaScript')

    })
    it ('tesitngthe checkbox',()=>{

        cy.get('[value="option-1"]').should('not.be.checked').check()

        cy.get('[value="option-3"]').should('be.checked')
    })

    it .only('tesitngthe cradiobuton',()=>{

        cy.get('[value="blue"]').check()
    })


})