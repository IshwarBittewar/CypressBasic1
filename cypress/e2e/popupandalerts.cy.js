/// <reference types ="cypress"/>

describe('testing the popup and alerts',()=>{ 

    beforeEach(()=>{
         //  visit website
            cy.visit('https://webdriveruniversity.com/') 
        //  sellecting the particular element
             cy.get('#popup-alerts').invoke('removeAttr','target').click()
    })

    it('validating the window pop up',()=>{   

     cy.get('#button1').click()

     cy.on('window:alert',(str)=>{

        expect(str).to.include('I am an alert box!')
     })
    })

    it('validating the confirm button',()=>{

        cy.get('#button4').click()

        cy.on('window:confirm',(str)=>{
            expect(str).to.include('Press a button!')

            return false
        })

        cy.get('#confirm-alert-text').should('include.text','You pressed Cancel!')
    })

})