const express = require('express')
const router = express.Router()
const Tweet = require('../models/Tweet')
const Joi = require('@hapi/joi')



router.get('/tweet', async (req, res) => {
    try {
        const tweets = await Tweet.find()
        console.log(tweets)
        res.status(200).json(tweets)
    } catch (error) {
        console.error(error)
        res.status(400).json({ message: error })

    }

})

router.post('/tweet', async (req, res) => {


    try {
        async function validate(data) {
            const schema = Joi.object({
                name: Joi.string().min(2).required(),
                content: Joi.string().min(2).required()

            })
            return schema.validate(data);
        }
        const { error } = await validate(req.body);
        if (error) {
            console.log(error.details[0].message)
            res.status(400).send(error.details[0].message)
            return;
        }

        const tweet = new Tweet({
            name: req.body.name.toString(),
            content: req.body.content.toString()
        })
        const new_tweet = await tweet.save()
        console.log(new_tweet)
        res.status(200).json(new_tweet)

    } catch (error) {
        res.status(400).json({ message: error })

    }
})

module.exports = router;