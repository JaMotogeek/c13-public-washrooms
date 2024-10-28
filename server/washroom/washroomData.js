import { ObjectId } from "mongodb"
import { collection } from "../db.js"

export async function findAllWashrooms(nameFragment) {
    const mongoQuery = {}
    if (nameFragment !== undefined) {
        mongoQuery.name = nameFragment
    }
    const washroomCollection = await collection('washrooms')
    const cursor = await washroomCollection.find(mongoQuery) // no query finds everything!
    const washroom = await cursor.toArray()
    return washroom
}

export async function findWashroomsById(id) {
    const washroomCollection  = await collection('washrooms')
    const singleWashroom =  await washroomCollection.findOne({_id: new ObjectId(id)})
    return singleWashroom
}

export async function createWashroom(data) {
    const washroomCollection  = await collection('washrooms')
    const insertResult = await washroomCollection.insertOne(data)
    console.log('Inserted Washroom ', insertResult.insertedId)
    return await washroomCollection.findOne({ _id: insertResult.insertedId })
}