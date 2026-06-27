# National Epoxy Pros

Pixel-match Next.js build for the National Epoxy Pros website and operating dashboard.

## Stack

- Next.js 14 App Router
- React 18
- Safe backend route handlers for digital bids, uploads, and project records
- Local/static data only until production integrations are explicitly approved

## Routes

- `/` homepage
- `/design-center`
- `/visualizer`
- `/products`
- `/dashboard`
- `/admin`
- `/owner`
- `/crew`
- `/projects`
- `/gallery`
- `/about`
- `/contact`

## Backend API

- `POST /api/bids`
- `GET /api/projects`
- `GET /api/uploads`
- `POST /api/uploads`

Production CRM, SMS, payment, database, and messaging integrations are intentionally approval-gated.
