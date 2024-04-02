
///<reference types="Cypress"/>

describe('testing the picker',()=>{
    beforeEach(()=>{
        cy.visit('https://webdriveruniversity.com/')

        cy.get('#datepicker').invoke('removeAttr','target').click()
        
    })

    it('testing the date picker',()=>{

        cy.get('#datepicker').click()

        cy.get('.datepicker-switch').first().click()
    //   insted of eq we can also we the first to first elememnt as first()method

    function selectyear(){

        cy.get('.datepicker-switch').first().then((yearvalue)=>{

            let yeartext =yearvalue.text()
            

            // if(!yeartext.includes('2029')){

            //     cy.get('[class="next"]').eq(2).click({force:true})

            //     selectyear()

            // }

            if(!yeartext.includes('2024')){

                cy.get('[class="prev"]').eq(0).click({force:true})

                selectyear()

            }
    
        })
    }
         function selectmonth(){
           cy.get('[class="month"]').contains('Apr').click({force:true})
            }

            function selectdate(){
                cy.get('[class="day"]').contains('13').click({force:true})
                 }



            selectyear()
            selectmonth()
            selectdate()


})



})