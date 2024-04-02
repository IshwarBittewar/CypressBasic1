/// <reference types ="cypress"/>

describe('intercept spying',()=>{

    it('spying',()=>{

        cy.intercept({
            path :'/data/v1/post/60d21af267d0d8992e610b8d/comment?limit=10'

        }).as('comment')

        cy.visit('https://dummyapi.io/explorer')
        cy.get('.px-2.py-1.m-1').contains('Comments List').click()
        cy.wait('@comment').then((intercept1)=>{
        expect(intercept1.response.statusCode).to.eq(200)
        expect(intercept1.response.body.limit).to.eq(10)   
    })
})

it('spy and stub',()=>{

    cy.intercept('GET','/data/v1/post/60d21af267d0d8992e610b8d/comment?limit=10',
    {limit:22, name:'ishwar' }).as('newparameters')

    cy.visit('https://dummyapi.io/explorer')
    cy.get('.px-2.py-1.m-1').contains('Comments List').click()
    cy.wait('@newparameters').then((intercept2)=>{
    expect(intercept2.response.statusCode).to.eq(200)
    expect(intercept2.response.body.limit).to.eq(22)   
})
})
})