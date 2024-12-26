

describe("Check UI Elements",()=>{
    it("checking radio buttons",()=>{
        cy.visit("https://testautomationpractice.blogspot.com/")

        //visiblity of Radion Buttons
        cy.get('#male').should('be.visible')
        cy.get('#female').should('be.visible')

        // Selecting radio buttons
        cy.get('#male').check().should('be.checked')
        cy.get('#female').should('not.be.checked')

        cy.get('#female').check().should('be.checked')
        cy.get('#male').should('not.be.checked')





    })

    it("checking CheckBoxes",()=>{

        cy.visit("https://testautomationpractice.blogspot.com/")
                //visiblity of Checkboxes
                cy.get('#monday').should('be.visible')
                cy.get('#saturday').should('be.visible')

                //Selecting single Check box - monday
                cy.get('#monday').check().should('be.checked')

                //Unselecting Checkbox
                cy.get('#monday').uncheck().should('not.be.checked')


                // //Selecting Multiple checkboxes

                cy.get("input.form-check-input[type='checkbox']").check().should('be.checked')
                cy.get("input.form-check-input[type='checkbox']").uncheck().should('not.be.checked')

                //Selecting first & last Checkboxes

                cy.get("input.form-check-input[type='checkbox']").first().check()
                cy.get("input.form-check-input[type='checkbox']").last().check()


    })
})