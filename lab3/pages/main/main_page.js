import {AssetsPage} from '../Assets/assets_page.js'
import {FinancePage} from '../finance/finance_page.js'
import {InvestPage} from '../investment/invest_page.js'
import { Data } from '../../components/main_page_data/Data.js'

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

    render() {
        const data = new Data()
        this.root.innerHTML = ''
        const html = this.getHTML()
        this.root.insertAdjacentHTML('beforeend', html)
        const page = this.pageRoot
        const getData = data.getData()

        const finance_page = new FinancePage(page, getData[0])
        finance_page.render(false)
       

        const invest_page = new InvestPage(page, getData[1])
        invest_page.render(false)
        

        const assets_page = new AssetsPage(page, getData[2])
        assets_page.render(false)        
    }
}