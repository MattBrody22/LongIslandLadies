const LongIslandLadies = artifacts.require('LongIslandLadies')

module.exports = async callback => {
  const lil = await LongIslandLadies.deployed()
  console.log('Building Ladies', lil.address)
  const tx = await lil.buildLadies("Becca")
  const tx2 = await lil.buildLadies("Jess")
  const tx3 = await lil.buildLadies("Diandra")
  const tx4 = await lil.buildLadies("kait")
  callback(tx.tx)
}