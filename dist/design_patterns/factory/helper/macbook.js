"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const macprocessor_1 = __importDefault(require("./macprocessor"));
const macstorage_1 = __importDefault(require("./macstorage"));
class MacBook {
    constructor(storage_size) {
        this.storage_size = storage_size;
        this.createProcessor();
    }
    createProcessor() {
        let processor = new macprocessor_1.default();
        processor.attachStorage(this.createStorage());
        return processor;
    }
    createStorage() {
        return new macstorage_1.default(this.storage_size);
    }
}
exports.default = MacBook;
//# sourceMappingURL=macbook.js.map