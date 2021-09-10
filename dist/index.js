"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const factory_1 = require("./design_patterns/factory/factory");
const singleton_1 = __importDefault(require("./design_patterns/singleton/singleton"));
const app = (0, express_1.default)();
const port = 5000;
app.get('/', (_, res) => {
    res.status(200).send();
});
new singleton_1.default();
new factory_1.Factory();
app.listen(port, () => console.log(`Running on port ${port}`));
//# sourceMappingURL=index.js.map