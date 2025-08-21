# Data Feed Consumer

Consumer smart contract that reads from [Orakl Network](https://www.orakl.network) Data Feed.

> Warning: This repository and smart contract are meant to be for deployment on Kairos.

Currently, you can access the following data feeds from Orakl Network.

## Contract Addresses

Reference following link to check deployed addresses

[`Feeds`](https://raw.githubusercontent.com/Bisonai/orakl/master/contracts/v0.1/deployments/datafeeds-addresses.json)

[`Others`](https://raw.githubusercontent.com/Bisonai/orakl/master/contracts/v0.1/deployments/other-addresses.json)


## Prerequisites

Create a copy of `.env.example` file and fill in values for `PROVIDER`, and `MNEMONIC` or `PRIV_KEY` (the difference is explained below) environment variables.
These variables will be used for connection to JSON-RPC endpoint, deployment and use of your [`DataFeedConsumer` smart contract](contracts/DataFeedConsumer.sol).

```shell
cp .env.example .env
```

`PROVIDER` can be set to any JSON-RPC endpoint.
The list of free available JSON-RPC endpoint can be found in [official Kaia documentation](https://docs.kaia.io/references/public-en/).

This repository supports connection to wallet either through mnemonic or private key.

### Mnemonic

`MNEMONIC` can be generated using [npm mnemonics package](https://www.npmjs.com/package/mnemonics).

```shell
npx mnemonics
```

After mnemonic is generated, you need to convert it to public address and fund it with $KAIA.
If you do not have any $KAIA in your account, you cannot deploy smart contracts or make any transactions.

You can convert your newly generated mnemonic with following hardhat task.
Please replace the `[MENONIC]` with your mnemonic.

```shell
npx hardhat address --mnemonic [MNEMONIC]
```

The script will print out a public address corresponding to your mnemonic.
Then, you can use this address to receive free $KAIA using [Kairos faucet](https://www.kaia.io/faucet).

### Private key

If you already have a wallet, you can reuse its private key, and connect to JSON-RPC endpoint with it.
In case you use Metamask, read [how to export an account's private key.](https://metamask.zendesk.com/hc/en-us/articles/360015289632-How-to-export-an-account-s-private-key).
After you extract private key, store it in `PRIV_KEY` variable inside of `.env` file.

## Installation

```shell
yarn install
```

## Compilation

```shell
yarn compile
```

## Deploy

```shell
# feed example
npx hardhat deploy --network kairos --deploy-scripts deploy/DataFeedConsumer
```

```shell
# router example
npx hardhat deploy --network kairos --deploy-scripts deploy/DataFeedRouterConsumer
```

## Request the latest value from Data Feed

Before running the script below, one must deploy `DataFeedConsumer` smart contract.
This step has to be performed only once.
To deploy `DataFeedConsumer`, run `npx hardhat deploy --network kairos`.

> Reading information from feed is free of charge for public data feeds.
> You pay only for deployment of smart contract and execution of its functions.

```shell
npx hardhat run scripts/read-data.ts --network kairo
```

## Request the latest value from Data Feed through RouterContract

Pair name's fixed with "BTC-USDT", try out getting latest value of different pairs by changing pair name from the script.

```shell
npx hardhat run scripts/read-data-through-router.ts --network kairos
```
