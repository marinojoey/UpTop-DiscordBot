const { Client, Intents } = require('discord.js');
const dotenv = require("dotenv")
dotenv.config()

const BOT_KEY = process.env.BOT_KEY;

const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.once('ready', () => {
	console.log('Ready!');
});

client.login(BOT_KEY);
