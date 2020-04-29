const express = require('express')
const request = require('supertest')
const app = require('../server/app')
const babelPolyfill = require('babel-polyfill')



test('Should return correct endpoint response', async () => {
  await request(app).get('/all').send({
    text: 'test',
  }).expect(200);
})

test('Should return correct endpoint response', async () => {
  await request(app).get('/trip').send({
    date: '2020-05',
    city: 'Helsinki'
  }).expect(200);
})

