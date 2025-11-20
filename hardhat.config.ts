require("dotenv").config();
require("@nomicfoundation/hardhat-ethers");
require("@nomicfoundation/hardhat-chai-matchers");
require("@nomicfoundation/hardhat-verify");
require('hardhat-deploy');
require('hardhat-tracer');
require("@typechain/hardhat");
require('hardhat-dependency-compiler');

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  networks: {
    localhost: {
      url: "http://127.0.0.1:8545",
    },
    sepolia: {
      url: process.env.SEPOLIA_RPC_URL || "",
      accounts: process.env.PRIVATE_KEY ? ["0x" + process.env.PRIVATE_KEY] : [],
    },
    // Add your deployment network here and the corresponding URL in the .env file
  },
  namedAccounts: {
    deployer: {
      default: 0, // here this will by default take the first account as deployer
    },
  },
  solidity: {
    version: "0.8.30",
    settings: {
      optimizer: {
        enabled: true,
        runs: 1000000000,
      },
      evmVersion: "cancun",
      viaIR: true
    }
  },
  typechain: {
    outDir: "typechain-types",
  },
  etherscan: {
    apiKey: {
      // Add your Etherscan API keys here
      mainnet: process.env.ETHERSCAN_API_KEY || "",
      sepolia: process.env.ETHERSCAN_API_KEY || "",
      // Add other networks as needed
    }
  },
  dependencyCompiler: {
    paths: [
      '@1inch/aqua/src/Aqua.sol',
      '@1inch/solidity-utils/contracts/mocks/TokenMock.sol',
    ],
  },
};
