import { restClient } from "../config/shopifyClient.js";


export async function createDiscount(priceRule, discountData) {
    const response = await restClient.post({ path: `/price_rules/${priceRule}/discount_codes`, data: { discount_code: discountData } });
    return response.body.discount_code;
}

export async function getDiscount() {
    const response = await restClient.get({ path: '/discount_codes/count.json' });
    return response.body.count;

}

export async function updateDiscount(priceRule, discountId, discountData) {
    console.log(priceRule, discountId, discountData)
    const response = await restClient.put({
        path: `price_rules/${priceRule}/discount_codes/${discountId}`,
        data: { discount_code: { id: discountId, ...discountData } }
    });
    return response.body.discount_code;

}