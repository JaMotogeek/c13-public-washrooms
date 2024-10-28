import { Router } from "express";
import { findAllWashrooms, findWashroomsById } from "./washroomData.js";

const router = Router()

// get a particular washroom
router.get('/:id', async function (req, res) {
    const id = req.params.id
    try {
        const washroom = await findWashroomById(id)
        if (washroom === null) {
            res.sendStatus(404)
        }
        else {
            res.send(washroom)
        }import { Router } from "express";
        import { createWashroom as createWashroom, findAllWashrooms as findAllWashrooms, findWashroomById as findWashroomById } from "./superheroData.js";
        
        const router = Router()
        
        // get a particular washroom
        router.get('/:washroomId', async function (req, res) {
            const id = req.params.washroomId
            console.log(req.params)
            try {
                const washroom = await findWashroomById(id)
                if (washroom === null) {
                    res.sendStatus(404)
                }
                else {
                    res.send(washroom)
                }
            }
            catch (error) {
                console.log(error)
                res.sendStatus(500)
            }
        })
        
        // list all washrooms
        router.get('/', async function (req, res) {
            try {
                console.log('name is', req.query.name)
                const washrooms = await findAllWashrooms(req.query.name)
                res.send(washrooms)
            }
            catch (error) {
                console.log(error)
                res.sendStatus(500)
            }
        })
        
        router.post('/', async (req, res) => {
            console.log('Incoming POST on /api/washrooms with data')
            console.log(req.body)
        
            if (req.body.name && req.body.powers) {       
                const newWashroom = await createWashroom(req.body)
                return res.send(newWashroom)
            }
            else {
                return res.sendStatus(400)
            }
        })
        
        export default router
    }
    catch (error) {
        console.log(error)
        res.sendStatus(500)
    }
})

// list all washrooms
router.get('/', async function (req, res) {
    try {
        const washroom = await findAllWashrooms()
        res.send(washroom)
    }
    catch (error) {
        console.log(error)
        res.sendStatus(500)
    }
})

export default router