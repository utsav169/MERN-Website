const express = require("express")
const database = require("./connect")
const ObjectId = require("mongodb").ObjectId

let postRoutes = express.Router()

//Retrieve All
postRoutes.route("/posts").get(async (request, response) => {
    let db = database.getDb()
    let data = await db.collection("posts").find({}).toArray()
    if (data.length > 0) {
        response.json(data)
    }
    else {
        throw new Error("Data not found")
    }
})

//Retrieve One
postRoutes.route("/posts/:id").get(async (request, response) => {
    let db = database.getDb()
    let data = await db.collection("posts").findOne({_id: ObjectId.createFromHexString(request.params.id)})
    if (Object.keys(data).length > 0) {
        response.json(data)
    }
    else {
        throw new Error("Data not found")
    }
})

//Create One
postRoutes.route("/posts").post(async (request, response) => {
    let db = database.getDb()
    let mongoObject = {
        title: request.body.title,
        description: request.body.description,
        content: request.body.content,
        author: request.body.author,
        dateCreated: request.body.dateCreated
    }
    let data = await db.collection("posts").insertOne(mongoObject)
    response.json(data)
})

//Update One
postRoutes.route("/posts/:id").put(async (request, response) => {
    let db = database.getDb()
    let mongoObject = {
        $set: {
            title: request.body.title,
            description: request.body.description,
            content: request.body.content,
            author: request.body.author,
            dateCreated: request.body.dateCreated
        }
    }
    let data = await db.collection("posts").updateOne({_id: ObjectId.createFromHexString(request.params.id)}, mongoObject)
    response.json(data)
})

//Delete One
postRoutes.route("/posts/:id").delete(async (request, response) => {
    let db = database.getDb()
    let data = await db.collection("posts").deleteOne({_id: ObjectId.createFromHexString(request.params.id)})
    response.json(data)
})

module.exports = postRoutes