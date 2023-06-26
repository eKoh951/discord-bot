const { SlashCommandBuilder, PermissionFlagsBits } = require('discord.js')

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
  name: 'reload',
  description: 'Reloads a command',
}
