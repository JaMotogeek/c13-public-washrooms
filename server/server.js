import express from 'express'
import showRequests from './showRequests.js'
import washroomController from './washroom/washroomController.js'


const port = process.env.PORT || 3000
const app = express()

app.use(showRequests)
app.use(express.static('../public_html'))
app.use(express.json())

app.use('/api/washroom', washroomController)


app.listen(port, () => {
    console.log('Server listening on port ' + port)
})