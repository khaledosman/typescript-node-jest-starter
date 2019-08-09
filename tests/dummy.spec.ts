
import 'jest'
import * as request from 'supertest'
// import { app } from '../src/index'

describe('Jest Tests', () => {
  test('Verify Tests Work', () => {
    expect(true).toBeTruthy()
  })
})

describe('GET /', () => {
  xit('respond with json', (done) => {
    // request(app)
    request('localhost:8000')
      .get('/')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect({ message: 'Hello world!' })
      .expect(200, done)
  })
})
