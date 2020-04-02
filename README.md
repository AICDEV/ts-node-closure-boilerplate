## ts-node-closure-boilerplate

This is a simple boilerplate to start direct coding in typescript and run it with node.js. It's prepared for testing with jest and BDD with cucumber.

After first checkout or clonse please run `yarn`to install all required dependencies

## scripts

The following scripts are available

### start:dev

`yarn run start:dev`
Starts the index.ts with ts-node

### start:dev:watch

`yarn run start:dev:watch`
Starts the observer with nodemon and call start:dev if source change

### start

`yarn run start`
Starts the compiled output from lib/index.ts direct with node

### build

`yarn run build`
Creates a production bundle with typescript compiler and google closure compiler

### test

`yarn run test`
Starts all unit tests located in /**tests**

### test:integration

`yarn run test:integration`
Starts all integration tests located in /**integration**

### test:bdd

`yarn run test:bdd`
Starts all bdd tests located in /**bdd**
