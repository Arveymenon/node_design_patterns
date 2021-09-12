import Follower from "../subscribers/followers";
import Tweet from "../tweets/tweet";

export default class Author{

    name: string
    subscribers: Follower[] = []

    constructor(name: string){
        this.name = name
    }

    notify(tweet: Tweet){
        this.subscribers.forEach(observer=>{
            observer.onTweet({author: this.name, ...tweet})
        })
    }

    subscribe(observer: Follower){
        this.subscribers.push(observer)
    }
}