# Cynchronos Accounting System

Welcome to the Cynchronos Accounting System repository! This guide provides a high-level overview for contributors on how to get started, the requirements to run the project, and general expectations.

## 🚀 Getting Started

### Requirements

Before you begin, ensure you have the following installed on your local machine:
- **Node.js** (v18 or higher recommended)
- **pnpm** (Package manager used for this monorepo)
- **Docker** and **Docker Compose** (For running local databases and services)
- **Git**

### Installation

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd cynchronos-accounting-system
   ```

2. **Install dependencies:**
   This project uses `pnpm` workspaces. Install all dependencies from the root directory:
   ```bash
   pnpm install
   ```

3. **Environment Variables:**
   Copy the example environment file and configure it as needed:
   ```bash
   cp .env.example .env
   ```

### Execution

To run the project locally, follow these steps:

1. **Start infrastructure services:**
   Run the backend services (like databases) using Docker Compose:
   ```bash
   docker-compose up -d
   ```

2. **Run the development server:**
   This project uses Turborepo to manage tasks. To start the development servers across all apps and packages:
   ```bash
   pnpm run dev
   ```

## 🧠 What Contributors Need to Know

This repository is structured as a monorepo. Here is what you need to understand on a global scale:

- **Monorepo Architecture (`apps/` and `packages/`)**: We organize code into multiple applications and shared packages. Code sharing should be done through the `packages/` directory, while standalone services or frontends reside in `apps/`.
- **Turborepo (`turbo.json`)**: We use Turborepo to orchestrate our build, lint, and test scripts efficiently. Familiarize yourself with how turbo pipelines work.
- **Code Style and Formatting**: Please adhere to the project's linting and formatting rules. Always run `pnpm run lint` before committing your changes.

> [!WARNING]
> **Confidentiality Notice:** 
> The core business logic and system architecture details are highly confidential. As such, `ARCHITECTURE.md` contains sensitive proprietary information and is explicitly excluded from version control (via `.gitignore`). 
> **Do not commit or share `ARCHITECTURE.md` publicly.**

If you have any questions or need access to specific architectural documentation, please reach out to the project maintainers.
