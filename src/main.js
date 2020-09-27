require('dotenv').config(); // global function

const Discord = require('discord.js')
const client = new Discord.Client();
const config = require('../config.json');
const fs = require('fs');

client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));


for (const file of commandFiles) {
    const command = require(`../commands/${file}`);
    client.commands.set(command.name, command);
}


client.on('ready', () => {
    console.log(`${client.user.tag} has logged in`);
    console.log(`${config.botinfo.name} is version ${config.botinfo.version}`);
    client.user.setActivity("planet earth", { type: "WATCHING" });
})

client.on('message', message => {

    if (!message.content.startsWith(config.prefix) || message.author.bot) return;


    const args = message.content.slice(config.prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();


    if (command === 'beep') {
        client.commands.get('beep').execute(message, args);
    }

    if (command === 'shit') {
        client.commands.get('shit').execute(message, args);
    }

    if (command === 'sad') {
        client.commands.get('sad').execute(message, args);
    }

    if (command === 'happy') {
        client.commands.get('happy').execute(message, args);
    }

    if (command === 'damn') {
        client.commands.get('damn').execute(message, args);
    }

    if (command === 'nice') {
        client.commands.get('nice').execute(message, args);
    }

    if (command === 'id') {
        client.commands.get('id').execute(message, args);
    }

    if (command === 'total') {
        client.commands.get('total').execute(message, args);
    }

});




client.login(process.env.BOT_TOKEN) // process basically includes everything about the machine