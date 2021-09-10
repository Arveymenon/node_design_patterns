import MacBook from "./helper/macbook";
import MacStorage from "./helper/macstorage";
import MacBookFactory from "./interfaces/mac_factory";
import Processor from "./interfaces/processor";

import Storage from "./interfaces/storage";

export class Factory {

    constructor() {
        console.log("Macbook", new MacBook(256))
    }

    
}