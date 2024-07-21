const { expect } = require("chai");
const request = require("supertest");
const config = require("../../../data/config.json");
const payload  = require("../../../data/categories/get.categories.data.json");

async function getCategories(payload) {
    const response = await request(config.baseUrl) // baseUrl
    .post("/categories") // endpoint
    .send(payload)

    return response
}

describe('Get Categories', () => {
    it('Success Get Categories', async () => {
        const response = await getCategories(payload.success) // payload from data

        // assertion
        expect((await response).status).to.equal(201)
        expect((await response).body.data.categories.name).to.equal('Makanan Miaw')
    })  
},
    it('Failed Get categories', async () => {
        const response = await getCategories(payload.failed) // payload from data

        // assertion
        expect((await response).status).to.equal(401)
})
)