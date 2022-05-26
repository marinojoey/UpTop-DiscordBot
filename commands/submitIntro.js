const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('submit')
		.setDescription('Transmits submission to the google sheet'),
	async execute(interaction) {
        const { GoogleSpreadsheet } = require('google-spreadsheet');
        const creds = require('../uptop-candidate-sheet-fa70f955bd8a.json')
        const doc = new GoogleSpreadsheet('1uwI7ZzdIy1L3EAF0BSlnXgqAWEAZAsuSOOHF2GwXH18');

        async function sheetScript(candidate, location) {
            await doc.useServiceAccountAuth(creds);
            
            await doc.loadInfo(); // loads document properties and worksheets
            console.log(doc.title);
            
            const sheet = doc.sheetsByIndex[0]; // or use doc.sheetsById[id] or doc.sheetsByTitle[title]
            console.log(sheet.title);
            await sheet.addRow([candidate, location]);

        };
        sheetScript("joey", "denver")
		await interaction.reply(`${interaction.user.tag}'s introduction has been submitted!`);
	},
};
