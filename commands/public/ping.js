const {
  ChatInputCommandInteraction,
  SlashCommandBuilder,
} = require('discord.js')

module.exports = {
  data: new SlashCommandBuilder()
    // .options({ name: 'ping', description: 'Will respond with pong.' })
    .setName('ping')
    .setDescription('Will respond with pong.'),
  /**
   *
   * @param {ChatInputCommandInteraction} interaction
   */
  execute(interaction) {
    interaction.reply({ content: 'Pong!', ephemeral: true })
  },
}
