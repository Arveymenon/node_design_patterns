import { Database, MockDB } from "./services/database_service";

export class Singleton{
    database: MockDB
    constructor(){
        let db: MockDB = {
            url: 'test',
            type: "mongo"
        }
        this.database = Database.getInstance(db)
    }
}

export class Singleton2{
    database: MockDB
    constructor(){
        let db: MockDB = {
            url: 'testing2',
            type: "my-sql"
        }
        this.database = Database.getInstance(db)
    }
}

export default class RunSingleton{

    constructor(){
        let instance1 = new Singleton()
        console.log(instance1.database.type)
    
        let instance2 = new Singleton2()
        console.log(instance2.database.type)
        // though instance2 has "my-sql" as type, it will return "mongo" as type as the instance1 has already set the DB instance and hence it will remain like that
    }
}