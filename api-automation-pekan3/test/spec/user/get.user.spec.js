const { expect } = require("chai");
const request = require("supertest");
const config = require("../../../data/config.json");
const payload  = require("../../../data/user/get.user.data.json");

async function getUser(payload) {
    const response = await request(config.baseUrl) // baseUrl
    .post("/authentications") // endpoint
    .send(payload)

    return response
}

describe('Get User', () => {
    it('Success Get User', async () => {
        const response = await getUser(payload.success) // payload from data

        // assertion
        expect((await response).status).to.equal(201)
        expect((await response).body.data.user.name).to.equal('randiArdian')
    })  
},
    it('Failed Get User', async () => {
        const response = await getUser(payload.failed) // payload from data

        // assertion
        expect((await response).status).to.equal(401)
})
)