exports.config = {
    specs: ['client/components/*/tests/*.e2e.js'],
    capabilities: {
        browserName: 'chrome'
    },
    baseUrl: 'http://localhost:8080',
    framework: 'jasmine',
    onPrepare: function() {
        browser.ignoreSynchronization = true;
    }
};