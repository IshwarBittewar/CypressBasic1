/// <reference types ="cypress"/>

describe('testing the data table', () => {

    beforeEach(() => {
        // visiting the app
        cy.visit('https://www.webdriveruniversity.com/')
        //click on the data table tab
        cy.get('#data-table').invoke('removeAttr', 'target').click()
    })

    it('validating the age of cilent using the last name', () => {

        cy.get('#thumbnail-1 tr td:nth-child(2)').each((ele, index) => {
            let username = ele.text()

            if (username === 'Woods') {

                cy.get('#thumbnail-1 tr td:nth-child(2)').eq(index).next().then((age) => {

                    let userage = age.text()

                    expect(userage).to.equal('80')



                })
            }


        })



    })


    it('validating the sum of ages', () => {
 let sumofage =0
        cy.get('#thumbnail-1 tr td:nth-child(3)').each((ele) => {
            let age = parseInt(ele.text())

            if (!isNaN(age)) {

                sumofage = sumofage + age

            }


        }).then(()=>{

            expect(sumofage).to.equal(322)
        })

    })


})  