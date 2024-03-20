import { expect, driver } from '@wdio/globals'
import homePage from '../pageobjects/home.page.js'
import loginPage from '../pageobjects/login.page.js'
import cadastroPage from '../pageobjects/cadastro.page.js'
import profilePage from '../pageobjects/profile.page.js'


describe('Cadastro de usuário', () => {
    
    it('Deve cadastrar um novo usuário no app', async () => {
        await homePage.openMenu('profile')
        await loginPage.telaLogin('Sign up')
        await cadastroPage.cadastro('Guilherme', 'Leite', '789456123', 'guilhermeleite@ebac.com', 'guilherme@alunoebac', 'guilherme@alunoebac')
        await homePage.openMenu('profile')
        expect ((await profilePage.profileMail('guilhermeleite@ebac.com')).isDisplayed()).toBeTruthy()
      
    })
})

