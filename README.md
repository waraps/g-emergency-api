# REST API g-emergency-api

g-emergency-api is REST API for the Galenos Emergency Platform.

## Installation

Use the package manager [npm](https://www.npmjs.com/) to install g-emergency-api.

```bash
npm install
```

## Set up

You need setup your own environment variables, for this, you go to .evn.example file and edit it. Once you finished, you need rename the file to .env

g-emergency-api makes use of MySql as database.

For a good test of g-emergency-api you first need to set the database. g-emergency-api makes use of the sequelize ORM.

### Migrations

```bash
sequelize db:migrate --url "mysql:root@localhost/g-emergency"
```

### Seed

```
sequelize db:seed:all --url "mysql:root@localhost/g-emergency"
```

## Usage

### Production

Go to the .env file and set the NODE_ENV variable value to "production".

```
NODE_ENV="production"
```

Then run

```
node index.js
```

### Development

Go to the .env file and set the NODE_ENV variable value to "development".

```
NODE_ENV="development"
```

Then run

```
npm run dev
```

Runs the app. Open http://localhost:5000/v1/api to view it in the browser.
