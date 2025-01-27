import {Ajax} from "../../modules/ajax.js";
import {Urls} from "../../modules/urls.js";
import {groupId} from "../../modules/consts.js";
import {HumanCard} from "../card_page/HumanCard.js";

export class MainPage{
    constructor(parent){
        this.parent = parent
        this.ajax = new Ajax();
        this.urls = new Urls();
    }
    get pageRoot() {
        return document.getElementById('root')
    }

    getData(){        
        let xhr = new XMLHttpRequest()
        xhr.open('GET', 'http://localhost:8000/vk')
        xhr.send()
        xhr.onload = () =>{
            this.renderItem(JSON.parse(xhr.response))
        }
    }
     
    renderItem(items) {
        let card;
        const page = this.pageRoot
        items.forEach(el => {
            console.log(el)
            card = new HumanCard(page, el)
            card.render(false)
        });
        document.getElementById("up").onclick = function(){
            document.getElementById("root").innerHTML = ''
            items = items.sort((a, b) => parseFloat(a.id) - parseFloat(b.id))
            items.forEach(el => {
                card = new HumanCard(page, el)
                card.render(false)
            });
        }
        document.getElementById("down").onclick = function(){
            document.getElementById("root").innerHTML = ''
            items = items.sort((a, b) => parseFloat(b.id) - parseFloat(a.id))
            items.forEach(el => {
                card = new HumanCard(page, el)
                card.render(false)
            });
        }
    }
    
    render() {
        this.parent.innerHTML = ''
        this.getData()
    }
}