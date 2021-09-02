module.exports = {
  Admins: ["835185335808819262", "771790069307801680"], //Admins of the bot
  ExpressServer: true,//If you wanted to make the website run or not
  DefaultPrefix: process.env.Prefix || "?", //Default prefix, Server Admins can change the prefix
  Port: 3000, //Which port website gonna be hosted
  SupportServer: "https://discord.gg/gH83sJP7Kv", //Support Server Link
  Token: process.env.Token || "ODgxOTU5MzQzOTcxNTI4NzE0.YS0apQ.y_ZZwptuWViU_Y0fACaMsH_w1Bk", //Discord Bot Token
  ClientID: process.env.Discord_ClientID || "881959343971528714", //Discord Client ID
  ClientSecret: process.env.Discord_ClientSecret || "UjsTm-MV-n0xEHgNmhnBGiOLSaU9rBhJ", //Discord Client Secret
  Scopes: ["identify", "guilds", "applications.commands"], //Discord OAuth2 Scopes
  CallbackURL: "/api/callback", //Discord OAuth2 Callback URL
  "24/7": false, //If you want the bot to be stay in the vc 24/7
  CookieSecret: "Pikachu is cute", //A Secret like a password
  IconURL:
    "https://raw.githubusercontent.com/SudhanPlayz/Discord-MusicBot/master/assets/logo.gif", //URL of all embed author icons | Dont edit unless you dont need that Music CD Spining
  Permissions: 2205280576, //Bot Inviting Permissions
  Website: process.env.Website || "http://localhost", //Website where it was hosted at includes http or https || Use "0.0.0.0" if you using Heroku

  //Lavalink
   Lavalink: {
    id: "Main",
    host: "lava.link",
    port: 80,
    pass: "youshallnotpass", 
    secure: false, // Set this to true if you're self-hosting lavalink on replit.
  },
  
  //Alternate Lavalink
  /*
  Lavalink: {
    id: "Main",
    host: "lava.sudhan.tech",
    port: 1234,
    pass: "CodingWithSudhan", 
    secure: false // Set this to true if you're self-hosting lavalink on replit.
  },
  */

  //Please go to https://developer.spotify.com/dashboard/
  Spotify: {
    ClientID: process.env.Spotify_ClientID || "9a1c1b46f954417b87cea7021cadc3cf", //Spotify Client ID
    ClientSecret: process.env.Spotify_ClientSecret || "f8448b4c6e054a77b878ea69ce9fe36e", //Spotify Client Secret
  },
};
