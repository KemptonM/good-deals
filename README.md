# Good Deals

## Overview

A **subscription-based investment opportunity directory** that aggregates passive investment opportunities across multiple asset classes (real estate, energy, private equity, etc.).

## MVP Features

### Essential Features

- **Landing Page** – Sample deals with limited details to attract subscriptions.
- **User Authentication** – User sign-up, login, and authentication.
- **Subscription Management** – Paywall access to full deal details (Stripe integration).
- **Deal Search & Filters** – Search deals by asset class, minimum investment, accreditation status, etc.
- **Deal & Sponsor Pages** – Each deal and sponsor has a dedicated page with relevant details.

### Future Features

- Sponsor pages with reviews (Google reviews and user reviews).
- Deal submission portal for sponsors.
- Automated deal aggregation (scraping/integration with investment platforms).

## Tech Stack

| Component  | Tech Stack |
|------------|-----------|
| **Frontend** | React (Next.js for SEO and SSR) |
| **Backend** | Node.js (Express) or Python (Django/FastAPI) |
| **Database** | PostgreSQL (for structured querying and search/filtering) |
| **Auth** | NextAuth.js, Auth0, or Firebase |
| **Payments** | Stripe (subscription management) |
| **Hosting** | Vercel (frontend), AWS/DigitalOcean (backend & DB) |
| **Scraping** (if needed) | Scrapy, BeautifulSoup, or third-party APIs |

## Database Schema

### Users Table

| id | name | email | password_hash | subscription_status | is_accredited |
|----|------|-------|---------------|--------------------|--------------|
| 1  | John Doe | john@example.com | (hashed) | active | true |

### Deals Table

| id | title | asset_class | min_investment | accredited_only | sponsor_id | description | deal_url | created_at |
|----|-------|-------------|---------------|----------------|------------|-------------|----------|------------|
| 1  | Energy Deal | Energy | $50,000 | true | 2 | Investment in solar farms | example.com | 2025-03-25 |

### Sponsors Table

| id | name | website | description | google_reviews | user_reviews |
|----|------|---------|-------------|----------------|--------------|
| 2  | Big Capital | bigcapital.com | Private equity firm | 4.5 | 4.3 |

## Development Plan

### Phase 1: Build Core App

#### Frontend:

- Next.js (React)
- Landing page
- Login/Register
- Subscription purchase page
- Deal listing page

#### Backend:

- Node.js + Express OR Django
- User authentication
- API routes for fetching deals
- Payment integration (Stripe)
- Database setup with PostgreSQL
  - Define models for Users, Deals, and Sponsors
  - Implement CRUD operations for deals and sponsors
  - Secure user data and subscription status

### Phase 2: Add Features

- Filters for deal searching
- Sponsor pages with user reviews
- Scraping/APIs for deal aggregation
- Advanced search & sorting
- Automated email notifications for new deals

## Deployment & Scaling

| Component | Deployment |
|-----------|-----------|
| **Frontend** | Deploy with Vercel |
| **Backend** | AWS Lambda (serverless) or DigitalOcean |
| **Database** | PostgreSQL on Supabase/AWS RDS |
| **Auth & Payments** | Auth0 + Stripe |

## Next Steps

1. **Agree on scope & MVP**
2. **Set up repo, build auth + basic frontend**
3. **Integrate Stripe for payments**
4. **Build backend for fetching & storing deals**
5. **Deploy MVP and test**
