const { loadFiles } = require('../lib/loadFiles.js')
const ascii = require('ascii-table')

async function loadEvents(client) {
  const table = new ascii().setHeading('events', 'status')

  await client.events.clear()

  const files = await loadFiles('events')

  files.forEach((file) => {
    const event = require(file)

    const execute = (...args) => event.execute(client, ...args)
    client.events.set(event.name, execute)

    const target = event.rest ? client.rest : client
    const eventFn = event.once ? 'once' : 'on'
    target[eventFn](event.name, execute)

    table.addRow(event.name, '✅')
  })

  return console.log(table.toString(), '\nLoaded Events')
}

module.exports = { loadEvents }
