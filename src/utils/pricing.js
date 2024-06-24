const basic_price = 10;
const min_base_price_factor = 0.7;
const decay_rate = 0.1;

function calculate_price(tier, durability) {
    if (!tier || !durability) return '-';
    const min_base_price = min_base_price_factor * basic_price;
    const days_factor = durability / 30;
    let base_price = basic_price * (1 - decay_rate * (days_factor - 1));
    base_price = Math.max(base_price, min_base_price);
    const final_price = base_price * tier * days_factor;
    return `$${final_price.toFixed(2)}`;
}