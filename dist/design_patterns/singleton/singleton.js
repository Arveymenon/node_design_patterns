"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Singleton2 = exports.Singleton = void 0;
const database_service_1 = require("./services/database_service");
class Singleton {
    constructor() {
        let db = {
            url: 'test',
            type: "mongo"
        };
        this.database = database_service_1.Database.getInstance(db);
    }
}
exports.Singleton = Singleton;
class Singleton2 {
    constructor() {
        let db = {
            url: 'testing2',
            type: "my-sql"
        };
        this.database = database_service_1.Database.getInstance(db);
    }
}
exports.Singleton2 = Singleton2;
class RunSingleton {
    constructor() {
        let instance1 = new Singleton();
        console.log(instance1.database.type);
        let instance2 = new Singleton2();
        console.log(instance2.database.type);
        // though instance2 has "my-sql" as type, it will return "mongo" as type as the instance1 has already set the DB instance and hence it will remain like that
    }
}
exports.default = RunSingleton;
//# sourceMappingURL=singleton.js.map