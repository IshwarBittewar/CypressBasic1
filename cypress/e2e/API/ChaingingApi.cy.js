/// <reference types ="cypress" />
const url = 'https://simple-books-api.glitch.me'

describe('chainging the api', () => {
    let token

    it('register the cilent api', () => {


        cy.request({
            method: 'POST',
            url: `${url}/api-clients/`,
            body: {
                clientName: Math.random().toString().substring(9),
                clientEmail: Math.random().toString().substring(5) + '@gmail.com'
            }
        }).then((apiResponse) => {

            token = apiResponse.body.accessToken
            cy.log(token)
            expect(apiResponse.status).to.equal(201)

            cy.request({
                method: 'POST',
                url: `${url}/orders`,
                headers: {
                    authorization: "Bearer " + token
                },

                body: {
                    bookId: 1,
                    customerName: "Scoreme"
                }

            }).then((orderesponse)=>{

                let bookorderId=orderesponse.body.orderId
                console.log(bookorderId)
                expect(orderesponse.status).to.equal(201)
                expect(orderesponse.body.created).to.be.true

                cy.request({

                    method :'GET',
                    url :`${url}/orders/${bookorderId}`,
                    headers:{
                        authorization: "Bearer " + token
                    }
                }).then((getresp)=>{
                expect(getresp.status).to.equal(200)
                expect (getresp.body.customerName).to.include('Scoreme')
                })
            })

        })





    })


})