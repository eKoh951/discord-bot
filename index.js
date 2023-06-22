const { Client } = require("discord.js")

const client = new Client({ intents: ["Guilds"] })

client.config = require("./config.json")

client.login(client.config.token).then(() => {
	console.log(`Bot is ready. Client logged in as ${client.user.username}`)
	client.user.setActivity(`pajearse hasta morir xddd`)
}).catch((e) => console.log(e))