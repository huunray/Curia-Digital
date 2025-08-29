import { ContentfulContentSource } from "@stackbit/cms-contentful";

export default {
  stackbitVersion: "~0.6.0",
  ssgName: "nextjs",
  nodeVersion: "16",
  contentSources: [
    new ContentfulContentSource({
      spaceId: process.env.l6ndvf8nwdyg,
      environment: process.env.T14-20-00-00Z,
      previewToken: process.env.HCbDkRzozrMb89p4bayZkMksBckUHnbL6OpyfiOkyaM,
      accessToken: process.env.MeuIve6xZrZf-U61rwW3A-zFfEfeFDXKk1ds6Xi-XLQ,
    }),
  ],
  models: {
    page: { type: "page", urlPath: "/{slug}" },
  },
};
