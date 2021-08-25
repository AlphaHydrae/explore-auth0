# Explore Auth0

An Angular application demonstrating [Auth0](https://auth0.com) integration.

## Requirements

* A configured [Auth0](https://auth0.com) application as per the [Angular SPA
  quickstart](https://auth0.com/docs/quickstart/spa/angular)
* [Node.js](https://nodejs.org) 16.x

## Usage

Clone this repository and install dependencies:

```bash
git clone https://github.com/AlphaHydrae/explore-auth0.git
cd explore-auth0
npm ci
```

Create a `.env` file then edit it to fill in your Auth0 domain and client ID:

```bash
cp .env.sample .env
```

Start the application:

```bash
npm start
```

Visit http://localhost:4200.
