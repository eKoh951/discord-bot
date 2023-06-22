const { Client } = require('discord.js')

const client = new Client({ intents: ['Guilds'] })

const config = require('./config.js')
client.config = config

client
  .login(client.config.token)
  .then(() => {
    console.log(`Bot is ready. Client logged in as ${client.user.username}`)
    client.user.setActivity(`pajearse hasta morir SEXOOO`)
  })
  .catch((e) => console.log(e))
