/**
 * One-time setup: creates admin_users table and seeds one admin from .env.local
 * Run: node scripts/seed-admin.js
 */
const fs = require("fs");
const path = require("path");
const { Pool } = require("pg");
const bcrypt = require("bcryptjs");

// Load .env.local
const envPath = path.join(__dirname, "..", ".env.local");
if (fs.existsSync(envPath)) {
  const content = fs.readFileSync(envPath, "utf-8");
  content.split("\n").forEach((line) => {
    const match = line.match(/^([^#=]+)=(.*)$/);
    if (match) process.env[match[1].trim()] = match[2].trim();
  });
}

const DATABASE_URL = process.env.DATABASE_URL;
const ADMIN_EMAIL = process.env.ADMIN_EMAIL;
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;

if (!DATABASE_URL) {
  console.error("Missing DATABASE_URL in .env.local");
  process.exit(1);
}

if (!ADMIN_EMAIL || !ADMIN_PASSWORD) {
  console.log(
    "ADMIN_EMAIL/ADMIN_PASSWORD not set; skipping admin seed. To seed an admin, set these in .env.local and re-run."
  );
  process.exit(0);
}

async function main() {
  const pool = new Pool({ connectionString: DATABASE_URL });
  try {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS admin_users (
        id SERIAL PRIMARY KEY,
        email TEXT NOT NULL UNIQUE,
        password_hash TEXT NOT NULL
      );
    `);
    await pool.query(`
      CREATE INDEX IF NOT EXISTS idx_admin_users_email_lower
      ON admin_users (LOWER(email));
    `);
    const hash = await bcrypt.hash(ADMIN_PASSWORD, 10);
    await pool.query(
      `INSERT INTO admin_users (email, password_hash) VALUES ($1, $2)
       ON CONFLICT (email) DO UPDATE SET password_hash = EXCLUDED.password_hash`,
      [ADMIN_EMAIL.toLowerCase().trim(), hash]
    );
    console.log("Admin user ready:", ADMIN_EMAIL);
  } finally {
    await pool.end();
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
