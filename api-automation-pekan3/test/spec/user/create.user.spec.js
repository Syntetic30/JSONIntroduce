const { expect } = require("chai");
const { getToken } = require("../auth/token.auth.spec.js");
const request = require("supertest");
const config = require("../../../data/config.json");
const userData = require("../../../data/user/create.user.data.json");

async function createUser(payload,token) {
    const response = await request(config.baseUrl) // baseUrl
    .post("/users") // endpoint
    .send(payload)
    .set("Authorization", `Bearer ${token}`)

    return response
}

describe('Create User', () => {
    it('Success create a new user', async () => {
        const token = await getToken() // get token
        const payload = userData
        const response = await createUser(payload, token)

        // assertion
        expect((await response).status).to.equal(201)
        expect((await response).body.data.name).to.equal('randiArdian')
    })  
})
