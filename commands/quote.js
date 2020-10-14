const Discord = require('discord.js');
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

        const embed = new Discord.MessageEmbed()
            .setTitle(body['data']['quote'])
            .setDescription(`character: ${body['data']['character']}`)
            .setFooter(`anime: ${body['data']['anime']}`)
            .setColor(0xfa8072)


        message.channel.send(embed);
    }
}