import "reflect-metadata"
import * as express from "express"
import * as bodyParser from "body-parser"
import routes from "./routes"
import { createConnection } from "typeorm"
import * as cors from "cors"

const app = express()
createConnection()

app.use(cors())
app.use(bodyParser.json())
app.use(routes)

app.listen(3333)
