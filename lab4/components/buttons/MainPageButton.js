export class MainPageButton{
    constructor(parent){
        this.parent = parent
    }

    getHTML(){
        return (`<button type="button" class="btn btn-primary">Открыть профиль</button>`)
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