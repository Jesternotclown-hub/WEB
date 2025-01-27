export class MainPageButton{
    constructor(parent, id){
        this.parent = parent
        this.id = id
    }

    getHTML(){
        return (`<button type="button" class="btn btn-primary" id="${this.id}">Открыть профиль</button>`)
    }

    addListeners(listener) {
        this.parent
            .addEventListener("click", listener)
    }

    render(listener){
        const html = this.getHTML()
        this.parent.insertAdjacentHTML('beforeend', html)
        this.addListeners(listener)
    }
}