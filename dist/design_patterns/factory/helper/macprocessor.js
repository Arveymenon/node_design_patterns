"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MacProcessor {
    constructor() {
    }
    attachStorage(storage) {
        this.storage = storage.getStorageSize();
        return storage.getStorageSize();
    }
    getSpecs() {
        return "Mast hai";
    }
}
exports.default = MacProcessor;
//# sourceMappingURL=macprocessor.js.map