import express, { Application, NextFunction, Request, Response } from 'express'
import { createServer, Server } from 'http'
import cors from 'cors';
import { config } from 'dotenv';
import { connectToDatabase } from 'src/connection';
import authController from 'src/controller/auth_controller';
import { getHostColor, getMethodColor, getMsColor, getOrigUrlColor, getUlrColor, statusColor } from 'src/utils/colors';


config({ path: ".env" });
const app: Application = express();


const PORT = process.env.PORT;
const DB_CONNECTION: string = <string>process.env.DB_CONNECTION;


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true, }));



const hostify: Server = createServer(app);



app.use((req: Request, res: Response, next: NextFunction) => {
    const startTime = Date.now();

    req.on('end', () => {
        const endTime = Date.now();
        console.log(`{ METHOD: ${getMethodColor(req.method)}, HOST: ${getHostColor(req.hostname)}, ORIG_URL: ${getOrigUrlColor(req.originalUrl)}, URL:${getUlrColor(req.url)}, MS: ${getMsColor(endTime - startTime)} ms , STATUS: ${statusColor(res.statusCode)}, FROM: ${req.ip} }`)
    });

    next();
})




app.use('/auth', authController);






const startServer: Function = () => {
    try {
        hostify.listen(PORT);
        console.log(`hostify server start at port ${PORT}`);
    } catch (error) {
        console.log(`server start error ${error}`);
    }
}



(async () => {
    try {
        await connectToDatabase(startServer, DB_CONNECTION);
    } catch (error) {
        console.log(`error: ${error}`);
    }
})();