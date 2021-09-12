import Processor from "../interfaces/processor";
import Storage from "../interfaces/storage";

export default class MacProcessor implements Processor{
 
    constructor(){}
    
    attachStorage(storage: Storage): number{
        this.storage = storage.getStorageSize();
        return storage.getStorageSize();
    }
    getSpecs(): string{
        return "Mast hai";
    }

    storage: number

}