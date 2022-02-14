require('dotenv').config()
const DiscordOauth2 = require("discord-oauth2");
const oauth = new DiscordOauth2({
	clientId: process.env.DISCORD_OAUTH2_CLIENT_ID,
	clientSecret: process.env.DISCORD_OAUTH2_CLIENT_SECRET,
	redirectUri: process.env.DISCORD_OAUTH2_CALLBACK_URL,
});

oauth.tokenRequest({
	code: "query code",
	scope: "identify",
	grantType: "authorization_code",
	
	redirectUri: "http://localhost/callback",
}).then(console.log)