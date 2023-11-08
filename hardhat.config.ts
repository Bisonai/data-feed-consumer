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
      // baobab: '0xB9C1839A40cED59Fb9e55Eb52a3B8B7E62aF1568', // ADA-USDT
      // baobab: '0x886703ebE4E18645B708b3fC9f528d2a9aed8D8b', // ATOM-USDT
      // baobab: '0xeae732C571aEdB41d58Db5390D96691E6B54a580', // AVAX-USDT
      // baobab: '0x464fBa38a41526fc61Ca6Ed2C9cD7B38d822B72a', // DOGE-USDT
      // baobab: '0x271ce3EB7cb9124aEaa26D18E2c448b10f2C2D21', // FTM-USDT
      // baobab: '0x597a5ab68296d4dEC1296d8A96eFb3FC8b2BaE3f', // LTC-USDT
      // baobab: '0x555E072996d0335Ec63B448ddD507CB99379C723', // PAXG-USDT
      // baobab: '0x51Ec645B728c6882D362677c90A6D51bb0998AD1', // SHIB-USDT
      // baobab: '0xa7A93c5eaabD1c458522F00a53897D5f32Da232d', // UNI-USDT
      // baobab: '0xDcb088788722198aaED3F4F7a396558eC98cfCD0', // XRP-USDT
      // baobab: '0x9b8B4Ea7c3934E278430fa9F9b83466fE9387a19', // JOY-USDT
      // baobab: '0x40353aCA7D7242C79f14443944114434E7581eFC', // WEMIX-USDT
      // baobab: '0x64abc78320d92c350532336D6Fc51AFEe8A8e90f', // MBX-KRW
      // baobab: '0x3e4685BA1FD98D8eCBC3fc4beB8B4Abb04f7E215', // KSP-KRW
      // baobab: '0x769385f036a2AD77EC28e2db91Ca2feE96a0b096', // BORA-KRW

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
      // cypress: '0x04a77b347d1e0FD6FA9af328aB0232F3F2Be05C0', // ADA-USDT
      // cypress: '0x1eD814571AB8FA61F546dDb92125d22dc7dAd150', // ATOM-USDT
      // cypress: '0x5E64449c9088Be970608856Fb817dAc364bf63A5', // AVAX-USDT
      // cypress: '0x0dcb00FBDd314dbd524927D769cd2da0092Ab644', // DOGE-USDT
      // cypress: '0x6be0DA4Fc7b9ffB1254EA118ee2a8Fa018DB15f4', // FTM-USDT
      // cypress: '0x31144fAac15241aB56434740ea8C32F626DDE575', // LTC-USDT
      // cypress: '0x7E418fE88A22Dbb71bb81979A0d54EF4e8Fade73', // PAXG-USDT
      // cypress: '0xBb05a3cbe50cF725be9302539bFA502F78D4236E', // SHIB-USDT
      // cypress: '0x40F0Ef1d120526712cf3AF77CF14348b19b83EAe', // UNI-USDT
      // cypress: '0xc73665899A0b82f10D40Ea072C7A3a6F3a1c8d3D', // XRP-USDT
      // cypress: '0xd15aD2c20a9Ef664744FB0Ad11E5F78b09D44Aa2', // JOY-USDT
      // cypress: '0xf67882c83deb1b537CFbC4c9A797E8b536464ade', // WEMIX-USDT
      // cypress: '0xCB1ce544Fdf03875CA1F269d6fEAA09488271014', // MBX-KRW
      // cypress: '0x4f8E5adeB2914e62A196fefB8325337ED8a39bb7', // KSP-KRW
      // cypress: '0xc4ED7b2A57789ff945ea21D18d77757052c29aB6', // BORA-KRW
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
