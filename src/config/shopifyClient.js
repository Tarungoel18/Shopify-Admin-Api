import { shopifyApi } from "@shopify/shopify-api";
import '@shopify/shopify-api/adapters/node';

const shopify = shopifyApi({
    apiKey: process.env.SHOPIFY_API_KEY,
    apiSecretKey: process.env.SHOPIFY_API_SECRET,
    hostName: process.env.SHOPIFY_HOST_NAME,
    apiVersion: process.env.SHOPIFY_API_VERSION,
    isEmbeddedApp: false,
});

export const restClient = new shopify.clients.Rest({
    session: {
        shop: process.env.SHOPIFY_SHOP,
        accessToken: process.env.SHOPIFY_ACCESS_TOKEN,
    },
});