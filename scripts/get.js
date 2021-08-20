const LongIslandLadies = artifacts.require('LongIslandLadies')

module.exports = async callback => {
    const lil = await LongIslandLadies.deployed()
    console.log('Obtaining Player')
    const overview = await lil.ladies(0)
    console.log(overview)
    callback(overview.tx)
}
