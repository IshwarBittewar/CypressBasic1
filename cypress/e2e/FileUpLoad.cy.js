/// <reference types ="cypress"/>

describe('testing the file-upload',()=>{

    it('valditaing the file-upload',()=>{
    
    cy.visit('https://webdriveruniversity.com/')
    
    cy.get('#file-upload').invoke('removeAttr','target').click()
        
    cy.get('#myFile').selectFile('cypress/fixtures/example.json')

    cy.get('#submit-button').click()

    cy.on('window:alert',(xyz)=>{

        // console.log(str) 
        expect(xyz).to.include('Your file has now been uploaded!')
       
    })
    
    
    
    })
})