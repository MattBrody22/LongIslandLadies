const LongIslandLadies = artifacts.require("LongIslandLadies");

module.exports = async (deployer, network, defaultAccount) => {
  await deployer.deploy(LongIslandLadies);
  const lil = LongIslandLadies.deployed();
};
