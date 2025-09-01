const contentful = require("contentful");

exports.handler = async (event) => {
  try {
    const { slug } = event.queryStringParameters || {};
    if (!slug) return { statusCode: 400, body: "Missing slug" };

    const client = contentful.createClient({
      space: process.env.CONTENTFUL_SPACE_ID,
      accessToken: process.env.CONTENTFUL_PREVIEW_TOKEN,
      host: "preview.contentful.com",
    });

    const res = await client.getEntries({
      content_type: "post",
      "fields.slug": slug,
      limit: 1,
      include: 10,
    });

    if (!res.items.length) return { statusCode: 404, body: "Not found" };
    return {
      statusCode: 200,
      headers: { "content-type": "application/json" },
      body: JSON.stringify(res.items[0]),
    };
  } catch (e) {
    return { statusCode: 500, body: e.message };
  }
};
