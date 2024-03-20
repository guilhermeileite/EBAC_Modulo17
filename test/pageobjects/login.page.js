import { $ } from '@wdio/globals'


class loginPage {
    
    async telaLogin() { 
        await $('android=new UiSelector().text("Sign up")').click()

    }

    }

export default new loginPage();
