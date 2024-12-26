describe('Handle tabs',(()=>{

    it.skip('Approach1',()=>{
        cy.visit('https://the-internet.herokuapp.com/windows');  //Parent Tab
        cy.get('.example > a').invoke('removeAttr','target').click() // Clicking on the link after removing attribute

        cy.url().should('include','https://the-internet.herokuapp.com/windows/new') // Child Tab
        
        cy.wait(5000); // wait for 5 sec

        // Going back to parent Tab
        cy.go('back');

    } )

    it('Approach2',()=>{
        cy.visit('https://the-internet.herokuapp.com/windows'); 
         
        cy.get('.example >a').then((e)=> {

           let url = e.prop('href');
           cy.visit(url);
           cy.url().should('include','https://the-internet.herokuapp.com/windows/new') // Child Tab
        
           cy.wait(5000); // wait for 5 sec
   
           // Going back to parent Tab
           cy.go('back');
        
        })

    } )

}))