const { ChatInputCommandInteraction } = require('discord.js')
const config = require('../../config.js')

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

    if (command.developer && interaction.user.id !== `${config.develoeprId}`) {
      return interaction.reply({
        content: 'This command is only available to the developer.',
      })
    }

    const subCommand = interaction.options.getSubcommand()

    if (subCommand) {
      const subCommandFile = client.subCommands.get(
        `${interaction.commandName}.${subCommand}`,
      )

      if (!subCommandFile) {
        return interaction.reply({
          content: 'This subcommand is outdated.',
          ephemeral: true,
        })
      }

      subCommandFile.execute(interaction, client)
    } else {
      command.execute(interaction, client)
    }
  },
}
