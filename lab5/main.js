import { MainPage } from "./pages/main/main_page.js";
const root = document.getElementById("root")
const main_page = new MainPage(root);
render(0)
function render(type){

    main_page.render(type);

}

function up(){
    main_page.render(0)
}
function down(){
    main_page.render(1)
}