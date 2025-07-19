const reporter = require('multiple-cucumber-html-reporter');
const browser = process.env.BROWSER || 'chromium';

reporter.generate({
  jsonDir: 'reports',
  reportPath: `cucumber-report/${browser}`,
  displayDuration: true,
  reportName: 'UI Test Report - Blank Factor',
  pageTitle: 'QA Automation Report',
  metadata: {
    browser: {
      name: process.env.BROWSER || 'chromium',
      version: 'latest'
    },
    device: 'CI Runner or Local Machine',
    platform: { name: 'GitHub Actions', version: 'CI' },
    customData: {
      title: 'Build Info',
      data: [
        { label: 'Project', value: 'Blank Factor Smoke tests' },
        { label: 'Author', value: 'Jonathan' },
        { label: 'Environment', value: 'Prod' },
        { label: 'Execution Time', value: new Date().toLocaleString() }
      ]
    }
  }
});