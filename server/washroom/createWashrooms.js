import { createWashroom as createWashroom } from "./washroomData.js";
import { disconnectDb } from "../db.js";

if (process.argv.length < 5) {
    console.log('Usage: node createWashroom <name> <lon,lat> [address]')
    process.exit(1)
}
const name = process.argv[2]
const coordinates = process.argv[3].split(',')
const lon = Number.parseFloat(coordinates[0])
const lat = Number.parseFloat(coordinates[1])
const address = process.argv[4].split(',')
const location = {
    type: "Point",
    coordinates: [ lon, lat ]
}

await createWashroom({
    name,
    address,
    location
})
await disconnectDb()