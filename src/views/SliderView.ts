import { ExchangeRate } from "../models/ExchangeRate";
import View from "./View";

export default class SliderView extends View {
    root: HTMLDivElement;

    constructor(root: HTMLDivElement) {
        super();
    }

    displayRates(exchangeRates: ExchangeRate[]): void {

    }
}