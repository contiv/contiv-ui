exports.config = {

  seleniumAddress: 'http://localhost:4444/wd/hub',
  capabilities: {
    'browserName': 'chrome'
  },

  

  baseUrl: 'http://localhost:8080/',

  specs: ['./networks/*.js'],

  framework: 'jasmine',

  params: {
    globBaseUrl: 'http://localhost:8080/'
  },

  jasmineNodeOpts: {
    showColors:true,
    defaultTimeoutInterval: 30000,
    isVerbose:true,
    includeStackTrace:true
  }
};