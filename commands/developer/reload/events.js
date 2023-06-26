const { ChatInputCommandInteraction, Client } = require('discord.js')
const { loadEvents } = require('../../../handlers/loadEvents')

module.exports = {
  subCommand: 'reload.commands',
  /**
   *
   * @param {ChatInputCommandInteraction} interaction
   * @param {Clinet} client
   */
  execute(interaction, client) {
    for (const [key, value] of client.events) {
      client.removeListener(`${key}`, value, true)
    }

    loadEvents(client)
    interaction.reply({ content: 'Reloaded events.', ephemeral: true })
  },
}
