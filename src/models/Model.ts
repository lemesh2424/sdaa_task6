import { ExchangeRate, ExchangeRateDto } from "./ExchangeRate";

const fakeRates: ExchangeRateDto[] = [
    {
        exchangeTo: 'DM',
        rate: 1.96
    }
];

export default abstract class Model {
    exchangeRates: Array<ExchangeRate>;
    onRateChange: Function;

    constructor() {
        const rates: ExchangeRateDto[] = fakeRates;
        this.exchangeRates = rates.map((exchangeRate: ExchangeRateDto) => new ExchangeRate(exchangeRate));

        this._commit(this.exchangeRates);
    }
 
    bindRateChange(callback: Function) {
        this.onRateChange = callback;
    }

    _commit(exchangeRates: Array<ExchangeRate>): void {
        this.onRateChange(exchangeRates);
        localStorage.setItem('rates', JSON.stringify(exchangeRates));
    }
}