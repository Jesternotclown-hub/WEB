import '../../bootstrap-5.0.2-dist/js/bootstrap.js'

export class toast {
    constructor(parent, id) {
        this.parent = parent;
        this.id = id
    }

    getHTML() {
        switch(this.id){
            case 0:
                return (`<div class="toast" id="myToast">
                            <div class= " z-50 bg-red-500 p-1">
                                <strong class="me-auto"><i class="bi-gift-fill"></i> We miss you!</strong>
                                <small>10 mins ago</small>
                                <button id ="${this.id+10}"type="button" class="btn-close" data-bs-dismiss="toast"></button>
                            </div>
                            <div class="toast-body">
                                It's been a long time since you visited us. We've something special for you. <a href="#">Click here!</a>
                            </div>
                        </div>
                            
                        `
                        )
            case 1:
                return (`<div class="toast" id="myToast">
                            <div class="toast-header">
                                <strong class="me-auto"><i class="bi-gift-fill"></i> We miss you!</strong>
                                <small>10 mins ago</small>
                                <button id ="${this.id+10}"type="button" class="btn-close" data-bs-dismiss="toast"></button>
                            </div>
                            <div class="toast-body">
                                It's been a long time since you visited us. We've something special for you. <a href="#">Click here!</a>
                            </div>
                        </div>
                            
                        `
                        )
            case 2:
                return (
                        `<div class="toast" id="myToast">
                            <div class="toast-header">
                                <strong class="me-auto"><i class="bi-gift-fill"></i> We miss you!</strong>
                                <small>10 mins ago</small>
                                <button id ="${this.id+10}"type="button" class="btn-close" data-bs-dismiss="toast"></button>
                            </div>
                            <div class="toast-body">
                                It's been a long time since you visited us. We've something special for you. <a href="#">Click here!</a>
                            </div>
                        </div>
                            
                        `
                        )
        }
        
    }

    render() {
        const html = this.getHTML();
        this.parent.insertAdjacentHTML('beforeend', html)
        var btn = document.getElementById(this.id+10);
        var element = document.getElementById("myToast");
        console.log(element)
        // Create toast instance
        var myToast = new bootstrap.Toast(element);
        myToast.show();
    }
}