export default class NewCustomError{
    message: string
    constructor(message: string){
        this.message = message
    }

    withInfo() : string {
        return this.message
    }
}