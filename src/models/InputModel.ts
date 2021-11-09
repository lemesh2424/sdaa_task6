import { ExchangeRate } from "./ExchangeRate";
import Model from "./Model";

export default class InputModel extends Model {
    constructor() {
        super();
    }

    editFromRate(fromResult: number) {
        this.exchangeRates = this.exchangeRates.map((exchangeRate: ExchangeRate) => {
            exchangeRate.changeFromResult(fromResult);
            return exchangeRate;
        });

        this._commit(this.exchangeRates);
    }
}