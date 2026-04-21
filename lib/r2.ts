import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";

let client: S3Client | null = null;

function getClient(): S3Client {
  if (client) return client;
  const endpoint = process.env.R2_ENDPOINT;
  const accessKeyId = process.env.R2_ACCESS_KEY_ID;
  const secretAccessKey = process.env.R2_SECRET_ACCESS_KEY;
  if (!endpoint || !accessKeyId || !secretAccessKey) {
    throw new Error("R2_ENDPOINT, R2_ACCESS_KEY_ID, and R2_SECRET_ACCESS_KEY must be set");
  }
  client = new S3Client({
    region: "auto",
    endpoint,
    credentials: {
      accessKeyId,
      secretAccessKey,
    },
  });
  return client;
}

export async function uploadToR2(opts: {
  fileName: string;
  contentType: string | null;
  bytes: Buffer;
}): Promise<string> {
  const bucket = process.env.R2_BUCKET_NAME;
  const publicBase = process.env.R2_PUBLIC_BASE_URL;
  if (!bucket || !publicBase) {
    throw new Error("R2_BUCKET_NAME and R2_PUBLIC_BASE_URL must be set");
  }

  const safeBaseName = opts.fileName.replace(/[^a-zA-Z0-9.-]/g, "_");
  const key = `uploads/${Date.now()}-${safeBaseName}`;

  const s3 = getClient();

  await s3.send(
    new PutObjectCommand({
      Bucket: bucket,
      Key: key,
      Body: opts.bytes,
      ContentType: opts.contentType ?? undefined,
    }),
  );

  const base = publicBase.replace(/\/+$/, "");
  return `${base}/${key}`;
}

