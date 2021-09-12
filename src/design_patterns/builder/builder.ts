import { User, UserBuilder } from "./builders/User";

export default class BuilderRun{
    // user: User
    constructor(){
        this.createUser()
    }

    createUser(){
        let user = new UserBuilder;

        user.setName("Arvey").setGender("male").setAge(25)

        console.log(user.getAll())
        return user
    }
}