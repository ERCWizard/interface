# ERCWizard Interface

An open source interface for ERCWizard -- a decentralized protocol for creating and deploying ERC Smart Contracts.

## Accessing the ERCWizard Interface

To access the ERCWizard Interface, visit [ercwizard.com](https://ercwizard.com).

## Run Locally

Clone the project

```bash
  git clone https://github.com/ERCWizard/interface.git
```

Go to the project directory

```bash
  cd interface
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`POLYGON_ALCHEMY_API_KEY`

`NEXT_PUBLIC_GOOGLE_ANALYTICS`

`TEST_PRIVATE_KEY`

## Running Tests

To run tests, run the following command

Use `cypress:open` for an interactive UI

```bash
  npm run cypress:open
```

Use `cypress:run` to run all cypress integration tests from the command line

```bash
  npm run cypress:run
```
