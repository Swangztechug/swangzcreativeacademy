/** @type {import('next').NextConfig} */
let r2Host = null;
try {
  if (process.env.R2_PUBLIC_BASE_URL) {
    r2Host = new URL(process.env.R2_PUBLIC_BASE_URL).hostname;
  }
} catch (_) {}

const r2Pattern = r2Host
  ? [{ protocol: "https", hostname: r2Host, pathname: "/**" }]
  : [];

const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com", pathname: "/**" },
      { protocol: "https", hostname: "i.pravatar.cc", pathname: "/**" },
      ...r2Pattern,
    ],
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
        ],
      },
    ];
  },
  poweredByHeader: false,
};

export default nextConfig;

