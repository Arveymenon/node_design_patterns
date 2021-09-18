import IError from "../interface/IError";

export default class CustomError implements IError{
    message: string
    constructor(message: string){
        this.message = message
    }

    serialize(){
        return this.message;
    }
}