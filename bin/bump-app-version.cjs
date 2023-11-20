const fs = require('fs')
const path = require('path')
const pkg = require('../package.json')

//

const tauriSrc = path.resolve(__dirname, '../src-tauri')

const tauriSrcUri = fileName => path.resolve(tauriSrc, fileName)

//

const tauriConfigFile = tauriSrcUri('tauri.conf.json')
const tauriConfig = JSON.parse(fs.readFileSync(tauriConfigFile, 'utf8'))

tauriConfig.package.version = String(pkg.version)

fs.writeFileSync(tauriConfigFile, JSON.stringify(tauriConfig, null, 4), 'utf8')

//

const cargoConfigFile = tauriSrcUri('Cargo.toml')
const cargoConfig = fs.readFileSync(cargoConfigFile, 'utf8')
const cargoConfigLines = cargoConfig.split('\n')
const packageIndex = cargoConfigLines.findIndex(it => it === '[package]')
const versionIndex = cargoConfigLines.findIndex((it, i) => i > packageIndex && it.startsWith('version = '))

cargoConfigLines[versionIndex] = `version = "${pkg.version}"`

fs.writeFileSync(cargoConfigFile, cargoConfigLines.join('\n'), 'utf8')
