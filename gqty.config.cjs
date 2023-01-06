/**
 * @type {import("@gqty/cli").GQtyConfig}
 */
const config = {
  react: true,
  scalarTypes: { DateTime: "string" },
  introspection: {
    endpoint: process.env.FAUNA_URL_GRAPHQL,
    headers: {"Authorization": `Bearer ${process.env.FAUNA_DECHEA_ENV__ADMIN__TOKEN}`},
  },
  destination: "./src/gqty/index.ts",
  subscriptions: false,
  javascriptOutput: false,
  enumsAsConst: false,
};

module.exports = config;
