const faker = require('faker')
class Login {
    constructor(){
        this.userNameLabel = element(by.xpath("//label[.='Username']"))
        this.userNameField = faker.name.findName();
        this.passwordLabel = element(by.xpath("//label[.='Password']"))
        this.passwordField = element(by.xpath("//input[@id='password']"))
        this.login = element(by.xpath("//i[@class='fa fa-2x fa-sign-in']"))
    }

    visit(){
        browser.get("/login")
    }
}
module.exports = Login