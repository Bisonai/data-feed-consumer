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

      // cypress: '0x7aa7bD1A2AD16527293200a4Fecc9548b2822A59', // BNB-USDT
      // cypress: '0xc0516486DD0837a8Dd6E502F9134Ff3c421377AC', // BTC-USDT
      // cypress: '0x31e438B3d2b838a30A0c02460cd1E6B7a6ED5B60', // BUSD-USDT
      // cypress: '0xC12f7c66b3F192b074Ff883803bAb7571bd6a25D', // DAI-USDT
      // cypress: '0x90708e35E62dea8024dE3672Ca05a4626D5d5e9C', // DOT-USDT
      // cypress: '0x37C637922D6F5F62e067588A75E9d59c26cd64c3', // ETH-USDT
      // cypress: '0x33D6ee12D4ADE244100F09b280e159659fe0ACE0', // KLAY-USDT
      // cypress: '0xC51B1ec2e0a88c7156Af634cB46F83525F00F784', // MATIC-USDT
      // cypress: '0x61be615807fC5306E1C691D290a422aF7995B4C5', // MNR-KRW
      // cypress: '0x09B387816847AB0702aFb4e4FfA43240dcA20Bc6', // SOL-USDT
      // cypress: '0x28A69574604E01c86C116Fe4C6EdE28CDbe66b4B', // TRX-USDT
      // cypress: '0x0Eb4cA5f008080191a7780101118b5a26e9925E4', // USDC-USDT
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
