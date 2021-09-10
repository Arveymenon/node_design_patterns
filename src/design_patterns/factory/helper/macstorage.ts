import Storage from "../interfaces/storage";

export default class MacStorage implements Storage{
    storage_size: number
    constructor(size: number){
        this.storage_size = size
    }

    getStorageSize(): number{
        return this.storage_size
    }
}