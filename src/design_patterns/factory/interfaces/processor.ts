import Storage from "./storage";

export default interface Processor{

    attachStorage(storage: Storage): number;

    getSpecs(): string;
}