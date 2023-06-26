const { ChatInputCommandInteraction, Client } = require('discord.js')
const { loadCommands } = require('../../../handlers/commandHandler')

module.exports = {
  subCommand: 'reload.events',
  /**
   *
   * @param {ChatInputCommandInteraction} interaction
   * @param {Clinet} client
   */
  execute(interaction, client) {
    loadCommands(client)
    interaction.reply({ content: 'Reloaded commands', ephemeral: true })
  },
}
