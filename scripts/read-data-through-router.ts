import { ethers } from 'hardhat'

const pair_name = "BTC-USDT"

async function main() {
  const userContract = await ethers.getContract('DataFeedConsumer')
  console.log('DataFeedConsumer', userContract.address)

  await (await userContract.getLatestDataThroughRouter(pair_name)).wait()

  const answer = await userContract.answer()
  const roundId = await userContract.roundId()
  console.log(`answer ${answer.toString()}`)
  console.log(`roundId ${roundId.toString()}`)
}

main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
