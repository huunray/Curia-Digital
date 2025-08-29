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

// stackbit.config.ts
import { defineStackbitConfig } from "@stackbit/types";
import { GitContentSource } from "@stackbit/cms-git";

export default defineStackbitConfig({
  stackbitVersion: "~0.6.0",
  contentSources: [
    new GitContentSource({
      rootPath: __dirname,
      contentDirs: ["content"],
      models: [
        {
          name: "Page",
          type: "page",
          urlPath: "/{slug}",
          filePath: "content/pages/{slug}.json",
          fields: [{ name: "title", type: "string", required: true }]
        }
      ],
      assetsConfig: {
        referenceType: "static",
        staticDir: "public",
        uploadDir: "images",
        publicPath: "/"
      }
    })
  ]
});