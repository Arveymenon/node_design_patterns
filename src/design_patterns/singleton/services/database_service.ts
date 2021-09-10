export class Database{
 
    private static instance: MockDB

    constructor(){}
    
    static getInstance(db: MockDB): MockDB {
        if(!this.instance){
            this.instance = db
            return db
        }
        return this.instance
    }
}

export type MockDB = {
    url: string,
    type?: "mongo" | "my-sql" | "postgresql"
}