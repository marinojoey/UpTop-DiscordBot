const { GoogleSpreadsheet } = require('google-spreadsheet');
const creds = require('./uptop-candidate-sheet-fa70f955bd8a.json')
const doc = new GoogleSpreadsheet('1uwI7ZzdIy1L3EAF0BSlnXgqAWEAZAsuSOOHF2GwXH18');
const dotenv = require("dotenv")
dotenv.config()
const GOOGLE_PRIVATE_KEY = process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/gm, '\n');
const GOOGLE_EMAIL_ADDRESS = process.env.GOOGLE_EMAIL_ADDRESS;
const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY;

async function main() {
    await doc.useServiceAccountAuth(creds);
      
    await doc.loadInfo(); // loads document properties and worksheets
    console.log(doc.title);
    
    
    const sheet = doc.sheetsByIndex[0]; // or use doc.sheetsById[id] or doc.sheetsByTitle[title]
    console.log(sheet.title);
    await sheet.addRow(['Joey', 'Denver'])

};

main();