# Deploying

Congratulations 🥳 finishing your kyrix project.

Deploying with **Kryix** is very easy.

## Pre-checking

It's always good to check for any linting issues or typescript errors early.

### Run:

```sh
npm lint
```
**AND**

```sh
npm run tsc
```

If the terminal is clean, proceed to the next step else debug and fix the errors.

## Build your app

```sh
npm run build
```

Vite will build your entire server and client bundle and output in a single `dist` folder.

**You only need this dist folder to run your app in any node.js environment.**


## Start in production

```sh
npm start
```