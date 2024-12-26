
// 4 Types of Hooks
//before, after , beforEach, afterEach

//Tags
//skip, only

before(()=>{
    cy.log("*** Launch App ***"); // before will execute only once before executing all it blocks
})

after(()=>{
    cy.log("*** Close App ***"); // after will execute only once after executing all it blocks
})

beforeEach(()=>{
    cy.log("*** Login App ***"); // beforeEach will execute everytime before executing all it blocks
})

afterEach(()=>{
    cy.log("*** Logout App ***"); // afterEach will execute everytime after executing all it blocks
})


describe('Undersanding Hooks and Tags', ()=>{
    it ('search',()=>{
        cy.log("*** Searching ***");
    })

    it ('advanced search',()=>{
        cy.log("*** advanced Searching ***");
    })

    it ('listing products',()=>{
        cy.log("*** Listing Products ***");
    })
})