import { ExchangeRate } from "../models/ExchangeRate";
import Model from "../models/Model";
import View from "../views/View";

export class ExchangeController {
    constructor(private exchangeModel: Model, private exchangeView: View) {
        this.exchangeModel.bindRateChange(this.onRateChanged);
    }

    onRateChanged = (exchangeRates: ExchangeRate[]) => {
        this.exchangeView.displayRates(exchangeRates);
    }
}