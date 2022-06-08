import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import { createServer, Model } from 'miragejs';

createServer({
    models: {
        transactions: Model,
    },

    seeds(server) {
        server.db.loadData({
            transactions: [
                {
                    id: 1,
                    title: 'Freelance de app',
                    type: 'income',
                    category: 'Dev',
                    amount: 12000,
                    createdAt: new Date('2022-06-01 12:00:00'),
                },
                {
                    id: 2,
                    title: 'Aluguel',
                    type: 'outcome',
                    category: 'Casa',
                    amount: 1500,
                    createdAt: new Date('2022-06-05 08:00:00'),
                },
            ],
        });
    },

    routes() {
        this.namespace = 'api';

        this.get('/transactions', () => {
            return this.schema.all('transactions');
        });

        this.post('/transactions', (schema, request) => {
            const data = JSON.parse(request.requestBody);

            return schema.create('transactions', data);
        });
    },
});

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
