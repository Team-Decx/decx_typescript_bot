import DiscordJS, { Intents } from 'discord.js';
import dotenv from 'dotenv';
dotenv.config();

const client = new DiscordJS.Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES,
    ]
});

client.on('ready', () => {
    console.log('Nosso bot está online com sucesso!');
});

client.on('messageCreate', (message) => {
    if(message.content === 'Oi') {
        message.reply({
            content: 'Olá'
        });
    }
});

client.login(process.env.token);