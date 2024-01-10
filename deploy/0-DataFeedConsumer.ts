import { HardhatRuntimeEnvironment } from 'hardhat/types'
import { DeployFunction } from 'hardhat-deploy/types'

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployments, getNamedAccounts, network } = hre
  const { deploy } = deployments
  const { deployer, aggregatorProxy: aggregatorProxyAddress, aggregatorRouter: aggregatorRouterAddress } = await getNamedAccounts()

  console.log('0-DataFeedConsumer.ts')

  if (network.name != 'baobab') {
    console.log('Skipping')
    return
  }

  await deploy('DataFeedConsumer', {
    args: [aggregatorProxyAddress, aggregatorRouterAddress],
    from: deployer,
    log: true
  })
}

export default func
func.id = 'deploy-data-feed-consumer'
func.tags = ['data-feed-consumer']
