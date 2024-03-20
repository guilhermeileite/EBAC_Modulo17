import { $ } from '@wdio/globals'


class cadastroPage {
    get firstName (){
        return $('id:firstName')
       }
    get lastName (){
        return $('id:lastName')
    }
    get phone (){
        return $('id:phone')
    }
    get email (){
        return $('id:email')
    }
    get password (){
        return $('id:password')
    }
    get repassword (){
        return $('id:repassword')
    }
    get btnCreate (){
        return $('~Create')
    }

    async cadastro(firstName, lastName, phone, email, password, repassword) {
        await this.firstName.setValue(firstName)
        await this.lastName.setValue(lastName)
        await this.phone.setValue(phone)
        await this.email.setValue(email)
        await this.password.setValue(password)
        await this.repassword.setValue(repassword)
        await this.btnCreate.click()
        
    }

}

export default new cadastroPage();
