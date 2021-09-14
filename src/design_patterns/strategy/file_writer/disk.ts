import IFileWriter from "../interfaces/file_writer";

export default class DiskWrite implements IFileWriter{
    constructor(){console.log("Writing on Disk")}
    write(path: string){
        return true
    }
}