/// <reference types ="cypress" />

describe("testing the contact us from fetching data from fixtures file",()=>{
let contactusdata
before(()=>{
cy.fixture('contactus').then((jsondata)=>{

    contactusdata =jsondata

    // the data from json file is stored in the jsondata variable

})


})

it('tesing the data',()=>{
console.log(contactusdata)
   
        cy.visit('https://webdriveruniversity.com/') 
   
        cy.get('#contact-us').invoke('removeAttr','target').click()
   
        cy.get('[placeholder="First Name"]').type(contactusdata.firstname)
   
        cy.get('[placeholder="Last Name"]').type(contactusdata.lastname)
   
        cy.get('[placeholder="Email Address"]').type(contactusdata.email)
   
        cy.get('[placeholder="Comments"]').type(contactusdata.comment)
   
        cy.get('[type="submit"]').click()

})

})

