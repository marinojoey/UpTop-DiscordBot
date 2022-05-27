module.exports = {
	name: 'interactionCreate',
	execute(interaction) {
        if(interaction.channel.id == 979418117618937926) {
		    console.log(`${interaction.user.tag} in #${interaction.channel.name} submitted a transcript.`);
        }
	},
};