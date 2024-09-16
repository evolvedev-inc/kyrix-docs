# Getting Started

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
 🚀 Welcome to Kyrix App Setup 🚀 
│
◇  Choose your package manager:
│  • pnpm  • npm • yarn • bun
│
◇  Do you want to include Tailwind CSS in your project?
│  • Yes  • No
│
◇  Do you want to connect the Kyrix app with a database?
│  • Yes  • No
│
◇  Choose your database connection:
│  1. PostgreSQL
│  2. MySQL
│  3. Mongodb
│
◇  ◆  Choose an ORM : (only for prostgres and mysql)
│  1. Prisma
│  2. Drizzle
│
◇  Do you want to use Docker?
│  • Yes  • No
Please run npm install in the my-app directory to install the new dependencies.
```

## Folder Structure

```sh
.
├── kyrix-app/
│   ├── packages/@kyrix/
│   │   ├── react
│   │   └── server
│   └── public/
│       └── src/
│           ├── components/
│           │   └── Link.tsx
│           ├── lib/
│           │   └── trpcClient.ts
│           ├── pages/
│           │   └── Home.tsx
│           └── server/
│               ├── trpc/
│               │   ├── routers/
│               │   │   └── kyrixRouter.ts 
│               │   ├── root.ts
│               │   └── trpc.ts
│               ├── SSR.ts
│               ├── env.ts
│               ├── main.ts
│               └── middlewares.ts
├── README.md
├── eslint.config.js
├── index.html
├── nodemon.json
├── package.json
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.server.ts
└── vite.config.ts
```

## Setup enivronment

```
SERVER_PORT=3000 # or any port
```

## Start Up

```sh
npm run dev
```
