exports.metamask=class metamask
{
constructor({page,extensionid})
{
    this.page=page
    this.extensionid=extensionid
    this.clickcheckbox='//input[@id="onboarding__terms-checkbox"]'
    this.importExtension="//button[@class='button btn--rounded btn-secondary']"
    this.iagree="//button[@data-theme='light']"
    this.secreateRecovery1="//input[@data-testid='import-srp__srp-word-0']"
     this.secreateRecovery2="//input[@data-testid='import-srp__srp-word-1']"
     this.secreateRecovery3="//input[@data-testid='import-srp__srp-word-2']"
     this.secreateRecovery4="//input[@data-testid='import-srp__srp-word-3']"
     this.secreateRecovery5="//input[@data-testid='import-srp__srp-word-4']"
     this.secreateRecovery6="//input[@data-testid='import-srp__srp-word-5']"
     this.secreateRecovery7="//input[@data-testid='import-srp__srp-word-6']"
     this.secreateRecovery8="//input[@data-testid='import-srp__srp-word-7']"
     this.secreateRecovery9="//input[@data-testid='import-srp__srp-word-8']"
     this.secreateRecovery10="//input[@data-testid='import-srp__srp-word-9']"
     this.secreateRecovery11="//input[@data-testid='import-srp__srp-word-10']"
     this.secreateRecovery12="//input[@data-testid='import-srp__srp-word-11']"

this.conformsecreterecovery="//button[@data-testid='import-srp-confirm']"
this.newpassword="//input[@data-testid='create-password-new']"
this.conformpassword='//input[@data-testid="create-password-confirm"]'
this.conformcheckbox="//input[@type='checkbox']"
this.importmywallet='//button[@data-testid="create-password-import"]'
this.done='//button[@data-testid="onboarding-complete-done"]'
this.next='//button[@data-testid="pin-extension-next"]'
this.done2='//button[@data-testid="pin-extension-done"]'

}
async click()
{
    

await this.page.locator(this.clickcheckbox).click()
}
async importing()
{
await this.page.locator(this.importExtension).click()
}
async agree()
{
await this.page.locator(this.iagree).click()
}
async pasteSecretRecoveryPhrase(words)
 {
    
    if (words.length !== 12) {
        throw new Error('throw error');
    }

    const recoverySelectors = [
        this.secreateRecovery1, this.secreateRecovery2, this.secreateRecovery3,
        this.secreateRecovery4, this.secreateRecovery5, this.secreateRecovery6,
        this.secreateRecovery7, this.secreateRecovery8, this.secreateRecovery9,
        this.secreateRecovery10, this.secreateRecovery11, this.secreateRecovery12
    ];

    for (let i = 0; i <words.length; i++)
         {
        await this.page.locator(recoverySelectors[i]).fill(words[i]);
    }
}

/*async pasteSecretRecoveryPhase(word1,word2,word3,word4,word5,word6,word7,word8,word9,word10,word11,word12)
{
await this.page.locator( this.secreateRecovery1).fill(word1)
await this.page.locator( this.secreateRecovery2).fill(word2)
await this.page.locator( this.secreateRecovery3).fill(word3)
await this.page.locator( this.secreateRecovery4).fill(word4)
await this.page.locator( this.secreateRecovery5).fill(word5)
await this.page.locator( this.secreateRecovery6).fill(word6)
await this.page.locator( this.secreateRecovery7).fill(word7)
await this.page.locator( this.secreateRecovery8).fill(word8)
await this.page.locator( this.secreateRecovery9).fill(word9)
await this.page.locator( this.secreateRecovery10).fill(word10)
await this.page.locator( this.secreateRecovery11).fill(word11)
await this.page.locator( this.secreateRecovery12).fill(word12)

}*/

 
 
async conformsecret()
{
  await this.page.locator(this.conformsecreterecovery).click()
}
async new(onepassword)
{
await this.page.locator(this.newpassword).fill(onepassword)

}
async onceagin(twoPassword)
{
    await this.page.locator(this.conformpassword).fill(twoPassword)
}
async checkbox2()
{
await this.page.locator(this.conformcheckbox).click();
}
 async wallet()
 {
    await this.page.locator(this.importmywallet).click()
 }  
 async mydone() 
 {
    await this.page.locator(this.done).click();
 }
async mynext()
{
    await this.page.locator(this.next).click();
}
async mydone2()
{
    await this.page.locator(this.done2).click()
}
}




