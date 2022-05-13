const app = require("./app")
const PORT = 3000


app.listen(process.env.PORT, () => {
    console.log(`Berjalan di port ${PORT}`)
})