import { ExchangeRate } from "../models/ExchangeRate";
import View from "./View";

interface Input {
    key: string;
    type: string;
    placeholder: string;
    name: string;
}

export default class InputView extends View {
    private app: HTMLElement;
    private exchangeList: HTMLElement;

    constructor() {
        super();
        this.app = this.getElement('#root');

        this.exchangeList = this.createElement('ul', 'exchange-list');

        this.app.append(this.exchangeList);
    }

    private getElement(selector: string): HTMLElement {
        return document.querySelector(selector);
    }

    private createElement(tag: string, className?: string) {
        const element = document.createElement(tag);
    
        if (className) element.classList.add(className);
    
        return element;
    }

    private createInput(
        { key, type, placeholder, name }: Input = {
          key: 'default',
          type: 'text',
          placeholder: 'default',
          name: 'default'
        }
      ) {
        this[key] = this.createElement('input');
        this[key].type = type;
        this[key].placeholder = placeholder;
        this[key].name = name;
      }

    displayUsers(exchangeRates: ExchangeRate[]): void {

    }

    private createExchangeRate(exchangeRate: ExchangeRate): HTMLElement {
        const li = this.createElement('li');
        li.id = exchangeRate.exchangeTo;

        const title = this.createElement('p');
        title.textContent = exchangeRate.exchangeTo;

        const rateSpan = this.createElement('span');

        const rateTitle = this.createElement('span');
        rateTitle.textContent = '1 euro is ';

        rateSpan.append(rateTitle);

        li.append(title, rateSpan);

        return li;
    }
}