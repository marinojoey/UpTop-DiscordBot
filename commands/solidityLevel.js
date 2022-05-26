const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('level')
		.setDescription('Tells you what level the user is'),
	async execute(interaction) {
		await interaction.reply(`${interaction.user.tag} is level 2!`);
	},
};
