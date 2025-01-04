export const currencyConverter = (currency?: string): number => {
    if (!currency) return 0
    if (currency === "0") return parseInt(currency, 10)
    // Converts currency from string to number removing $ 
    return parseInt(currency.substring(1, currency.length) , 10)
}