require("dotenv").config();
const contentful = require("contentful");

module.exports = async function () {
  const client = contentful.createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_DELIVERY_TOKEN,
  });

  const res = await client.getEntries({
    content_type: "post",
    order: "-fields.publishedDate",
  });

  return res.items.map((i) => ({
    title: i.fields.title,
    slug: i.fields.slug,
    excerpt: i.fields.excerpt || "",
    date: i.fields.publishedDate || i.sys.createdAt,
    image: i.fields.coverImage?.fields?.file?.url
      ? `https:${i.fields.coverImage.fields.file.url}`
      : "",
    body: i.fields.body || null,
  }));
};
