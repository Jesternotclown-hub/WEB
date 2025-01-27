const{DBConnector} = require('../../modules/DBConnector.js') 

class StockRepository{
    static DBConnector = new DBConnector('stocks.json')

    static read(){
        const file = this.DBConnector.readFile();
        return JSON.parse(file)
    }

    static write(data){
        console.log(data)
        this.DBConnector.writeFile(JSON.stringify(data))
    }


}

module.exports = {
    StockRepository
}