describe('cssLocators', () => {

    it ("cssLocators", () => {

        cy.visit("https://banglalink.net/en")
        cy.get(".flex items-center").type("offer")
    })
})