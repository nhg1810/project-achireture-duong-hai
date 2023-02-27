const { google } = require('googleapis')
const path = require("path");
const fs = require("fs");
const process = require('process');
require('dotenv').config();


//connected to gg 
const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
const REDIRECT_URL = process.env.REDIRECT_URL;
const REFRESH_TOKEN = process.env.REFRESH_TOKEN;

const oauth2Client = new google.auth.OAuth2(
    CLIENT_ID,
    CLIENT_SECRET,
    REDIRECT_URL
);
oauth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });
const drive = google.drive({
    version: 'v3',
    auth: oauth2Client
});
class GoogleHelper {
    //get all list file in folder ggdriver
    async listFiles(googleFolderId) {
        console.log(oauth2Client)
        let arr = [];
        const response = await
            drive.files.list({
                fields: 'nextPageToken, files(*)',
                q: `'${googleFolderId}' in parents`,
            });
        if (response.data) {
            console.log(response.data.files.length)
            response.data.files.map((file) => {
                arr.push(file);
            })
        }
        return arr;
    }
}
module.exports = new GoogleHelper();
