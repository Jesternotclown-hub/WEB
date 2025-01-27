export class BackButtonComponent {
    constructor(parent, id) {
        this.parent = parent;
        this.id = id;
    }

    getHTML() {
        return (
            `
                <form method="post" action="http://localhost:8000/stocks/${this.id}"><button type="submit" id="${this.id}" class="btn btn-primary" type="button">Удоли</button></form>
                <button id="back-button" class="btn btn-primary" type="button">Назад</button>
            `
        )
    }

    addListeners(listener) {
        document
            .getElementById("back-button")
            .addEventListener('click', listener)
    }

    render(listener) {
        const html = this.getHTML()
        this.parent.insertAdjacentHTML('beforeend', html)
        this.addListeners(listener)
    }
}