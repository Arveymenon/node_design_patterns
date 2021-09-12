export class UserBuilder{
    name: string;
    age: number;
    gender: "male" | "female" | "other"

    constructor(){}
    
    setName(name: string){
        this.name = name
        return this
    }
    
    setAge(age: number){
        this.age = age
        return this
    }
    
    setGender(gender: "male" | "female" | "other"){
        this.gender = gender
        return this
    }

    build(){
        return new User(this)
    }

    getAll(){
        return this
    }
}

export class User {
    name: string;
    age: number;
    gender: "male" | "female" | "other"
    
    constructor(builder: UserBuilder){
        this.name = builder.name;
        this.age =  builder.age;
        this.gender = builder.gender
    }
}