import express, {urlencoded} from "express"
const app = express();
app.use(express.json())
app.use(express.urlencoded({extended: false}))
const PORT = 3001;
app.get('/', (req, res)=>{
    res.send("asd")
})
app.post('/newpost', function (req, res){
    res.send(req.body)
    console.log(req.body)
})
app.listen(PORT, ()=>{
    console.log(`Слушаем порт ${PORT}`)
})