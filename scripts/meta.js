const LongIslandLadies = artifacts.require('LongIslandLadies')
const fs = require('fs')

const MetaTemp = {
    "name": "",
    "desription": "",
    "image": "",
    "attributes": [
        {
            "trait_type": "Attractiveness",
            "value": 0 
        },
        {
            "trait_type": "Loyalty",
            "value": 0 
        },
        {
            "trait_type": "Kissing",
            "value": 0 
        },
        {
            "trait_type": "Oral",
            "value": 0 
        },
        {
            "trait_type": "Anal",
            "value": 0 
        },
        {
            "trait_type": "Kinks",
            "value": 0
        }
    ]
}
module.exports = async callback => {
    const lil = await LongIslandLadies.deployed()
    length = await lil.obtainLadies()
    index = 0 
    while (index < length) {
        console.log('Overview of ladies' + index + 'of' + length)
        let lilmeta = MetaTemp
        let obtainPlayer = await lil.ladies(index)
        index++
        lilmeta['name'] = obtainPlayer['name']
        if(fs.existsSync('metadata/' + lilmeta['name'].toLowerCase().replace(/\s/g, '-') + '.json')) {
            console.log('test')
            continue 
        }
        console.log(lilmeta['name'])
        lilmeta['attributes'][0]['value'] = obtainPlayer['Attractiveness']['words'][0]
        lilmeta['attributes'][1]['value'] = obtainPlayer['Loyalty']['words'][0]
        lilmeta['attributes'][2]['value'] = obtainPlayer['Kissing']['words'][0]
        lilmeta['attributes'][3]['value'] = obtainPlayer['Oral']['words'][0]
        lilmeta['attributes'][4]['value'] = obtainPlayer['Anal']['words'][0]
        lilmeta['attributes'][5]['value'] = obtainPlayer['Kinks']['words'][0]
        filename = 'metadata/' + lilmeta['name'].toLowerCase().replace(/\s/g, '-')
        let data = JSON.stringify(lilmeta)
        fs.writeFileSync(filename + '.json', data)
    }
    callback(lil)
}