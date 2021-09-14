# tp-opensource
## Pre-requisite
* Node.js and npm
* A local server to host the website locally

## Installation
Generate the node_modules files needed by running the `npm install` command.

We are going to need an API key for the Movie Database API. After creating an account on the [Movie DB website](https://www.themoviedb.org/), go to the parameters and generate a new API key.

You can then copy-paste the key inside of an .env file for the `API_KEY` environment variable.

## Server
We used ExpressJS. Express.js is a framework for building web applications based on Node.js. It is in fact the standard framework for server development in Node.js. 
Source: [Wikipedia](https://fr.wikipedia.org/wiki/Express.js)
 In order to start the server, you must already have the package installed. As it is already installed in the project dependencies, it will be installed with :
```bash npm install```


We used ExpressJS. Express.js is a framework for building web applications based on Node.js. It is in fact the standard framework for server development in Node.js. 
Source: [Wikipedia](https://fr.wikipedia.org/wiki/Express.js)
 In order to start the server, you must already have the package installed. As it is already installed in the project dependencies, it will be installed with :
```bash npm install ```

Initially, the port is defined on line 3 of the `server.js` file ( PORT = ... || 3000). However, it is possible to use a different one with the following example:
```bash PORT=9999 node server.js```
The command will change the constant on line 3 to the number you entered. In this case: 9999
Initially, the port is defined on line 3 of the `server.js` file ( PORT = ... || 3000). However, it is possible to use a different one with the following example:
