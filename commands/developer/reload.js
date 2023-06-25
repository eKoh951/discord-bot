const {
  ChatInputCommandInteraction,
  SlashCommandBuilder,
  PermissionFlagsBits,
} = require('discord.js')
const { loadCommands } = require('../../handlers/commandHandler.js')
const { loadEvents } = require('../../handlers/loadEvents.js')

module.exports = {
  developer: true,
  data: new SlashCommandBuilder()
    .setName('reload')
    .setDescription('Reloads a command.')
    .setDefaultMemberPermissions(PermissionFlagsBits.Administrator)
    .addSubcommand((options) =>
      options.setName('events').setDescription('Reload your event'),
    )
    .addSubcommand((options) =>
      options.setName('commands').setDescription('Reload your commands'),
    ),
  /**
   *
   * @param {ChatInputCommandInteraction} interaction
   * @param {SlashCommandBuilder} client
   */
  execute(interaction, client) {
    const subCommand = interaction.options.getSubcommand()

    switch (subCommand) {
      case 'events':
        for (const [key, value] of client.events) {
          client.removeListener(`${key}`, value, true)
        }

        loadEvents(client)
        interaction.reply({ content: 'Reloaded events.', ephemeral: true })
        break

      case 'commands':
        loadCommands(client)
        interaction.reply({ content: 'Reloaded commands', ephemeral: true })
        break
    }
  },
  name: 'reload',
  description: 'Reloads a command',
}
