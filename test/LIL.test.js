
const { expectRevert } = require('@openzeppelin/test-helpers')

const CHARACTER_NAME = "Shrek"

contract('LongIslandLadies', accounts => {
    const LongIslandLadies = artifacts.require('LongIslandLadies.sol')
    const defaultAccount = accounts[0]

    let lil

    beforeEach(async () => {
        lil = await LongIslandLadies.new({ from: defaultAccount })
    })
})
