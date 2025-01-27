import { Ajax } from "../../modules/ajax.js";
import { Urls } from "../../modules/urls.js";
import { HumanCard } from "../card_page/HumanCard.js";

export class MainPage {
    constructor(parent) {
        this.parent = parent;
        this.ajax = new Ajax();
        this.urls = new Urls();
    }

    get pageRoot() {
        return document.getElementById('root');
    }
    
    getData = async () => {
        const response = await fetch('http://localhost:8080/postgres');
        if (!response.ok) {
            throw new Error('Ошибка при загрузке данных');
        }
        const data = await response.json();
        return data;
    }

    renderItem = async () => {
        const page = this.pageRoot;
        let items = [];
        const maxAttempts = 3; 

        for (let attempt = 0; attempt < maxAttempts; attempt++) {
        // Запрашиваем данные
        const fetchedItems = await this.getData();

        // Проверяем, были ли данные получены
        if (fetchedItems && fetchedItems.length > 0) {
            // Если данные получены, добавляем их в массив items и выходим из цикла
            items = fetchedItems;
            break;
        }
    }
        items.forEach(el => {
            const card = new HumanCard(page, el);
            card.render(false);
        });

        document.getElementById("up").onclick = () => {
            document.getElementById("root").innerHTML = '';
            items = items.sort((a, b) => parseFloat(a.id) - parseFloat(b.id));
            items.forEach(el => {
                const card = new HumanCard(page, el);
                card.render(false);
            });
        }

        document.getElementById("down").onclick = () => {
            document.getElementById("root").innerHTML = '';
            items = items.sort((a, b) => parseFloat(b.id) - parseFloat(a.id));
            items.forEach(el => {
                const card = new HumanCard(page, el);
                card.render(false);
            });
        }
    }

    setupFormSubmission() {
        document.getElementById('stock-form').onsubmit = async (event) => {
            event.preventDefault(); 
            const formData = new FormData(event.target);
            const stockData = Object.fromEntries(formData.entries());
            stockData.id = Number(stockData.id)
            const response = await fetch('http://localhost:8080/postgres', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(stockData),
            });

            if (response.ok) {
                document.getElementById('root').innerHTML = '';
                this.renderItem(); 
                event.target.reset(); // Сброс формы после добавления
            }
        };
    }

    deleteCard() {
        document.getElementById("delete").onclick = async () => {
            const idToDelete = prompt("Введите ID для удаления:");
            const response = await fetch(`http://localhost:8080/postgres/${idToDelete}`, {
                method: 'DELETE',
            });

            if (response.ok) {
                document.getElementById('root').innerHTML = '';
                this.renderItem(); 
            } else {
                console.error(`Ошибка при удалении: ${response.statusText}`);
            }
        };
    }

    render() {
        this.parent.innerHTML = '';
        this.renderItem();
        this.setupFormSubmission(); // Настраиваем отправку формы
        this.deleteCard(); // Настраиваем удаление карточки
    }
}