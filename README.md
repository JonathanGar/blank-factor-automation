# blank-factor-automation

## Overview

This project is a QA automation setup using Playwright with the Page Object Model and Cucumber BDD. It supports scalable test architecture, clean organization of steps and selectors, and CI/CD integration with browser matrix and report visualization.

---

## Setup Instructions

1. Clone the repository:
   ```bash
   git clone https://github.com/JonathanGar/blank-factor-automation.git
   cd blank-factor-automation
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create the `.env` file based on the template:
   ```bash
   cp .env.example .env
   ```

4. Run the tests locally (Chromium by default):
   ```bash
   npm run test:gherkin
   ```

You can also target specific browsers using:

```bash
npm run test:firefox
```

---

## CI/CD Workflow

GitHub Actions is configured to:

-  Run Cucumber BDD tests on both Chromium and Firefox via matrix strategy
-  Generate HTML test reports per browser
-  Deploy reports to GitHub Pages for direct web access

### Reports are automatically published to:

- [Chromium Report](https://jonathangar.github.io/blank-factor-automation/chromium/)
- [Firefox Report](https://jonathangar.github.io/blank-factor-automation/firefox/)
- [Landing Page](https://jonathangar.github.io/blank-factor-automation/)

You can view each test report directly in your browser. No need to download artifacts.

---

## Reporting Tools

This project uses [multiple-cucumber-html-reporter](https://www.npmjs.com/package/multiple-cucumber-html-reporter) for clean and navigable HTML output.

Reports are auto-generated in `cucumber-report/<browser_name>` folders and uploaded as artifacts in each CI run.

In order to generate the html report locally you can run the command:

```bash
npm run report:html
```

---

## ESLint Configuration

Linting is enforced using ESLint with rules tailored for **TypeScript**, **Playwright**, and test files.

Available scripts:
```bash
npm run lint
npm run lint:fix
```

---

## Pre-commit Hook (Husky)

[Husky](https://typicode.github.io/husky/#/) is integrated to prevent bad commits. It runs linting before each commit to ensure code quality.

To activate:
```bash
npx husky install
```

The hook runs:
```bash
npm run lint
```

before each `git commit`.

---

## Folder Structure

```text
src/
├── features/              # Gherkin feature files
├── steps/                 # Step definitions
├── pages/                 # Page Object Models
├── support/               # Custom World + Hooks
├── utils/                 # Helpers and config
generate-report.js         # HTML report generator
playwright.config.ts       # Browser settings and global setup
```

---

## License

This project is licensed under the ISC License.