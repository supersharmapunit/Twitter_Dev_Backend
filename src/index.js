const express = require('express');

const connect = require('./config/database');
const TweetRepository = require('./repository/tweet-repository');

const app = express();

app.listen(3000, async () => {
    console.log('server started');
    await connect();
    console.log('MongoDb connected');
    const tweetRepo = new TweetRepository();
    const tweet = await tweetRepo.create({content: 'With hooks now'});
    console.log(tweet);
    // const tweet = await tweetRepo.getAll(0, 3);
    // console.log(tweet[0].contentWithEmail);
});