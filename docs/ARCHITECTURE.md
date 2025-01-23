# AdMirable – Architecture

**Overview**  
AdMirable captures advertisement revenue from participating websites and redirects it—via microtransactions—to user-selected charities. The solution is split into three main parts:

1. **Browser Extension**  
   - Detects ads, informs the backend about impressions or clicks, and optionally manages user authentication.

2. **Backend**  
   - Node.js/Express microservices connected to a MongoDB database.
   - Handles:
     - User authentication (JWT + bcrypt-based password hashing).
     - Donation tracking (records how much each user has donated).
     - Charity listing and potential partnership integrations.

3. **Frontend (Dashboard)**  
   - React-based interface for users to manage their profiles, view total donations, select charities, and more.

## High-Level Component Diagram

[Browser Extension] --(API calls)--> [Backend Services] --(DB queries)--> [MongoDB] ^ | [Frontend UI]

1. **Browser Extension**  
   - Sends ad detection events (impressions/clicks) to the backend.  
   - Holds minimal user session info (JWT) for authorized calls.

2. **Backend**  
   1. **Auth Service** – Validates user credentials, issues JWTs.  
   2. **Donation Service** – Records or aggregates user donations.  
   3. **Charity Service** – Manages official charities or fetches from external sources.  

3. **Frontend**  
   - React app with routes for Login, Register, Dashboard.  
   - Communicates with the backend over RESTful APIs (or GraphQL if extended).

## Data Flow Outline

1. **User Registration**  
   1. The user registers via the frontend or extension, sending `POST /api/auth/register` to the backend.  
   2. Backend stores the user's hashed password in the `User` collection.

2. **Login & JWT**  
   1. User logs in (`POST /api/auth/login`), obtains a JWT.  
   2. Extension or frontend stores the JWT (extension uses `chrome.storage.local`; frontend uses `localStorage`).

3. **Ad Detection**  
   1. Extension's `contentScript` identifies ad elements on a page.  
   2. Sends a message to the extension's background script, which calls `POST /api/tracking/ad` with relevant user/session info.

4. **Donation Flow**  
   1. (Optional) Users can donate manually or automatically.  
   2. `POST /api/donations` records a new donation transaction.  
   3. Aggregated metrics are fetched via `GET /api/donations/total` or user-specific endpoints.

## Database Schema (Simplified)

1. **User**  
   ```js
   {
     email: String,
     password: String,  // hashed via bcrypt
     createdAt: Date
   }
   ```

2. **Donation**
   ```js
   {
     userId: ObjectId,  // references User
     charityId: String, // or references a Charity model
     amount: Number,
     date: Date
   }
   ```
   (You can add or refine other collections as needed, e.g., Charity for more detailed info.)

## Future Extensions

- Real-time Ad Revenue Splitting: Directly integrate with ad networks' APIs.
- Microtransaction Layers: Use stablecoins, Bitcoin Lightning, or any other low-fee payment method.
- Machine Learning: Suggest relevant charities to users based on preferences or browsing habits.
- Blockchain-based Audit: Record all donation transactions on a public or permissioned ledger for transparency.