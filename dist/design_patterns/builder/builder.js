"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = require("./builders/User");
class BuilderRun {
    // user: User
    constructor() {
        this.createUser();
    }
    createUser() {
        let user = new User_1.UserBuilder;
        user.setName("Arvey").setGender("male").setAge(25);
        console.log(user.getAll());
        return user;
    }
}
exports.default = BuilderRun;
//# sourceMappingURL=builder.js.map