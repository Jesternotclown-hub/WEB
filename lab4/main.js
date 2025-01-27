import { MainPage } from "./pages/main/main_page.js";
const root = document.getElementById("root")
const main_page = new MainPage(root);
render(0)
function render(type){
    console.log('сообщение')
    main_page.render(type);
}
