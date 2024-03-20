import { $ } from '@wdio/globals'


class ProfilePage {

    async profileMail (email){
        return await $(`//android.widget.TextView[@text="${email}"]`)
    }
     

    }

export default new ProfilePage();
