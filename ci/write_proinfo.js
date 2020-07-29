const chalk = require('chalk'),
  DateFormat = require('fast-date-format'),
  fs = require('fs-extra'),
  path = require('path'),
  pkgJson = require('../package.json')

const r = (...p) => path.resolve(__dirname,'../',...p)


const isPre = (process.env.PRE_REL === 'N' || process.env.PRE_REL === '0' || process.env.PRE_REL === 'false') ? false : true
console.log("process.env.PRE_REL", process.env.PRE_REL, isPre)
const proInfo = 'src/bascore/proinfo.json'

const dateFormat = () => {
  return isPre ? new DateFormat('YYMMDD_HHmm') : new DateFormat('YYDDD')
}

/**
 *
 * @param {string} filePath
 */
async function writeProInfo ( filePath ) {
  const ver = pkgJson.version || '1.0.0'
  const dt = new Date()
  const datetime = (new DateFormat('YYMMDDHHmmss')).format(dt)
  const tagSuffix = dateFormat().format(dt)
  const buildTag = isPre ? `Pre-${ver}_${tagSuffix}` : `${ver}_${tagSuffix}`


  let infoJson = {
    dappname: pkgJson.name || 'Minner-Console',
    author: pkgJson.author || 'tdvni',
    dappverion:ver,
//    datetime:datetime,
    "build-tag": buildTag,
    description: pkgJson.description ||''
  }

  fs.ensureFileSync(filePath)

  console.log(chalk.magenta('writing proinfo:\n'),
    chalk.cyan(`version: ${ver}`),
    chalk.cyan(`, build-tag: ${buildTag}`))

  fs.outputJsonSync(
    filePath,
    infoJson,
    {
      spaces: 2,
      EOL: '\n'
    }
  )
  console.log(chalk.magenta('write proinfo complete.'))
}


/** Execute Begin */
writeProInfo(proInfo)
