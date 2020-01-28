const fs = require('fs')

exports.excludes = ['test-example']

exports.targets = fs.readdirSync('packages').filter(f => {
  if (this.excludes.includes(f)) {
    return false
  }
  if (!fs.statSync(`packages/${f}`).isDirectory()) {
    return false
  }
  const pkg = require(`../packages/${f}/package.json`)
  if (pkg.private) {
    return false
  }
  return true
})