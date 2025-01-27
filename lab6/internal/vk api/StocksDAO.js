const { text } = require('express');
const {StockRepository} = require('./StocksRepository.js');

class StockDAO{
    constructor(id, src, alt, title, text){
        this.id = id;
        this.src = src;
        this.alt = alt;
        this.title = title;
        this.text = text;
    }

    static _validateId(id){
        const numberId = parseInt(id);
        if(Number.isNaN(numberId)){
            throw new Error('invalid id');
        }
    }

    static _validate(stock){
        if(stock.id === undefined || stock.src === undefined || stock.alt === undefined || stock.title === undefined || stock.text === undefined){
            throw new Error('Invalid stock data');
        }
        this._validateId(stock.id);
    }

    static find(){
        const stock = StockRepository.read();

        return stock.map(({id, src, alt, title, text})=>{
            return new this(id, src, alt, title, text)
        });
    }

    static findById(id){
        this._validateId(id);

        const stocks = StockRepository.read();
        const stock = stocks.find((s) => s.id === id);
        return new this(stock.id, stock.src, stock.alt, stock.title, stock.text);
    }

    static insert(stock){
        stock.id = parseInt(stock.id)
        this._validate(stock);
        stock.id = parseInt(stock.id)
        const stocks = StockRepository.read();
        
        StockRepository.write([...stocks, stock]);
        return new this(stock.id, stock.src, stock.alt, stock.title, stock.text);
    }

    static delete(id) {
        this._validateId(id);

        const stocks = StockRepository.read();
        const filteredStocks = stocks.filter((s) => s.id !== id);

        StockRepository.write(filteredStocks);

        return filteredStocks.map(({id, src, alt, title, text}) => {
            return new this(id, src, alt, title, text);
        });
    }

    toJSON() {
        return {
            id: this.id,
            src: this.src,
            alt: this.alt,
            title: this.title,
            text: this.text,
        }
    }
}

module.exports = {
    StockDAO
}