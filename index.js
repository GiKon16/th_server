const express = require('express')
const productRouter = require('./routers/productRouter.js')
const categoryRouter = require('./routers/categoryRouter.js')
const orderRouter = require('./routers/orderRouter.js')

const PORT = 5000

const app = express()

app.use(express.json())
app.use(express.static('static'))
app.use('/api', productRouter)
app.use('/api', categoryRouter)
app.use('/api', orderRouter)

async function startApp() {
    try {
        app.listen(PORT, () => console.log("Server started on port " + PORT))
    } catch(e) {
        console.log(e)
    }
}

startApp()

