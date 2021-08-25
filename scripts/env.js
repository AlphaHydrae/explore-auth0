const chalk = require('chalk');
const { config: loadDotenv } = require('dotenv');
const { writeFileSync } = require('fs');
const { join: joinPath, relative: relativePath, resolve: resolvePath } = require('path');

const root = resolvePath(joinPath(__dirname, '..'));
const envFile = joinPath(root, 'src', 'environments', 'env.json');

loadDotenv();

const env = {
  auth0: {
    domain: process.env.EXPLORE_AUTH0_DOMAIN,
    clientId: process.env.EXPLORE_AUTH0_CLIENT_ID
  }
};

writeFileSync(envFile, JSON.stringify(env), 'utf8');
console.log(`${chalk.yellow('.env')} -> ${chalk.green(relativePath(root, envFile))}`);
