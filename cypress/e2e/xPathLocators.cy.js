describe('My First Test', () => {
    it('XpathLocators', () => {
      
        cy.visit("https://google.com/")
        cy.xpath("//textarea[@id='APjFqb']").type("Katrina kaif")

       cy.xpath("//div[@class='lJ9FBc']//input[@name='btnK']").click()

    })
})