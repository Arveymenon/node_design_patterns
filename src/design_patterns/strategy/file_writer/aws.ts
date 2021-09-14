import IFileWriter from "../interfaces/file_writer";

export default class AWSFileWrite implements IFileWriter{
    constructor(){console.log("Writing on AWS")}
    write(){
        return true
    }
}