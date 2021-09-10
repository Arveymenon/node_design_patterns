"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Factory = void 0;
const macbook_1 = __importDefault(require("./helper/macbook"));
class Factory {
    constructor() {
        console.log("Macbook", new macbook_1.default(256));
    }
}
exports.Factory = Factory;
//# sourceMappingURL=factory.js.map