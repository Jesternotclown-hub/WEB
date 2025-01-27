const {StocksService} = require('./StocksService.js');

class StocksController {
    static findStocks(req, res) {
        try {
            
            res.send(StocksService.findStocks());
            
        } catch (err) {
            res.status(400).send({status: 'Bad Request', message: err.message})
        }
    }

    static findStockById(req, res) {
        try {
            const id = Number.parseInt(req.params.id);
            res.send(StocksService.findStocks(id))
        } catch (err) {
            res.status(400).send({status: 'Bad Request', message: err.message})
        }
    }

    static addStock(req, res) {
        
        try {
            
            StocksService.addStock(req.body);
        } catch (err) {
            
            res.status(400).send({status: 'Bad Request', message: err.message})
        }
    }

    static deleteStock(req, res) {
        try {
            const id = Number.parseInt(req.params.id);
            StocksService.deleteStock(id);
            res.redirect("http://127.0.0.1:5500/lab3/")
        } catch (err) {
            res.status(400).send({status: 'Bad Request', message: err.message})
        }
    }
}

module.exports = {
    StocksController,
};