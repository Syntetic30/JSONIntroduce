const { expect } = require("chai");
const { getToken } = require("../auth/token.auth.spec.js");
const request = require("supertest");
const config = require("../../../data/config.json");
const categoriesData = require("../../../data/categories/create.categories.data.json");

async function createCategories(payload,token) {
    const response = await request(config.baseUrl) // baseUrl
    .post("/categories") // endpoint
    .send(payload)
    .set("Authorization", `Bearer ${token}`)

    return response
}

describe('Create Categories', () => {
    it('Success create a new Categories', async () => {
        const token = await getToken() // get token
        const payload = categoriesData
        const response = await createCategories(payload, token)

        // assertion
        expect((await response).status).to.equal(201)
        expect((await response).body.data.name).to.equal('Mainan Hewan')
    })  
    it('fail create a new Categories', async () => {
        const token = await getToken() // get token
        const payload = categoriesData
        const response = await createCategories(payload, token)

        // assertion
        expect((await response).status).to.equal(201)
        expect((await response).body.data.name).to.equal('Mainan Kucing')
    })  
})
