require('dotenv').config()

const config = {
  token: process.env.DISCORD_BOT_TOKEN,
  developerGuild: process.env.DISCORD_DEVELOPER_GUILD,
  develoeprId: process.env.DISCORD_DEVELOPER_ID,
  clientId: process.env.DISCORD_CLIENT_ID,
  mongodbUrl: process.env.MONGODB_URL,
}

module.exports = config
