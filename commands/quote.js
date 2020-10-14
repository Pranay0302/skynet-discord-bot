const superagent = require('superagent');

module.exports = {

    name: 'quote',
    description: 'random anime quotes generator',


    async execute(message, args) {

        const response = await message.channel.send('quote incoming...');
        let { body } = await superagent.get("https://animechanapi.xyz/api/quotes/random");

        if (!body) {
            message.channel.send("oops");
        }
        message.channel.send(body.data);
    }
}