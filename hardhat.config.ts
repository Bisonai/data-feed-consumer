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
    version: '0.8.20',
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
    kairos: {
      url: process.env.PROVIDER || 'https://public-en.kairos.node.kaia.io',
      chainId: 1001,
      ...commonConfig
    },
    mainnet: {
      url: process.env.PROVIDER || 'https://public-en.node.kaia.io',
      ...commonConfig
    }
  },
  namedAccounts: {
    deployer: {
      default: 0
    },
    /*
    ### Contract Addresses
    https://raw.githubusercontent.com/Bisonai/orakl/master/contracts/v0.1/deployments/datafeeds-addresses.json
    */
    feedProxy: {
      kairos: '0x23c95f4842ac01a6eca3381005c5749f575ea801' // BTC-USDT
    },
    feedRouter: {
      kairos: '0xd9dbbb92a6ecb8b8d3e386b8d0ad8284bd816ef1'
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
