import MacBookFactory from "../interfaces/mac_factory";
import MacProcessor from "./macprocessor";
import MacStorage from "./macstorage";

export default class MacBook implements MacBookFactory{
    storage_size: number

    constructor(storage_size: number){
        this.storage_size = storage_size
        this.createProcessor()
    }

    createProcessor(){
        let processor = new MacProcessor()

        processor.attachStorage(this.createStorage())

        return processor
    }
    
    createStorage(){
        return new MacStorage(this.storage_size)
    }
}