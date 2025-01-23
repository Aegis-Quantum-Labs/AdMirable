# AdMirable

AdMirable is an open-source platform that transforms everyday ad views into charitable micro-donations. By installing the AdMirable browser extension and creating an account, users seamlessly redirect the ad revenue they generate to vetted charities—helping do good without directly spending money out of pocket.

> **Key Features**
> - Browser Extension for ad detection and user settings
> - Backend services (Node.js/Express) to handle authentication, donation tracking, and charity data
> - React Frontend (Dashboard) for users to manage their profiles, track donations, and select charities
> - Secure (JWT-based authentication, hashed passwords, robust data models)

## Table of Contents

1. [Project Structure](#project-structure)
2. [Getting Started](#getting-started)
3. [Usage](#usage)
4. [Documentation](#documentation)
5. [Contributing](#contributing)
6. [License](#license)

## Project Structure

A simplified layout of the repository is as follows:

```
admirable/
├── backend/
│   ├── app.js
│   ├── server.js
│   ├── config/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   └── ...
├── frontend/
│   ├── public/
│   ├── src/
│   └── ...
├── extension/
│   ├── manifest.json
│   ├── src/
│   └── ...
├── docs/
│   ├── ARCHITECTURE.md
│   ├── CONTRIBUTING.md
│   ├── DEPLOYMENT.md
│   └── ROADMAP.md
├── docker-compose.yml
├── README.md
└── ...
```

- `backend/` – Node.js/Express services for user auth, donations, charities, etc.
- `frontend/` – React app (dashboard) enabling users to log in, see stats, and manage settings.
- `extension/` – Browser extension code (JS/HTML/CSS) that detects ads and communicates with the backend.
- `docs/` – Additional documents for architecture, deployment, roadmap, and contribution guidelines.

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/Aegis-Quantum-Labs/AdMirable.git
cd admirable
```

### 2. Install Dependencies

Backend:
```bash
cd backend
npm install
```

Frontend:
```bash
cd ../frontend
npm install
```

(The extension doesn't require a build step unless you add bundling tools.)

### 3. Environment Setup

Create a `.env` file in `backend/` with contents like:

```
PORT=4000
DB_URL=mongodb://localhost:27017/admirable-db
JWT_SECRET=YOUR_SUPER_SECURE_KEY
```

Run MongoDB locally or adjust DB_URL for an external/hosted MongoDB instance.

### 4. Run Locally

Backend (from `backend/` folder):
```bash
npm run dev
```
This starts the Express server at http://localhost:4000.

Frontend (from `frontend/` folder):
```bash
npm start
```
Opens the React app at http://localhost:3000.

### 5. Install the Extension

1. Go to `chrome://extensions` (or your browser's equivalent).
2. Enable Developer Mode.
3. Click "Load unpacked" and choose the `extension/` folder.
4. The AdMirable icon should appear in your browser toolbar.

## Usage

### 1. Register & Log In

- Navigate to http://localhost:3000/register (or the register page in your deployed URL).
- Create an account.
- Log in to retrieve your JWT (stored automatically in the frontend or the extension).

### 2. View Dashboard

Access http://localhost:3000/dashboard to see total donations and manage your settings (e.g., charities, user profile).

### 3. Browser Extension

- The extension is enabled by default.
- It detects ad placements on pages and sends relevant data to the backend (e.g., impressions).
- Ad revenue can then be allocated toward your selected charities—see `docs/ARCHITECTURE.md` for more details.

### 4. Donations

- AdMirable can record micro-donations or track manual contributions.
- The total donated is visible in the dashboard under "My Donations."

## Documentation

For in-depth details, please consult the files in the `docs/` directory:

- `ARCHITECTURE.md` – High-level system architecture, data flows, and design principles.
- `DEPLOYMENT.md` – Guidelines for containerization, cloud deployment, environment variables, etc.
- `ROADMAP.md` – Future plans, upcoming milestones, feature ideas.
- `CONTRIBUTING.md` – How to fork, branch, code, and submit PRs.

## Contributing

We welcome contributions from the open-source community! If you'd like to help:

1. Fork the repository and create a feature branch (`git checkout -b feature/my-idea`).
2. Add or modify code.
3. Create a Pull Request with a clear description of your changes.
4. Please see `CONTRIBUTING.md` for more details on style and process.

## License

AdMirable is released under the MIT License. By contributing to this project, you agree that your contributions will be licensed under the same open-source license.

**Enjoy building a more philanthropic internet with AdMirable!**.
