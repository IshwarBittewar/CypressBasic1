/// <reference types ='cypress'/>

describe('testing the data from', () => {

    const filePath = 'C:/Users/SSPL-LT-EISHWAR/Desktop/Cypresssheet.xlsx'
    it('fetching the data from excel', () => {

       
            cy.task('excelToJson', filePath).then((readData) => {

            cy.visit('https://www.webdriveruniversity.com/')

            // remove target attr for page to open in same tab
            cy.get('#contact-us').invoke('removeAttr', 'target').click()

            cy.get('[placeholder="First Name"]').should('be.empty').type(readData.Sheet1[1].A)

        })

    })

})