const fs = require('fs');
const path = require('path');
const express = require('express');
const app = express();
const { Client } = require('pg');

// Настройки подключения к базе данных
const client = new Client({
    host: 'localhost',
    user: 'postgres',
    password: '1234',
    database: 'postgres'
});

// Подключение к базе данных
client.connect(err => {
    if (err) {
        console.error('Ошибка подключения к БД', err.stack);
    } else {
        console.log('Подключено к БД');
    }
});

const host = 'localhost';
const port = 8080;

// Middleware для обработки JSON
app.use(express.json());

// Получение всех пользователей
app.get('/postgres', (req, res) => {
    client.query('SELECT * FROM users', (err, result) => {
        if (err) {
            res.status(500).send(err.stack);
        } else {
            res.status(200).json(result.rows);
        }
    });
});

// Добавление нового пользователя
app.post('/postgres', (req, res) => {
    const newUser = req.body; // здесь newUser должен содержать все необходимые поля
    client.query(
        'INSERT INTO users (id, name, photo) VALUES ($1, $2, $3) RETURNING id', 
        [newUser.id, newUser.first_name, newUser.photo_400_orig], 
        (error, results) => {
            if (error) {
                return res.status(500).send({ error: 'Ошибка добавления пользователя' });
            }
            res.status(201).send({ id: results.rows[0].id, ...newUser });
        }
    );
});

// Удаление пользователя по ID
app.delete('/postgres/:id', (req, res) => {
    const id = req.params.id;
    client.query('DELETE FROM users WHERE id = $1', [id], (error, results) => {
        if (error) {
            return res.status(500).send({ error: 'Ошибка удаления пользователя' });
        }
        if (results.rowCount === 0) {
            return res.status(404).send({ error: 'Пользователь не найден' });

        }
        res.send({ message: 'Пользователь удалён' });
    });
});

// Запуск сервера
app.listen(port, host, () => {
    console.log('Сервер запущен по адресу http://${host}:${port}');
});