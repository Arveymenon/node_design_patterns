import AWSFileWrite from "./file_writer/aws"
import DiskWrite from "./file_writer/disk"
import IFileWriter from "./interfaces/file_writer"

export default class Strategy{
    
    constructor(file_size: number){
        this.write({size: file_size})
    }

    write(file: { size: number }): IFileWriter{
        if(file.size < 1000)
            return new DiskWrite()
        else
            return new AWSFileWrite()
    }

}