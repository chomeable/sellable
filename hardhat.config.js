require('dotenv').config()
require("@nomiclabs/hardhat-waffle");

const projectId = process.env.projectId

module.exports = {
  networks: {
    hardhat: {
      chainId: 1337
    },
    mumbai: {
      url: `https://polygon-mumbai.infura.io/v3/${projectId}`,
      accounts: [process.env.privateKey]
    },
    mainnet: {
      url: `https://polygon-mainnet.infura.io/v3/${projectId}`,
      accounts: [process.env.privateKey]
    },
  },
  solidity: "0.8.4",
};
