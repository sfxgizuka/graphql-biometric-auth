# NestJS GraphQL Auth API with Biometric Login

## ✨ Features

- **User Registration** (email & password)
- **Standard Login** (with hashed password verification)
- **Biometric Login** (using a simulated `biometricKey`)
- **GraphQL API** with Apollo Server (Code-first approach)
- **Prisma ORM** for database access
- **Jest Unit Testing** support

---

## 📚 Prerequisites

Ensure the following tools are installed:

- [Node.js](https://nodejs.org/) (v16 or higher)
- npm or yarn
- [PostgreSQL](https://www.postgresql.org/) or your preferred SQL DB
- [Nest CLI](https://docs.nestjs.com/cli/overview)
  ```bash
  npm i -g @nestjs/cli
  ```
- Docker (optional, for local DB setup)

---

## 📁 Project Setup

### 1. Clone the Repository
```bash
git clone <your-repo-url>
cd nest-auth-task
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Environment Variables
Create a `.env` file in the root directory:
```env
DATABASE_URL=postgresql://user:password@localhost:5432/dbname
JWT_SECRET=your_jwt_secret
```
Replace values accordingly.

---

## 🔧 Prisma Setup

### 1. Initialize Prisma (if needed)
```bash
npx prisma init
```

### 2. Define Your Data Model in `prisma/schema.prisma`
```prisma
model User {
  id           Int     @id @default(autoincrement())
  email        String  @unique
  password     String
  biometricKey String? @unique
}
```

### 3. Migrate Your Database
```bash
npx prisma migrate dev --name init
```

### 4. Generate Prisma Client
```bash
npx prisma generate
```

---

## 🚀 Run the Application

Start the development server:
```bash
npm run start:dev
```

GraphQL Playground will be available at:
```
http://localhost:3000/graphql
```

---

## 🧰 GraphQL Mutations

### ✉️ Register User
```graphql
mutation {
  register(
    input: {
      email: "biotest@example.com"
      password: "secret"
      biometricKey: "unique-bio-1234"
    }
  )
}
```

### 🔑 Standard Login
```graphql
mutation {
  login(input: {
    email: "example@mail.com",
    password: "securePassword123"
  })
}
```

### 🔴 Biometric Login
```graphql
mutation {
  biometricLogin(input: {
    biometricKey: "uniqueBiometricToken"
  })
}
```
> Note: The `biometricKey` is treated as a secure unique identifier.

---

## 💡 Testing

Run unit tests using Jest:
```bash
npm run test
```

---
