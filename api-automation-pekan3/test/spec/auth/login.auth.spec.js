const { expect } = require("chai");
const request = require("supertest");
const config = require("../../../data/config.json");
const payload  = require("../../../data/auth/login.data.json");

async function login(payload) {
    const response = await request(config.baseUrl) // baseUrl
    .post("/authentications") // endpoint
    .send(payload)

    return response
}

describe('Login Feature', () => {
    it('Success Login', async () => {
        const response = await login(payload.loginSuccess) // payload from data

        // assertion
        expect((await response).status).to.equal(201)
        expect((await response).body.data.user.name).to.equal('randiArdian')
    })  
},
    it('Failed Login', async () => {
        const response = await login(payload.loginFailed) // payload from data

        // assertion
        expect((await response).status).to.equal(401)
    })
)