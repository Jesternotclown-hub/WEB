import {AssetsPage} from '../Assets/assets_page.js'
import {FinancePage} from '../finance/finance_page.js'
import {InvestPage} from '../investment/invest_page.js'
import { Data } from '../../components/main_page_data/Data.js'
import { cardPage } from '../cards/card.js'

export class MainPage{
    
    constructor(root){
        this.root = root
        
    }

    get pageRoot() {
        return document.getElementById('main-page')
    }
        
    getHTML() {
        return (
            `
                <div id="main-page" class="d-flex flex-wrap"><div/>
            `
        )
    }

    render = async () => {
        this.root.innerHTML = ''
        const html = this.getHTML()
        this.root.insertAdjacentHTML('beforeend', html)
        const page = this.pageRoot
        let response = await fetch('http://localhost:8000/stocks')
        let getData = await response.json()
        let id = 1
        getData.forEach(element => {
            const card = new cardPage(page, element, element.id)
            card.render(false)
            id += 1
        });
        id = 1     
    }
}