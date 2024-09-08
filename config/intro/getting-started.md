# Getting Started

## Installation

## Prerequisites

- <a href='https://nodejs.org' target='__blank'>Node.js</a> version 18 or higher.

You can install kyrix with our CLI.

```sh
# npm
npx create-kyrix-app my-app
# pnpm
pnpx create-kyrix-app my-app
# yarn
yarn create-kyrix-app my-app
# bun
bunx create-kyrix-app my-app
```

## Setup Wizard

Use our CLI to bootstrap a kyrix project with your choice of configuration.

```sh
Creating the Kyrix app in my-app...
│
◇  Do you want to connect the Kyrix app with a database?
│  • Yes  • No
│
◇  Choose your database connection:
│  1. PostgreSQL+Prisma
│  2. Mongodb+Mongoose
│
◇  Do you want to use Docker?
│  • Yes  • No
Please run npm install in the my-app directory to install the new dependencies.
```

## Folder Structure

```
.
├─ docs
│  ├─ .vitepress
│  │  └─ config.js
│  ├─ api-examples.md
│  ├─ markdown-examples.md
│  └─ index.md
└─ package.json
TODO: update this later.
```

## Setup enivronment

```env
SERVER_PORT=3000 # or any port
```
