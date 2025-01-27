import { MainPage } from "../main/main_page.js"
import{MainPageButton} from "../../components/buttons/MainPageButton.js"
import { BackButtonComponent } from "../../components/buttons/BackButton.js"

export class HumanCard{

    constructor(parent, Data){
        this.parent=parent
        this.data = Data
    }

    getHTML() {
        return (
            `
                <div class="card mb-3 ">
                <div class="row g-0">
                    <div>
                        <img src="${this.data.photo_400_orig}"  alt="картинка" class="img-fluid">
                        <div id="block_${this.data.id}" class="card-body text-center">
                            <h5 class="card-text">${this.data.first_name}</h5>
                        </div> 
                    </div>
                </div>
            </div>
            `
        )
    }

    clickBack(){
        document.getElementById("buttons").innerHTML = `<button id="up" >sort to up</button>
            <button id = "down" >sort to down</button>`
        const main_page = new MainPage(this.parent)
        main_page.render()
    }

    clickCard() {
        document.getElementById("buttons").innerHTML = ''
        this.parent.innerHTML = ''
        const html = this.getHTML()
        this.parent.insertAdjacentHTML("beforeend", html)
        this.render(true)
    }

    render(listener){
        if(!listener){
            const html = this.getHTML()
            this.parent.insertAdjacentHTML("beforeend", html)
            var button = new MainPageButton(document.getElementById(`block_${this.data.id}`), this.data.id)
            button.render(this.clickCard.bind(this))
        }
        
        if(listener){
            const backButton = new BackButtonComponent(document.getElementById(`block_${this.data.id}`))
            backButton.render(this.clickBack.bind(this))
        }
    }
}