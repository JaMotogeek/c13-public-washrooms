import { Router } from "express";
import { createWashrooms, findAllWashrooms, findWashroomsById } from "./washroomData.js";

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
        const washroom = await findAllWashrooms(req.query.name)
        res.send(washroom)
    }
    catch (error) {
        console.log(error)
        res.sendStatus(500)
    }
})

router.post('/', async(req,res) => {
    console.log('Incoming POST on /api/washrooms with data')
    console.log(req.body)

    if(req.body.name && req.body.location) {
        const newWashroom = await createWashroom(req.body)
        return res.sendStatus(newWashroom)
    }
    else {
        return res.sendStatus(400)
    }
})

export default router