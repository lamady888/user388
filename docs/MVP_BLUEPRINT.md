# MVP Blueprint: Vendor ↔ Client Platform

## 1) Product Goal
Build a two-sided marketplace where clients can discover vendors, compare offerings, and send inquiries, while vendors can manage profiles/listings and respond to leads.

## 2) MVP Scope

### In Scope (v1)
- Authentication (email + password or magic link)
- Two roles: `vendor`, `client`
- Vendor profile creation/editing
- Vendor service listings (CRUD)
- Client search + filter + view listing details
- Inquiry flow (client sends inquiry, vendor responds)
- Basic messaging thread per inquiry
- Inquiry status tracking (`new`, `in_progress`, `closed`)

### Out of Scope (v1)
- Payments and escrow
- Advanced scheduling/calendar sync
- Dispute handling
- Recommendation engine
- Native mobile apps

## 3) Primary User Journeys

### A. Vendor onboarding and publish
1. Vendor signs up
2. Vendor completes profile
3. Vendor creates first listing
4. Listing is visible in search

### B. Client discovery and inquiry
1. Client signs up
2. Client searches listings by category/location/price range
3. Client opens listing detail
4. Client submits inquiry

### C. Vendor lead handling
1. Vendor receives inquiry notification
2. Vendor replies in thread
3. Vendor updates inquiry status
4. Inquiry is marked closed when resolved

## 4) Functional Requirements

### Auth & Access
- Users can register/login/logout
- Role-based permissions:
  - Vendor: manage own profile/listings, reply to inquiries on own listings
  - Client: browse/search listings, create inquiries, reply in own inquiry threads
  - Admin (internal): read-only moderation tools (optional internal panel)

### Vendor Profiles
- Fields: display name, company name, category, bio, service areas, hourly/project pricing, contact preferences
- Profile completeness indicator (optional)

### Listings
- Fields: title, description, category, location/service area, starting price, media URLs, status (`draft`, `published`)
- Vendor can create, edit, unpublish, delete own listings

### Search & Discovery
- Filter by category, location, price range
- Sort by newest (v1 default)
- Pagination

### Inquiries & Messaging
- Client can create inquiry from a listing
- One thread per inquiry, messages ordered by timestamp
- Participants: listing vendor + inquiry client
- Inquiry statuses: `new`, `in_progress`, `closed`

## 5) Non-Functional Requirements (MVP)
- Secure password handling or trusted auth provider
- Basic rate limiting on auth and inquiry endpoints
- Server-side authorization checks on all write actions
- Structured logging for key events (signup, listing publish, inquiry creation)
- Basic observability: error tracking + request logs

## 6) Suggested Technical Architecture

### Option A (fast path)
- Frontend: Next.js (App Router)
- Backend: Next.js API routes or separate Node service
- Database: PostgreSQL
- ORM: Prisma
- Auth: NextAuth / Clerk
- File/media: object storage (S3-compatible)

### Deployment
- Frontend/API: Vercel or Render
- DB: managed Postgres (Neon/Supabase/Render)

## 7) Data Model (Initial)

### `users`
- `id` (uuid, pk)
- `email` (unique)
- `password_hash` (nullable if external auth)
- `role` (`vendor` | `client` | `admin`)
- `created_at`, `updated_at`

### `vendor_profiles`
- `id` (uuid, pk)
- `user_id` (fk -> users.id, unique)
- `display_name`
- `company_name`
- `bio`
- `category`
- `service_areas` (json/text)
- `pricing_min`
- `created_at`, `updated_at`

### `client_profiles`
- `id` (uuid, pk)
- `user_id` (fk -> users.id, unique)
- `name`
- `location`
- `created_at`, `updated_at`

### `listings`
- `id` (uuid, pk)
- `vendor_id` (fk -> users.id)
- `title`
- `description`
- `category`
- `location`
- `starting_price`
- `status` (`draft` | `published` | `archived`)
- `created_at`, `updated_at`

### `inquiries`
- `id` (uuid, pk)
- `listing_id` (fk -> listings.id)
- `client_id` (fk -> users.id)
- `vendor_id` (fk -> users.id)
- `subject`
- `status` (`new` | `in_progress` | `closed`)
- `created_at`, `updated_at`

### `messages`
- `id` (uuid, pk)
- `inquiry_id` (fk -> inquiries.id)
- `sender_id` (fk -> users.id)
- `body`
- `created_at`

## 8) API Blueprint (v1)

### Auth
- `POST /api/auth/signup`
- `POST /api/auth/login`
- `POST /api/auth/logout`
- `GET /api/auth/me`

### Vendor profile
- `GET /api/vendors/:vendorId`
- `PUT /api/vendors/me`

### Listings
- `GET /api/listings`
- `POST /api/listings`
- `GET /api/listings/:id`
- `PUT /api/listings/:id`
- `DELETE /api/listings/:id`

### Inquiries
- `POST /api/listings/:id/inquiries`
- `GET /api/inquiries/me`
- `GET /api/inquiries/:id`
- `PATCH /api/inquiries/:id/status`

### Messages
- `GET /api/inquiries/:id/messages`
- `POST /api/inquiries/:id/messages`

## 9) Milestones

### Milestone 1 — Foundation (Week 1)
- Repo/app scaffold
- Auth + role model
- DB schema + migrations
- Basic CI (lint + tests)

### Milestone 2 — Marketplace Core (Week 2)
- Vendor profile CRUD
- Listings CRUD
- Public listing search/detail pages

### Milestone 3 — Lead Flow (Week 3)
- Inquiry creation
- Vendor/client inbox views
- Messaging + status updates

### Milestone 4 — Hardening (Week 4)
- Authorization audit
- Error handling and logging
- UX polish + seed/demo data

## 10) Acceptance Criteria for MVP
- Vendor can publish at least one listing.
- Client can discover listings and submit an inquiry.
- Vendor and client can exchange messages in inquiry thread.
- Inquiry can be moved through statuses and viewed in dashboards.
- Core flows work end-to-end in staging with seeded test accounts.

## 11) Immediate Next Tasks
1. Choose stack variant and lock decisions in an ADR.
2. Scaffold app + database migration setup.
3. Implement auth + role middleware.
4. Build listing CRUD and public search endpoint.
5. Implement inquiry + messaging endpoints and minimal UI.
