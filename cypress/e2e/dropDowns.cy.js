

describe("handling DropDOwns",()=>{

    it.skip("dropdown with select",()=>{
        cy.visit("https://www.zoho.com/commerce/free-demo.html")
        cy.get('#zcf_address_country')
        .select('France')
        .should('have.value','France')

    })
    
    it.skip("dropdown without select",()=>{
        cy.visit("https://www.dummyticket.com/dummy-ticket-for-visa-application/")
        cy.get('#select2-billing_country-container').click()
        cy.get('.select2-search__field').type('Italy').type('{enter}')
        
        cy.get('#select2-billing_country-container')
        .should('have.text','Italy')

    })

    it.skip("Auto suggest dropdown",()=>{
        cy.visit("https://www.wikipedia.org/")

        cy.get('#searchInput').type('Delhi')

        cy.get('.suggestion-title').contains('Delhi University').click()

    })

    it.skip("Auto suggest dropdown",()=>{
        cy.visit("https://www.wikipedia.org/")

        cy.get('#searchInput').type('Delhi')

        cy.get('.suggestion-title').contains('Delhi University').click()

    })

    it("Dynamic dropdown",()=>{
        cy.visit("https://www.google.com")

        cy.get('#searchInput').type('Delhi')

        cy.get('.suggestion-title').contains('Delhi University').click()

    })

})