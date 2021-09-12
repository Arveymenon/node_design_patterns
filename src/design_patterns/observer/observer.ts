import Author from "./observables/author";
import Follower from "./subscribers/followers";

export default class Observer{
    constructor(){
        let follower = new Follower("Someone")

        let author = new Author("Someone")

        
        author.subscribe(follower)
        
        author.notify(
            {author: author.name, message: "Message"}
        )
    }
}