import Processor from "./processor";
import Storage from "./storage";

export default interface MacBookFactory{
    
    createStorage() : Storage

    createProcessor() : Processor

}