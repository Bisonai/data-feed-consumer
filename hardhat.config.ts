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
      url: 'https://api.baobab.klaytn.net:8651',
      chainId: 1001,
      ...commonConfig
    },
    cypress: {
      url: 'https://public-en-cypress.klaytn.net',
      ...commonConfig
    }
  },
  namedAccounts: {
    deployer: {
      default: 0
    },
    aggregatorProxy: {
      baobab: '0x6492009c469373972710744eD34725D96D8c07B3' // BTC-USDT
      // baobab: '0xFD91E50218a5451a88D7C83Ed7b555F20aa216f2' // ETH-USDT
      // baobab: '0x1BFf2A4B141a18532A141Ec079FbAb615bba907f' // KLAY-USDT
      // baobab: '0xCe0BBfA49C0b82B9768DFB8d1f1efC907a496842' // MATIC-USDT
      // baobab: '0x900350a321c12Ad5388DE96087FdCF90f7ec319B' // SOL-USDT
      // baobab: '0xFd5fb8a27ADd2Faa62Ef3c5f0EA78AEAbE1E07A3' // USDC-USDT
      // baobab: '0xC0B2da601400c9dd49D8eF29E47a16a47932331e' // DAI-USDT
      // baobab: '0xeD2c791eae84a9845f7832110c9Cd7E1D9670235' // DOT-USDT
      // baobab: '0x694b6591bA06Ea48b9A07dB78B93cCdF5d144f38' // BNB-USDT
      // baobab: '0x9ED2D63D6af73b416E0a47B56899ddE8435d89a6' // TRX-USDT
      // baobab: '0x88DaE047193444aba53B316f40961528c326080d' // BUSD-USDT
      // baobab: '0xe9656248A3148f4cfed909fE4c79B386c9b2d595' // MNR-KRW
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
