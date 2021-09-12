"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = exports.UserBuilder = void 0;
class UserBuilder {
    constructor() { }
    setName(name) {
        this.name = name;
        return this;
    }
    setAge(age) {
        this.age = age;
        return this;
    }
    setGender(gender) {
        this.gender = gender;
        return this;
    }
    build() {
        return new User(this);
    }
    getAll() {
        return this;
    }
}
exports.UserBuilder = UserBuilder;
class User {
    constructor(builder) {
        this.name = builder.name;
        this.age = builder.age;
        this.gender = builder.gender;
    }
}
exports.User = User;
//# sourceMappingURL=User.js.map