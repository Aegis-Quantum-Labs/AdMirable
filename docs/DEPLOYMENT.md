# AdMirable – Deployment Guide

## 1. Prerequisites

- **Node.js** (v14+) and **npm** or **yarn**
- **MongoDB** (local or hosted, e.g., MongoDB Atlas)
- **Docker** and **Docker Compose** (optional, if containerizing)

## 2. Local Deployment

1. **Clone the Repository**  
   ```bash
   git clone https://github.com/your-username/admirable.git
   cd admirable
   ```

2. **Setup Backend**
   ```bash
   cd backend
   npm install
   # Create and populate .env (e.g., PORT=4000, DB_URL=mongodb://localhost:27017/admirable-db, JWT_SECRET=secret)
   npm run dev
   ```
   The backend should be available at http://localhost:4000.

3. **Setup Frontend**
   ```bash
   cd ../frontend
   npm install
   npm start
   ```
   The frontend should be available at http://localhost:3000.

4. **Browser Extension**
   - No special build step if using vanilla JS.
   - In Chrome/Brave/Edge, enable "Developer Mode" and use "Load unpacked" to load the `extension/` folder.

## 3. Docker Deployment

If you have the root-level `docker-compose.yml`:
```bash
docker-compose up --build
```

This command builds:
- `admirable-backend` (exposed on port 4000)
- `admirable-frontend` (exposed on port 3000)
- MongoDB (exposed on port 27017 but internal unless mapped externally)

After successful startup:
- Backend: http://localhost:4000
- Frontend: http://localhost:3000

## 4. Production Recommendations

- **Managed Database**: Use MongoDB Atlas or another cloud DB.
- **Reverse Proxy**: Terminate SSL and route traffic (e.g., Nginx, AWS ALB, or Kubernetes Ingress).
- **Scaling**: Consider container orchestration (Kubernetes) or a PaaS (Heroku, AWS ECS).
- **Secrets Management**: Use environment variables carefully. Consider secure vault solutions for JWT secrets.
- **Monitoring**: Tools like Prometheus + Grafana or DataDog to track logs and system metrics.

## 5. Example Kubernetes Deployment (Optional)

(You can expand the docs with .yaml examples for each microservice, but that's outside the scope of this file.)