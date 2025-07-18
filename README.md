# Excalidraw Clone (Turborepo Monorepo)

This is a **Turborepo-based monorepo** project for building an **Excalidraw clone** as a full-stack learning sandbox. It leverages modern tooling like **Vite**, **Next.js**, **Prisma**, **WebSockets**, **Zod**, and more to create a scalable, performant, and typed drawing application.

---

## 🧱 Tech Stack

### Frontend

- **Vite** — fast dev server for local development
- **Next.js** — for static/SSR capabilities (e.g. auth, docs)
- **React** — UI library
- **TypeScript** — type safety across codebase
- **Tailwind CSS** — utility-first styling

### Backend

- **Prisma** — ORM for PostgreSQL
- **PostgreSQL (via Neon)** — database
- **WebSocket (WS)** — real-time collaboration
- **Zod** — input validation and parsing
- **Express/HTTP** — REST endpoints (optional)

### Dev Tooling

- **Turborepo** — build system & task runner
- **ESLint** — linting
- **Prettier** — code formatting
- **TypeScript Configs** — shared tsconfig across packages

---

## 📦 Packages & Apps

```
/apps
  web       → Vite app (Excalidraw clone frontend)
  docs      → Next.js docs app
/packages
  @repo/ui               → Shared React UI components
  @repo/eslint-config    → Shared ESLint config
  @repo/typescript-config → Shared tsconfig.json
  @repo/db               → Prisma schema and database client
  @repo/ws-server        → WebSocket backend server
  @repo/http-backend     → REST/Express API (optional)
```

---

## 🚀 Getting Started

```bash
npx create-turbo@latest
```

Then clone this repo or copy structure and install dependencies:

```bash
pnpm install
```

---

## 🔧 Common Commands

### Build everything

```bash
pnpm turbo build
```

### Dev mode for all apps

```bash
pnpm turbo dev
```

### Dev a specific app

```bash
pnpm turbo dev --filter=web
```

### Run Prisma migration

```bash
cd packages/db
npx prisma migrate dev --name init
```

### Run WebSocket server

```bash
pnpm --filter=@repo/ws-server dev
```

---

## 🧠 Project Goals

- ✅ Learn and use **Turborepo** effectively
- ✅ Build real-time collaboration with **WebSockets**
- ✅ Use **PostgreSQL (Neon)** and **Prisma** to manage data
- ✅ Validate inputs using **Zod**
- ✅ Organize scalable monorepo structure
- ✅ Share code & types across apps/packages

---

## 📡 Remote Caching with Vercel

Enable remote caching for faster CI/CD by logging into your Vercel account:

```bash
npx turbo login
npx turbo link
```

More: [https://turborepo.com/docs/core-concepts/remote-caching](https://turborepo.com/docs/core-concepts/remote-caching)

---

## 📚 Resources

- [Turborepo Docs](https://turborepo.com/docs)
- [Prisma Docs](https://www.prisma.io/docs)
- [Zod Docs](https://zod.dev)
- [WebSocket Guide](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API)
- [Neon DB](https://neon.tech/)
- [Excalidraw Open Source](https://github.com/excalidraw/excalidraw)

---

## 🙌 Contributions

This project is for **learning purposes**, but PRs, ideas, or suggestions are always welcome!
