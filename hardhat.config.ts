import { HardhatUserConfig, task } from 'hardhat/config'
import '@nomicfoundation/hardhat-toolbox'
import '@nomiclabs/hardhat-web3'
import '@nomiclabs/hardhat-ethers'
import 'hardhat-deploy'
import dotenv from 'dotenv'

dotenv.config()

let commonConfig = {}
if (process.env.PRIV_KEY) {
  commonConfig = {
    gas: 5_000_000,
    gasPrice: 250_000_000_000,
    accounts: [process.env.PRIV_KEY]
  }
} else {
  commonConfig = {
    gas: 5_000_000,
    gasPrice: 250_000_000_000,
    accounts: {
      mnemonic: process.env.MNEMONIC || ''
    }
  }
}

const config: HardhatUserConfig = {
  solidity: {
    version: '0.8.16',
    settings: {
      optimizer: {
        enabled: true,
        runs: 1000
      }
    }
  },

  networks: {
    localhost: {
      gas: 1_400_000,
      gasPrice: 250_000_000_000
    },
    baobab: {
      url: process.env.PROVIDER || 'https://api.baobab.klaytn.net:8651',
      chainId: 1001,
      ...commonConfig
    },
    cypress: {
      url: process.env.PROVIDER || 'https://public-en-cypress.klaytn.net',
      ...commonConfig
    }
  },
  namedAccounts: {
    deployer: {
      default: 0
    },
    /*
    ### Contract Addresses
    - Baobab: https://github.com/Bisonai/orakl/tree/master/contracts/v0.1/deployments/baobab
    - Cypress: https://github.com/Bisonai/orakl/tree/master/contracts/v0.1/deployments/cypress
    */
    aggregatorProxy: {
      baobab: '0x4b0687ce6eC3Fe6c019467c744D0C563643BdFa4' // BTC-USDT
      // cypress: '0xc0516486DD0837a8Dd6E502F9134Ff3c421377AC', // BTC-USDT
    },
    aggregatorRouter: {
      baobab: '0xAF821aaaEdeF65b3bC1668c0b910c5b763dF6354'
      //cypress: '0x16937CFc59A8Cd126Dc70A75A4bd3b78f690C861'
    }
  }
}

task('address', 'Convert mnemonic to address')
  .addParam('mnemonic', "The account's mnemonic")
  .setAction(async (taskArgs, hre) => {
    const wallet = hre.ethers.Wallet.fromMnemonic(taskArgs.mnemonic)
    console.log(wallet.address)
  })

export default config
