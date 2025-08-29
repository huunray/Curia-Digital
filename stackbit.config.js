import { ContentfulContentSource } from "@stackbit/cms-contentful";

import { ContentfulContentSource } from "@stackbit/cms-contentful";

import { ContentfulContentSource } from "@stackbit/cms-contentful";

new ContentfulContentSource({
  spaceId: "l6ndvf8nwdyg",
  environment: "master-2025-08-27",
  previewToken: "HCbDkRzozrMb89p4bayZkMksBckUHnbL6OpyfiOkyaM",
  accessToken: "HCbDkRzozrMb89p4bayZkMksBckUHnbL6OpyfiOkyaM",
  useWebhookForContentUpdates: true,
});

export default {
  stackbitVersion: "~0.6.0",
  ssgName: "nextjs",
  nodeVersion: "16",
  contentSources: [
    new ContentfulContentSource({
      spaceId: process.env.CONTENTFUL_SPACE_ID,
      environment: process.env.CONTENTFUL_ENVIRONMENT,
      previewToken: process.env.CONTENTFUL_PREVIEW_TOKEN,
      accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
    }),
  ],
  models: {
    page: { type: "page", urlPath: "/{slug}" },
  },
};
