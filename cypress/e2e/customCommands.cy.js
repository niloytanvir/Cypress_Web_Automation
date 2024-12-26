// click on link using label
// over writing existing contains() command
// re-usable custom command

describe('Custom Commands', ()=>{

    it("handling links",()=>{
        cy.visit("https://demo.nopcommerce.com/");

        //clicking on specific product using custom commands
        cy.clickLink("Apple MacBook Pro 13-inch");
        cy.get("div[class='product-name'] h1").should('have.text',"Apple MacBook Pro 13-inch")

    })

    it("overwriting existing command", () => {
        cy.visit("https://demo.nopcommerce.com/");

        cy.clickLink("APPLE MACBOOK PRO 13-inch");
        cy.get("div[class='product-name'] h1").should('have.text',"Apple MacBook Pro 13-inch");


    })
    it.only("Login Command", () => {
        cy.visit("https://demo.nopcommerce.com/");

        cy.clickLink("Log in");
        cy.loginapp("testkori@gmail.com","test1234")

        cy.get('.ico-account').should('have.text','My account')



    })

})