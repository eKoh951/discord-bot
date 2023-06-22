const {
  Client,
  GatewayIntentBits,
  Partials,
  Collection,
} = require('discord.js')
const clientConfig = require('./config.js')
const { loadEvents } = require('./handlers/loadEvents.js')

const { Guilds, GuildMembers, GuildMessages } = GatewayIntentBits
const { User, Message, GuildMember, ThreadMember } = Partials

const client = new Client({
  intents: [Guilds, GuildMember, GuildMembers],
  partials: [User, Message, GuildMember, ThreadMember],
})

client.config = clientConfig
client.events = new Collection()

loadEvents(client)

client
  .login(client.config.token)
  .then(() => {
    // console.log(`Bot is ready. Client logged in as ${client.user.username}`)
    client.user.setActivity(`pajearse hasta morir SEXOOO`)
  })
  .catch((e) => console.log(e))
