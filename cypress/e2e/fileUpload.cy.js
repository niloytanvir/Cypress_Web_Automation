import 'cypress-file-upload';

describe ('File Uploads', (()=>{

    it('Single File Upload',()=>{

        cy.visit("https://the-internet.herokuapp.com/upload")
        cy.get('#file-upload').attachFile('Email.png'); // we have to keep the file in "fixtures folder to upload the file"
        cy.get('#file-submit').click()
        cy.wait(5000)

         cy.get("div[class='example'] h3").should('have.text','File Uploaded!')

    })

    it('File Upload - Rename',()=>{
        cy.visit("https://the-internet.herokuapp.com/upload")
        cy.get('#file-upload').attachFile({filePath:'Email.png',fileName:'Signeture.png'}); // we have to keep the file in "fixtures folder to upload the file"
        cy.get('#file-submit').click()
        cy.wait(5000)

         cy.get("div[class='example'] h3").should('have.text','File Uploaded!')
    })

    it('File Upload-Drag & Drop',()=>{
        cy.visit("https://the-internet.herokuapp.com/upload")
        cy.get('#drag-drop-upload').attachFile("Email.png",{subjectType:'drag-n-drop'})
        cy.get('#file-submit').click()
        cy.wait(5000)

         cy.get("div[class='example'] h3").should('have.text','File Uploaded!')
    })

    it('Multiple File Upload',()=>{
        cy.visit("https://davidwalsh.name/demo/multiple-file-upload.php")
        cy.get("#filesToUpload").attachFile(["Email.png", "Tanvir Ahmed.pdf"])
        
    })

    it.only('File upload- Shadow Dom',()=>{
        cy.visit("https://www.htmlelements.com/demos/fileupload/shadow-dom/index.htm")
        cy.get(".smart-browse-input",{includeShadowDom:true}).attachFile("Email.png")
        cy.wait(5000)

        cy.get(".smart-item-name",{includeShadowDom:true}).contains("Email.png")
    })

}))