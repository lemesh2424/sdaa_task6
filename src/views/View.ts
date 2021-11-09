import { ExchangeRate } from "../models/ExchangeRate";

export default abstract class View {
    abstract displayRates(exchangeRates: ExchangeRate[]);
}