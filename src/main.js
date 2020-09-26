require('dotenv').config(); // global function

const Discord = require('discord.js')
const client = new Discord.Client();
const config = require('../config.json');


client.on('ready', () => {
    console.log(`${client.user.tag} has logged in`);
    console.log(`${config.botinfo.name} is version ${config.botinfo.version}`);
    client.user.setActivity("planet earth", { type: "WATCHING" });
})

client.on('message', message => {
    if (message.author.bot) return;
    if (message.content === 'shit') {
        message.channel.send(`${message.author} please don't (◍•ヘ•)`);
    } else if (message.content === 'beep') {
        message.channel.send('boop')
    } else if (message.content === 'sad') {
        const embed = new Discord.MessageEmbed()
            .setColor(0x00008B)
            .setTitle('issa okay')
            .setDescription(':pensive: :weary: :tired_face:\n just let it go');
        message.channel.send(embed);
    } else if (message.content === 'damn') {
        message.channel.send(`${message.author} sure it is, my boi`);
    } else if (message.content === 'nice') {
        message.channel.send(`yessir`);
    } else if (message.content === 'happy') {
        const embed = new Discord.MessageEmbed()
            .setColor(0x4FCE5A)
            .setTitle('be happy')
            .setDescription(':smile: :smiley: :zany_face:\n hell yeah bruh');
        message.channel.send(embed);
    } else if (message.content === `${config.prefix}total`) {
        message.channel.send(`total no. of members: ${message.guild.memberCount}`);
    } else if (message.content === `${config.prefix}ID`) {
        message.channel.send(`${message.author}'s ID is ${message.author.id}`);
    }
});




client.login(process.env.BOT_TOKEN) // process basically includes everything about the machine