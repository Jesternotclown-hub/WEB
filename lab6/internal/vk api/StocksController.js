const {StocksService} = require('./StocksService.js');
const {accessToken, version, groupId} = require('../../../lab5/modules/consts.js')

class StocksController {
    static findStocks = async (req, res) => {
        try {
            
            let commonInfo = `access_token=${accessToken}&v=${version}`
            let data = await(await (fetch(`https://api.vk.com/method//groups.getMembers?group_id=${groupId}&fields=photo_400_orig&${commonInfo}`))).json()
            console.log(data.response.items)
            res.send(data.response.items);
            
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