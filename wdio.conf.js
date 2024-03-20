export const config = {
    
    //runner: 'local',
    //port: 4723,

    
        user: 'oauth-guilhermekpr-efd57',
        key: '12c6750d-09ba-4af1-8654-d16d3a650ae6',
        hostname: 'ondemand.us-west-1.saucelabs.com',
        port: 443,
        baseUrl: 'wd/hub',
        

    specs: [
        './test/specs/**/*.js'
    ],
    
    maxInstances: 1,
    capabilities: [
        
        //{
        //platformName: 'Android',
        //'appium:deviceName': 'ebac-qe',
        //'appium:platformVersion': '14.0',
        //'appium:automationName': 'UiAutomator2',
        //'appium:app': `${process.cwd()}/app/ebacshop.apks`,
        //'appium:appWaitActivity': '.MainActivity',
        //'appium:disableIdLocatorAutoCompletion': true 
    //}

    {
        platformName: 'Android',
        'appium:app': 'storage:filename=ebacshop.aab', // The filename of the mobile app
        'appium:deviceName': 'Android GoogleAPI Emulator',
        'appium:platformVersion': '14.0',
        'appium:automationName': 'UiAutomator2',
        'appium:disableIdLocatorAutoCompletion': true,
        'sauce:options': {
           build: 'appium-build-cadastro-ebacshop',
           name: 'EBAC Shop Teste Cadastro',
           deviceOrientation: 'PORTRAIT',
           appiumVersion: '2.0.0'
         },
       }

],

    logLevel: 'info',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    framework: 'mocha',
    reporters: ['spec'],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },

}
