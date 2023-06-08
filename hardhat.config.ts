import { HardhatUserConfig, task } from 'hardhat/config'
import '@nomicfoundation/hardhat-toolbox'
import '@nomiclabs/hardhat-web3'
import '@nomiclabs/hardhat-ethers'
import 'hardhat-deploy'
import dotenv from 'dotenv'

dotenv.config()

let commonConfig = { gas: 5_000_000, gasPrice: 250_000_000_000 }
if (process.env.PRIV_KEY) {
  commonConfig = {
    ...commonConfig,
    accounts: [process.env.PRIV_KEY]
  }
} else {
  commonConfig = {
    ...commonConfig,
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
    aggregatorProxy: {
      // baobab: '0xFA4CfAD7DBB1a0b3e85d0b736cf00289edDDDd5F', // BNB-USDT
      baobab: '0x4b0687ce6eC3Fe6c019467c744D0C563643BdFa4' // BTC-USDT
      // baobab: '0x6727E828CCa9b5cB639e740d5A275Cd7CdB0b647', // BUSD-USDT
      // baobab: '0xdE2aA055F8DA4d2a4A5063b8736C8455AEa8aB3F', // DAI-USDT
      // baobab: '0x7dc55064b6ea6B75F8A73DC142707aAd0A37541c', // DOT-USDT
      // baobab: '0xAEc43Fc8D4684b6A6577c3B18A1c1c6d3D55C28E', // ETH-USDT
      // baobab: '0xC874f389A3F49C5331490145f77c4eFE202d72E1', // KLAY-USDT
      // baobab: '0x311Ec6D3a9db944aE0e92B083F1dbDe0cECcAA1C', // MATIC-USDT
      // baobab: '0x6DEbE43FD00D3Dcc93D8695a3031fC8887242dee', // MNR-KRW
      // baobab: '0x3C39209e85c1a27f1B992Bcf3416f5fC84764F2e', // SOL-USDT
      // baobab: '0x37c7Aac954e721eaBA28c58BeF496529Cde32d5f', // TRX-USDT
      // baobab: '0xd46Ca83fdC20641ce2e225E930FBfb8CE8334660', // USDC-USDT
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
