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
  intents: [Guilds, GuildMembers, GuildMessages],
  partials: [User, Message, GuildMember, ThreadMember],
})

client.config = clientConfig
client.events = new Collection()
client.subCommands = new Collection()
client.commands = new Collection()
const { connect } = require('mongoose')
connect(client.config.mongodbUrl, {}).then(() =>
  console.log('Conectado a la base de datos'),
)

loadEvents(client)

client
  .login(client.config.token)
  .then(() => {
    client.user.setActivity(`pajearse hasta morir SEXOOO`)
  })
  .catch((e) => console.log(e))
