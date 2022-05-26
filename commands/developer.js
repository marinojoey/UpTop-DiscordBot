const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('developer')
		.setDescription('tells the user who made the bot'),
	async execute(interaction) {
		await interaction.reply('This bot was made by Joey!');
	},
};
