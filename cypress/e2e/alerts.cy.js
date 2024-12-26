describe('Alerts', ()=> {

// 1. Javascript Alert: It will have some text and an 'OK' button
     it('Js alert', ()=> {
        cy.visit('https://testpages.herokuapp.com/styled/alerts/alert-test.html')
        cy.get('#alertexamples').click()

        cy.on('window:alert',(t)=>{
            expect(t).to.contains('I am an alert box!');
        })

        // alert window automatically closed by cypress

        cy.get('#alertexplanation').should('have.text','You triggered and handled the alert dialog')
        

     }) 

 // 2. Javascript confirmation alert: It will have some text with 'Ok' and 'Cancle' button

     it('js confirm alert - Ok',()=>{

        cy.visit('https://testpages.herokuapp.com/styled/alerts/alert-test.html')
        cy.get('#confirmexample').click()

        cy.on('window:confirm',(t)=>{
            expect(t).to.contains('I am a confirm alert');
        })

        cy.get('#confirmexplanation').should('have.text','You clicked OK, confirm returned true.')



     })

     it('js confirm alert - cancle',()=>{

        cy.visit('https://testpages.herokuapp.com/styled/alerts/alert-test.html')
        cy.get('#confirmexample').click()

        cy.on('window:confirm',(t)=>{
            expect(t).to.contains('I am a confirm alert');
        })

        cy.on('window:confirm',()=> false) //Cypress closes alert window using cancle button

        cy.get('#confirmexplanation').should('have.text','You clicked Cancel, confirm returned false.')



     })

// 3. Javascript prompt alert: It will have some text with a textbox for user input along with 'Ok' and 'Cancle' button
it('js prompt alert',()=>{

    cy.visit('https://testpages.herokuapp.com/styled/alerts/alert-test.html')
   
    cy.window().then(win=>{
        cy.stub(win,'prompt').returns('welcome');

    })

    cy.get('#promptexample').click();

    cy.get('#promptexplanation').should('have.text',"'You clicked OK. 'prompt' returned welcome'");


 })

 it.only('js prompt alert -cancle',()=>{

    cy.visit('https://testpages.herokuapp.com/styled/alerts/alert-test.html')
   
    cy.window().then(win=>{
        cy.stub(win,'prompt').returns('welcome');

    })

    cy.get('#promptexample').click();
    cy.on('window:prompt',()=> false)

    cy.get('#promptexplanation').should('have.text',"'You clicked OK. 'prompt' returned welcome'");


 })


 // 4. Authentication alerts

 it('Authenticated alert', ()=>{
    cy.visit("https://the-internet.herokuapp.com/basic_auth",{auth:
                                                                  {
                                                                    username: "admin",
                                                                    password:"admin"
                                                                }
                                                            });

    cy.get("div[class='example'] p").should('have.contain',"Congratulations! You must have the proper credentials.");

    // //Another Approach
    // cy.visit("https://admin:admin@the-internet.herokuapp.com/basic_auth")
    // cy.get("div[class='example'] p").should('have.contain',"Congratulations! You must have the proper credentials.");

 })


})