describe("Screenshots", ()=>{
    it.skip("Capture screenshots using commands", ()=>{

        // taking screenshots  by using commands
        cy.visit("https://demo.opencart.com/")
        cy.screenshot("homepage")
        cy.wait(5000)
        cy.get("img[title='Your Store']").screenshot("logo")
    })

    it("Capture screenshots Automatically", ()=>{

        // taking screenshots automatically when execute via terminal
        cy.visit("https://demo.opencart.com/")
        cy.get("li:nth-child(7) a:nth-child(1)").click()
        cy.get("div[id='content'] h2").should('have.text','Tablets')
    })
})