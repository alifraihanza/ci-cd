const app = require("./app")
const port = 3000


app.listen(process.env.port, () => {
    console.log(`Berjalan di port ${port}`)
})