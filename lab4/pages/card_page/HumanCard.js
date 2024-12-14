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
                <div class="card mb-3"">
                    <div class="row g-0">
                        <div>
                            <div id="${this.data.id}" class="card-body text-center">
                                <h5 class="card-text">${this.data.first_name}</h5>
                            </div>
                            <img src="${this.data.photo_400_orig}" class="img-fluid" alt="картинка">
                             
                        </div>
                    </div>
                </div>
            `
        )
    }

    clickBack(){
        const main_page = new MainPage(this.parent)
        main_page.render()
    }

    clickCard() {
        this.parent.innerHTML = ''
        const html = this.getHTML()
        this.parent.insertAdjacentHTML("beforeend", html)
        this.render(true)
    }

    render(listener){
        if(!listener){
            const html = this.getHTML()
            this.parent.insertAdjacentHTML("beforeend", html)
            var button = new MainPageButton(document.getElementById(this.data.id))
            button.render(this.clickCard.bind(this))
        }
        
        if(listener){
            const backButton = new BackButtonComponent(document.getElementById(this.data.id))
            backButton.render(this.clickBack.bind(this))
        }
    }
}