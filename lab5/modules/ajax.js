export class Ajax {
    get(url, callback) {
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok ' + response.statusText);
                }
                return response.json();
            })
            .then(data => {
                callback(data);
            })
            .catch(error => {
                console.error('Ошибка с сетью: ', error);
            });
    }
}