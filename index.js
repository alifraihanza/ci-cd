const app = require("./app")
const PORT = 8113


// app.listen(process.env.PORT, function(){
//     console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
// })


  
app.listen(process.env.PORT, () => {
    console.log(`Berjalan di port ${PORT}`)
})