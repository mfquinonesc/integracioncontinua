const request = require('supertest');
const express = require('express');
const app = require('../src/index'); // Asegúrate de que esta ruta sea la correcta

// Define las rutas que quieres probar
describe('API Endpoints', () => {

    // Ruta de autenticación
    describe('POST /api/v1/auth/signin', () => {
        it('should login successfully and return a token', async () => {
            const response = await request(app)
                .post('/api/v1/auth/signin')
                .send({ email: 'jhondoe@mail.com', password: '123456789' });

            expect(response.statusCode).toBe(200);
            expect(response.body).toHaveProperty('token');
        });
    });
});
