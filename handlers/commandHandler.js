const { loadFiles } = require('../lib/loadFiles.js')
const ascii = require('ascii-table')

async function loadCommands(client) {
  const table = new ascii().setHeading('Sommands', 'Status')
  await client.commands.clear()
  let commandsArray = []

  const files = await loadFiles('commands')

  files.forEach((file) => {
    const command = require(file)
    client.commands.set(command.data.name, command)

    commandsArray.push(command.data.toJSON())

    table.addRow(command.data.name, '✅')
  })

  client.application.commands.set(commandsArray)

  return console.log(table.toString(), '\nCommands loaded')
}

module.exports = { loadCommands }
