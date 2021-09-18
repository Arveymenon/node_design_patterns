import NewCustomError from "./errors/new_custom_error";

export class ErrorAdapter{
    message: string;

    constructor(message: string){
        this.message = message
    }

    serialize(){
        const e = new NewCustomError(this.message).withInfo()

        return e
    }
}