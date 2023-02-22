import { ethers } from 'hardhat'

async function main() {
  const userContract = await ethers.getContract('DataFeedConsumer')
  console.log('DataFeedConsumer', userContract.address)

  await (await userContract.getLatestData()).wait()

  const data = await userContract.sData()
  const roundId = await userContract.sRoundId()
  console.log(`data ${data.toString()}`)
  console.log(`roundId ${roundId.toString()}`)
}

main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
