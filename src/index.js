const express = require('express');

const connect = require('./config/database');
const TweetRepository = require('./repository/tweet-repository');
const Comment = require('./models/comment');

const app = express();

app.listen(3000, async () => {
    console.log('server started');
    await connect();
    console.log('MongoDb connected');
    // const tweet = await Tweet.create({
    //     content: 'third tweet',
    //     userEmail: 'abc@abc.com'
    // });
    // const tweet = await Tweet.find({content:'third tweet'});
    const tweetRepo = new TweetRepository();
    const tweet = await tweetRepo.getWithComments('63de5322fe26401f9b66576d');
    console.log(tweet);
});