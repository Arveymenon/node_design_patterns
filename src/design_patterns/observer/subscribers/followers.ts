import Author from "../observables/author"
import Tweet from "../tweets/tweet"

export default class Follower{
    name: string
    
    constructor(name: string){
        this.name = name
    }

    onTweet(tweet: Tweet){
        console.log("By: "+ tweet.author,", Message: "+ tweet.message)
    }
}