
///<reference types="Cypress"/>

describe('traversing methods',()=>{
    beforeEach(()=>{
        cy.visit('https://www.lambdatest.com/selenium-playground/shadow-dom')
        
    })

    it('testing the shadow dom',()=>{

        cy.get('#shadow_host').shadow().find('[placeholder="Name"]').type('ishwar')
    })

    it('testing the shadow dom usinf the include:shadow=true',()=>{

        cy.get('[placeholder="Email' ,{includeShadowDom:true}).type('ishwar@gmail.com')

})

})