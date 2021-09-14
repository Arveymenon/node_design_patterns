import { Application, Response } from "express";

export default class Middleware{
    constructor(app: Application){
        app.use(this.middleware)
    }

    middleware(request: Express.Request, response: Response, next: Function) {
        console.log("Middleware Hit")
        let number = Math.random() * 10
        console.log("number", number)

        if(number > 5)
            response.send("Good Number")
        else
            response.send("Error because "+ number)
    }
}