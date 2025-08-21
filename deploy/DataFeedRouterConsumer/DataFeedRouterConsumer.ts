import { HardhatRuntimeEnvironment } from 'hardhat/types'
import { DeployFunction } from 'hardhat-deploy/types'

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployments, getNamedAccounts, network } = hre
  const { deploy } = deployments
  const { deployer, feedRouter: feedRouterAddress } = await getNamedAccounts()

  console.log('1-DataFeedRouterConsumer.ts')

  if (network.name != 'kairos') {
    console.log('Skipping')
    return
  }

  await deploy('DataFeedRouterConsumer', {
    args: [feedRouterAddress],
    from: deployer,
    log: true
  })
}

export default func
func.id = 'deploy-data-feed-router-consumer'
func.tags = ['data-feed-router-consumer']
