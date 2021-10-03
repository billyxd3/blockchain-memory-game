const MemoryToken = artifacts.require("MemoryToken");

module.exports = async function (deployer, network, accounts) {
  await deployer.deploy(MemoryToken);
};
