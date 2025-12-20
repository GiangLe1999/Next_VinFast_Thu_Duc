# GEMINI.md - Project Context

## Project Overview
This is a **Next.js 15.1.7** project using **TypeScript** and **App Router**, designed as a website for a VinFast dealership (likely VinFast Thu Duc). It features a full-stack architecture with **MongoDB** (Mongoose) for data persistence and **NextAuth.js** for authentication.

## Tech Stack
*   **Framework:** [Next.js](https://nextjs.org/) (v15.1.7) with Turbopack.
*   **Language:** TypeScript.
*   **Database:** MongoDB (via [Mongoose](https://mongoosejs.com/)).
*   **Authentication:** [NextAuth.js](https://next-auth.js.org/) (v4) using Credentials Provider and JWT strategy.
*   **State Management & Data Fetching:** [@tanstack/react-query](https://tanstack.com/query/latest).
*   **Styling:** [Tailwind CSS](https://tailwindcss.com/).
*   **Forms:** `react-hook-form` with `yup` validation.
*   **Assets:** [Cloudinary](https://cloudinary.com/) for image management.
*   **Fonts:** `next/font/google` (Mulish).
*   **Analytics:** Google Tag Manager & Google Analytics.

## Key Directories & Structure
*   **`app/`**: Main application routes (App Router).
    *   **(auth-pages)**: Login/Signup pages.
    *   **(protected-pages)**: Admin dashboard (`/admin`).
    *   **(public-pages)**: Public-facing pages (Home, Car details, News).
    *   `api/`: API routes (mainly `auth`).
*   **`actions/`**: Server Actions for data mutations (e.g., `car.actions.ts`, `article.actions.ts`). This is the primary way the frontend interacts with the backend logic.
*   **`components/`**: Reusable UI components, organized by feature/page.
    *   `contexts/`: Global providers (Session, React Query, Toast).
*   **`model/`**: Mongoose schemas (e.g., `Car.ts`, `User.ts`, `Article.ts`).
*   **`lib/`**: Utility libraries (DB connection `db.ts`, Cloudinary `cloudinary.ts`).
*   **`utils/`**: Helper functions and configurations (e.g., `authOptions.ts`).

## Development & Usage

### 1. Environment Setup
Ensure a `.env` file exists with the following keys (inferred):
*   `MONGODB_URI`: MongoDB connection string.
*   `NEXTAUTH_SECRET`: Secret for NextAuth.
*   `NEXTAUTH_URL`: Base URL (e.g., http://localhost:3000).
*   `CLOUDINARY_*`: Cloudinary credentials.

### 2. Scripts
*   **Run Development Server:**
    ```bash
    npm run dev
    ```
*   **Build for Production:**
    ```bash
    npm run build
    ```
*   **Start Production Server:**
    ```bash
    npm run start
    ```
*   **Lint Code:**
    ```bash
    npm run lint
    ```

### 3. Database & Models
*   The project uses Mongoose for Object Data Modeling (ODM).
*   Connection logic is in `lib/db.ts` using a cached connection pattern suitable for serverless/edge environments.
*   Models are defined in `model/*.ts`.

### 4. Authentication
*   Handled by `NextAuth.js` in `utils/authOptions.ts`.
*   Uses a custom `CredentialsProvider` that verifies against the MongoDB `User` collection using `bcrypt`.
*   Session strategy is `jwt`.

## Conventions
*   **Server Actions:** Prefer using Server Actions (`actions/*.ts`) for form submissions and data mutations over API routes.
*   **Client vs Server Components:** Note the use of `"use server"` at the top of action files and `"use client"` for interactive components.
*   **Styling:** Use Tailwind CSS utility classes.
*   **Routing:** Route groups (e.g., `(public-pages)`) are used to organize layouts without affecting the URL structure.
