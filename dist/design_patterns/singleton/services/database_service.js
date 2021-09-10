"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Database = void 0;
class Database {
    constructor() { }
    static getInstance(db) {
        if (!this.instance) {
            this.instance = db;
            return db;
        }
        return this.instance;
    }
}
exports.Database = Database;
//# sourceMappingURL=database_service.js.map