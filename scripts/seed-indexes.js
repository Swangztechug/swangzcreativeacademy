/**
 * Creates indexes on existing tables. Safe to run multiple times.
 * Run: node scripts/seed-indexes.js
 */
const fs = require("fs");
const path = require("path");
const { Pool } = require("pg");

const envPath = path.join(__dirname, "..", ".env.local");
if (fs.existsSync(envPath)) {
  const content = fs.readFileSync(envPath, "utf-8");
  content.split("\n").forEach((line) => {
    const match = line.match(/^([^#=]+)=(.*)$/);
    if (match) process.env[match[1].trim()] = match[2].trim();
  });
}

const DATABASE_URL = process.env.DATABASE_URL;
if (!DATABASE_URL) {
  console.error("Missing DATABASE_URL in .env.local");
  process.exit(1);
}

async function main() {
  const pool = new Pool({ connectionString: DATABASE_URL });
  try {
    await pool.query(`
      CREATE INDEX IF NOT EXISTS idx_admin_users_email_lower
      ON admin_users (LOWER(email));
    `);
    console.log("admin_users: idx_admin_users_email_lower");

    await pool.query(`
      CREATE INDEX IF NOT EXISTS idx_contact_submissions_created_at
      ON contact_submissions (created_at DESC);
    `);
    await pool.query(`
      CREATE INDEX IF NOT EXISTS idx_contact_submissions_read
      ON contact_submissions (read);
    `);
    console.log("contact_submissions: idx_contact_submissions_created_at, idx_contact_submissions_read");

    await pool.query(`
      CREATE INDEX IF NOT EXISTS idx_course_applications_created_at
      ON course_applications (created_at DESC);
    `);
    await pool.query(`
      CREATE INDEX IF NOT EXISTS idx_course_applications_status
      ON course_applications (status);
    `);
    await pool.query(`
      CREATE INDEX IF NOT EXISTS idx_course_applications_email
      ON course_applications (email);
    `);
    console.log("course_applications: idx_course_applications_created_at, idx_course_applications_status, idx_course_applications_email");

    console.log("Indexes ready.");
  } catch (err) {
    if (err.code === "42P01") {
      console.error("One or more tables missing. Run seed-admin, seed-contact-table, and seed-applications-table first.");
    }
    throw err;
  } finally {
    await pool.end();
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
