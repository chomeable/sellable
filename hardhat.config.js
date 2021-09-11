require('dotenv').config()
require("@nomiclabs/hardhat-waffle");

module.exports = {
  networks: {
    hardhat: {
      chainId: 1337
    },
    mumbai: {
      url: `https://polygon-mumbai.infura.io/v3/${process.env.projectId}`,
      accounts: [process.env.privateKey]
    },
    mainnet: {
      url: `https://polygon-mainnet.infura.io/v3/${process.env.projectId}`,
      accounts: [process.env.privateKey]
    },
  },
  solidity: "0.8.4",
};
