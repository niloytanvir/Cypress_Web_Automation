
import Login from "../../pageObjects/loginPage2";

describe('POM', () => {

    it('LoginTest',()=>{
    const ln= new Login();
    ln.setURL("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    ln.setUserName("Admin")
    ln.setPassword("admin123")
    ln.clickSubmit();
    ln.verifyLogin();

    })
})



