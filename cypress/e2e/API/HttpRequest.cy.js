/// <reference types ="cypress" />

describe('testing the get post put delete request using the post', () => {

    let url = "https://jsonplaceholder.typicode.com/"

    it('get http method', () => {
        cy.request('GET', `${url}/posts`).then((getResponse) => {


            expect(getResponse.status).eq(200)
            cy.log(getResponse)

        })

        cy.request({
            method: 'GET',
            url: `${url}/posts/10`

        }).then((getResp) => {

            expect(getResp.body.title).to.include('optio molestias id quia eum')

            expect(getResp.body.body).to.include('eniam quod sed accusamus veritatis error')
        })

    })

    it('post method', () => {

        cy.request({

            method: 'POST',
            url: `${url}/posts`,
            body: {
                userId: 11,
                title: "this is new testing title with cypress"

            }
        }).then((postresp) => {
            expect(postresp.status).to.equal(201)
            expect((postresp.body.userId)).to.equal(11)
        })
    })

    it('put method', () => {

        cy.request({

            method: 'PUT',
            url: `${url}/posts/12`,
            body: {
                userId: 13,
                title: "this is after Put method"

            }
        }).then((putresp) => {
            expect(putresp.status).to.equal(200)
            expect(putresp.body.userId).to.equal(13)
            expect(putresp.body.title).to.include('this is after Put method')
        })
    })

    it('delete method', () => {

        cy.request({

            method: 'DELETE',
            url: `${url}/posts/12`,
            
        }).then((deleteresp) => {
            expect(deleteresp.status).to.equal(200)
            expect(deleteresp.body).to.be.empty
        })
    })

})