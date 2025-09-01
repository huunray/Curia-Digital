// src/_data/posts.js
const contentful = require("contentful");

// dotenv is already loaded in .eleventy.js, but this is harmless if it runs twice
try {
  require("dotenv").config();
} catch {}

module.exports = async function () {
  const {
    CONTENTFUL_SPACE_ID,
    CONTENTFUL_DELIVERY_TOKEN,
    CONTENTFUL_TYPE_ID = "post",
    CONTENTFUL_ENV = "master",
  } = process.env;

  // If keys are missing, don't crash the build
  if (!CONTENTFUL_SPACE_ID || !CONTENTFUL_DELIVERY_TOKEN) {
    console.warn(
      "[posts] Missing env vars (CONTENTFUL_SPACE_ID, CONTENTFUL_DELIVERY_TOKEN). Returning empty list."
    );
    return [];
  }

  const client = contentful.createClient({
    space: CONTENTFUL_SPACE_ID,
    accessToken: CONTENTFUL_DELIVERY_TOKEN,
    environment: CONTENTFUL_ENV,
  });

  // Start with a minimal query to avoid field/order issues
  const res = await client.getEntries({
    content_type: CONTENTFUL_TYPE_ID, // set in .env (e.g. blogPost)
    order: "-sys.createdAt",
  });

  return res.items.map((i) => {
    const f = i.fields || {};
    const img = f.coverImage?.fields?.file?.url
      ? `https:${f.coverImage.fields.file.url}`
      : "";
    return {
      title: f.title || i.sys.id,
      slug: f.slug || i.sys.id,
      excerpt: f.excerpt || "",
      date: f.publishedDate || i.sys.createdAt,
      image: img,
      body: f.body || null,
    };
  });
};
