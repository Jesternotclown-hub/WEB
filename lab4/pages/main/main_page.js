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

    getData() {        
        this.ajax.post(this.urls.getGroupMembers(groupId), (data) => {
            this.renderItem(data.response.items, this.pageRoot)
        })
    }
 
    renderItem(items, page){
        document.getElementById("up").onclick = function(){
            
            document.getElementById("root").innerHTML = ''
            items = items.sort((a, b) => parseFloat(a.id) - parseFloat(b.id))
            items.forEach(el => {
                const card = new HumanCard(page, el)
                card.render(false)
            });
        }
        document.getElementById("down").onclick = function(){
            document.getElementById("root").innerHTML = ''
            items = items.sort((a, b) => parseFloat(b.id) - parseFloat(a.id))
            items.forEach(el => {
                const card = new HumanCard(page, el)
                card.render(false)
            });
        }
        items.forEach(el => {
            const card = new HumanCard(page, el)
            card.render(false)
        });
    }

    render() {
        this.parent.innerHTML = ''
        this.getData()
    }
}