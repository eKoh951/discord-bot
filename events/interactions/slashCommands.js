const { ChatInputCommandInteraction } = require('discord.js')

module.exports = {
  name: 'interactionCreate',
  /**
   *
   * @param {ChatInputCommandInteraction} interaction
   */
  execute(client, interaction) {
    if (!interaction.isChatInputCommand()) return

    const command = client.commands.get(interaction.commandName)

    if (!command) {
      return interaction.reply({
        content: 'This command is outdated.',
        ephemeral: true,
      })
    }

    if (command.developer && interaction.user.id !== '616416928331726859') {
      return interaction.reply({
        content: 'This command is only available to the developer.',
      })
    }

    command.execute(interaction, client)
  },
}
