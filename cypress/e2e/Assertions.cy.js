describe("Assertions demo", ()=>{
    it ("Implicit assertions", ()=>{

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

        // sould  and

        // cy.url().should('include', 'orangehrmlive.com')
        // cy.url().should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        // cy.url().should('contain','orangehrm')

        // cy.url().should('include', 'orangehrmlive.com')
        // .should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        // .should('contain','orangehrm')

        // cy.url().should('include', 'orangehrmlive.com')
        // .and('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        // .and('not.contain','orangehrm')

        cy.title().should('include','Orange')
        .and('eq',"OrangeHRM")
        .and('contain',"HRM")

        cy.get('.orangehrm-login-branding > img').should('be.visible') //logo visible
        .and('be.exist')  //logo exists


        cy.xpath("//a").should('have.length','5') // No. of links

        cy.get("input[placeholder='username']").type("Admin")// provide username

        cy.get("input[placeholder='username']").should('have.value','Admin') // value

    })


    /*
// Implicit assertions
    //should
    //and

//Supported assertions/parameters inside should

    //eq
    //contain
    //include
    //exist
    //have.length
    //have.value


//  Explicit Assertions

    // expect - BDD
    // assert - TDD


it ("explicit assertions", ()=>{

    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type("Admin")
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type("admin123")
    cy.get('.oxd-button').click()

    let expName="Praveen Kumar"
    cy.get('.oxd-userdropdown-name').then((x)=>{
        let actName=x.text()

        //BDD Style
        expect(actName).to.equal(expName)
        expect(actName).to.not.equal(expName)

        //TDD Style
        assert.equal(actName,expName)
        assert.notEqual(actName,expName)

    })


    
})

    */
})