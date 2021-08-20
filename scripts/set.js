const LongIslandLadies = artifacts.require('LongIslandLadies')
const TOKENID = 0
module.exports = async callback => {
    const lil = await LongIslandLadies.deployed()
    console.log('tokenURI of your players')
    const tx = await lil.setTokenURI(0, "https://ipfs.io/ipfs/QmdWHEiVTv7RAksk89hscgQSM3Y64Ts9zTTKgtX24jJmB6?filename=Becca.json")
    const tx1 = await lil.setTokenURI(1, "https://ipfs.io/ipfs/QmQoHqNz24M1YgXrBgToxfFkantHhip7L7PKGSDQ66pjw2?filename=Jess.json")
    const tx2 = await lil.setTokenURI(2, "https://ipfs.io/ipfs/QmXZTJCi9Jj1bGZRsLtXZbQNtwbxozcQ2EpA7ijoaahHMP?filename=Diandra.json")
    const tx3 = await lil.setTokenURI(3, "https://ipfs.io/ipfs/QmeMostcBzBkNhARLv93QabqZucr1HyKSDSzoVkdSYJex6?filename=Kait.json")
    console.log(tx)
    callback(tx.tx)
}