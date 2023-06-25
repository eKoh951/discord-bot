const { glob } = require('glob')

async function loadFiles(dir) {
  try {
    const files = await glob(
      `${process.cwd().replace(/\\/g, '/')}/${dir}/**/*.js`,
    )

    files.forEach((file) => delete require.cache[require.resolve(file)])

    return files
  } catch (e) {
    console.log('error', e)
  }
}

module.exports = { loadFiles }
