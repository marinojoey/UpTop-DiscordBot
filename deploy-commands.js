// const { SlashCommandBuilder } = require('@discordjs/builders');
const fs = require('node:fs');
const path = require('node:path');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const dotenv = require("dotenv")
dotenv.config()
const BOT_KEY = process.env.BOT_KEY;
const APPLICATION_ID = process.env.APPLICATION_ID;
const GUILD_ID = process.env.GUILD_ID;

const commands = [];
const commandsPath = path.join(__dirname, 'commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const filePath = path.join(commandsPath, file);
	const command = require(filePath);
	commands.push(command.data.toJSON());
}

const rest = new REST({ version: '9' }).setToken(BOT_KEY);

rest.put(Routes.applicationGuildCommands(APPLICATION_ID, GUILD_ID), { body: commands })
	.then(() => console.log('Successfully registered application commands.'))
	.catch(console.error);


// const commands = [
// 	new SlashCommandBuilder().setName('ping').setDescription('Replies with pong!'),
// 	new SlashCommandBuilder().setName('server').setDescription('This is my test server for developing UpTop\'s discord server'),
// 	new SlashCommandBuilder().setName('user').setDescription('Replies with user info!'),
// ]
// 	.map(command => command.toJSON());