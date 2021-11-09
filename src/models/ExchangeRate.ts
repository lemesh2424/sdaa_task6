export interface ExchangeRateDto {
    exchangeTo: string;
    rate: number;
}

export class ExchangeRate {
    private readonly DEFAULT_EURO = 100;

    public exchangeTo: string;
    public rate: number;
    public fromResult: number;
    public toResult: number;

    constructor(
        {exchangeTo, rate}: ExchangeRateDto = {exchangeTo: '', rate: 0}
    ) {
        this.exchangeTo = exchangeTo;
        this.rate = rate;

        this.fromResult = this.DEFAULT_EURO;
        this.toResult = this.fromResult * this.rate;
    }

    changeFromResult(fromResult: number) {
        this.fromResult = fromResult;
        this.toResult = this.fromResult * this.rate;
    }

    changeToResult(toResult: number) {
        this.toResult = toResult;
        this.fromResult = this.toResult / this.rate;
    }
}