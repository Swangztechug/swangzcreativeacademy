# Swangz Creative Academy

Next.js website for Swangz Creative Academy with an admin panel to edit content and images.

## Setup

1. **Install dependencies**

   ```bash
   npm install
   ```

2. **Configure environment (.env)**

   ```bash
   cp .env.example .env.local
   ```

   Edit `.env.local` and set at least:

   ```
   # PostgreSQL connection
   DATABASE_URL=postgres://user:password@localhost:5432/swangz_academy

   # Secret to sign admin session cookies
   AUTH_SECRET=change-me-to-a-long-random-string

   # Cloudflare R2 (for image uploads)
   R2_ENDPOINT=https://your-account-id.r2.cloudflarestorage.com
   R2_ACCESS_KEY_ID=your-r2-access-key-id
   R2_SECRET_ACCESS_KEY=your-r2-secret-access-key
   R2_BUCKET_NAME=your-r2-bucket-name
   R2_PUBLIC_BASE_URL=https://media.yourdomain.com

   # Redis (optional, for caching site content)
   REDIS_URL=redis://default:password@localhost:6379/0

3. **Create the admin user table and seed an admin (once)**

   Connect to your Postgres database (psql, TablePlus, etc.) and run:

   ```sql
   CREATE TABLE IF NOT EXISTS admin_users (
     id SERIAL PRIMARY KEY,
     email TEXT NOT NULL UNIQUE,
     password_hash TEXT NOT NULL
   );
   ```

   Then either:

   - Insert an admin user directly:

   ```sql
   INSERT INTO admin_users (email, password_hash)
   VALUES ('admin@example.com', '<bcrypt-hash-here>');
   ```

   - Or temporarily set `ADMIN_EMAIL` and `ADMIN_PASSWORD` in `.env.local` and run:

   ```bash
   npm run seed-admin
   ```

   Create the contact form submissions table (once):

   ```bash
   npm run seed-contact-table
   ```

4. **Run the dev server**

   ```bash
   npm run dev
   ```

   - **Site:** http://localhost:3000  
   - **Admin:** http://localhost:3000/admin (log in with the email/password you inserted into `admin_users`)

## What you can edit in the admin

The admin is organized **by page**: **Home**, **Courses**, **Tutors**, **About**, **Careers**, **Blog**, **Site**, and **Contact**. Under **Home** you edit Hero, Skills, Team, FAQs, Careers, Testimonials, and Blog. Under **Site** you edit the site name and footer. **Contact** shows all submissions from the public contact form (name, email, subject, message); you can mark them as read.

- **Site** – Site name (used in nav and footer)
- **Hero** – Headline, subheadline, and the three hero cards (text + image for each)
- **Skills** – Title, section image, stats, and feature list
- **Team** – Badge, title, subtitle, and team members (name, role, photo)
- **FAQs** – Title, subtitle, CTA, and all FAQ questions/answers
- **Careers** – Title, subtitle, and career items (title, description, salary)
- **Testimonials** – Section title and testimonial cards (quote, author, role, avatar image)
- **Blog** – Title, subtitle, CTA, and blog posts (title, excerpt, category, date, image)
- **Courses** – Title, subtitle, category tabs, and courses (title, description, image, duration, price, etc.)
- **Tutors** – Title, subtitle, and tutors (name, role, bio, photo, courses, badges)
- **About** – Title, subtitle, intro, mission, highlights, stats, values
- **Footer** – Tagline, newsletter text, contact (emails, phones, address), copyright, legal links

The public **Contact** page (`/contact`) has a form (name, email, subject, message) that submits to the API; submissions are stored in PostgreSQL and listed in the admin under **Contact**.

For any **image** field you can:

- Paste any image URL, or  
- Click **Upload** to choose a file; it is uploaded to your **Cloudflare R2** bucket and the public URL is set for you.

Changes are stored in `data/content.json`. In the dashboard you can **Save this section** (updates one section via API) or **Save all changes** (replaces full content). If `REDIS_URL` is set, site content reads are cached in Redis and automatically updated when you save.

### Admin CRUD API (authenticated)

All requests require an active admin session cookie.

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/admin/content` | Read full site content |
| PUT | `/api/admin/content` | Replace full site content (body: full JSON) |
| GET | `/api/admin/content/[section]` | Read one section (`site`, `hero`, `skills`, `team`, `faqs`, `careers`, `testimonials`, `blog`, `courses`, `tutors`, `about`, `footer`) |
| PUT | `/api/admin/content/[section]` | Update one section (body: section JSON) |

Example: `PUT /api/admin/content/hero` with body `{ "headline": "...", "subheadline": "...", "cards": [...] }` updates only the hero section.

## Production

1. **Environment**
   - Set `NODE_ENV=production` (or rely on your host).
   - Use a **strong `AUTH_SECRET`** (e.g. `openssl rand -hex 32`). Never use the example value.
   - Set `DATABASE_URL` to your production PostgreSQL.
   - Optionally set `REDIS_URL` for content caching and `R2_*` for image uploads.

2. **Database**
   - Run migrations/seeds once: `npm run seed-admin`, `npm run seed-contact-table`, `npm run seed-applications-table`, then `npm run seed-indexes`.
   - Remove `ADMIN_EMAIL` / `ADMIN_PASSWORD` from env after seeding (credentials live only in the DB).

3. **Build and run**
   ```bash
   npm run build
   npm start
   ```
   - Default port is 3000; set `PORT` if needed.

4. **Health check**
   - `GET /api/health` returns 200 when the app and database are reachable (for load balancers / uptime checks).

5. **Security**
   - The app sets security headers (X-Frame-Options, X-Content-Type-Options, Referrer-Policy, etc.) and uses `Secure` cookies in production.
   - Login and public forms (contact, course applications) are rate-limited per IP. For multi-instance or stricter limits, use Redis-based rate limiting or your platform’s edge limits.

## Tech stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- Content in `data/content.json` (editable via admin)
- Admin auth: email + password stored in PostgreSQL (`admin_users` table); signed session cookie for 24h after login

# swangzcreativeacademy
