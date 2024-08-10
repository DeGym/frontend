const BASE_MONTHLY_PRICE = 15;
const MIN_PRICE_FACTOR = 0.7;
const PRICE_DECAY_RATE = 0.1;

export default function calculate_price(tier, durability) {
    if (!tier || !durability) return '-';
    const min_base_price = MIN_PRICE_FACTOR * BASE_MONTHLY_PRICE;
    const days_factor = durability / 30;
    let base_price = BASE_MONTHLY_PRICE * (1 - PRICE_DECAY_RATE * (days_factor - 1));
    base_price = Math.max(base_price, min_base_price);
    const final_price = base_price * tier * days_factor;
    return final_price.toFixed(2);
}
