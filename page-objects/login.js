class Login {
    constructor(){
        this.userNameLabel = element(by.xpath("//label[.='Username']"))
        this.userNameInput = element(by.xpath("//input[@id='username']"))
        this.passwordLabel = element(by.xpath("//label[.='Password']"))
        this.passwordInput = element(by.xpath("//input[@id='password']"))
        this.login = element(by.xpath("//i[@class='fa fa-2x fa-sign-in']"))
    }
}