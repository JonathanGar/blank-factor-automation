# blank-factor-automation

## Overview
This project is a setup for automated testing using Playwright with the Page Object Model (POM) design pattern and Cucumber BDD. It provides a structured way to organize tests and page interactions.


## Setup Instructions
1. Clone the repository:
   ```
   git clone <repository-url>
   cd blank-factor-automation
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Run the tests:
   ```
   npm run test:gherkin
   ```

### Environment Variables

Before running the tests, create a `.env` file at the root of the project based on the `.env.example` template:

```bash
cp .env.example .env
```

## ESLint Configuration

This project uses [ESLint](https://eslint.org/) with support for **TypeScript** and **Playwright** to ensure clean, consistent, and maintainable code.

### Available scripts

```bash
npm run lint
npm run lint:fix
```

## License
This project is licensed under the ISC License.