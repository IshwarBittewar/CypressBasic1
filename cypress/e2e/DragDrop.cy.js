/// <reference types ="cypress"/>

describe('testing the drag and drop ,doubleclick',()=>{ 

    beforeEach(()=>{
         //  visit website
            cy.visit('https://webdriveruniversity.com/') 
        //  sellecting the particular element
             cy.get('#actions').invoke('removeAttr','target').click()


    })

    it('testing drag and drop',()=>{

        cy.get('#draggable').trigger('mousedown',{which:1})

        cy.get('#droppable').trigger('mousemove',).trigger('mouseup',{force:true})

        cy.get('#droppable b').should('include.text','Dropped!')

        cy.get('#droppable p').should('have.css','background-color','rgb(244, 89, 80)')
    })

    it('testing the double actions',()=>{
    
        cy.get('#double-click').dblclick()
// 
        cy.get('#double-click h2').should('contain.text','Double Click Me!')



    })

    it('testing the hidden links',()=>{

        cy.get('.dropdown-content').eq(0).invoke('show').should('be.visible').click()
    })

})