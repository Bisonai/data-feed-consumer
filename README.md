# Data Feed Consumer

Consumer smart contract that reads from [Orakl Network](https://www.orakl.network) Data Feed.

> Warning: This repository and smart contract are meant to be for deployment on [`Baobab`](https://docs.klaytn.foundation/misc/faq#what-is-cypress-what-is-baobab).

Internally, the scripts access following smart contracts:

* `AggregatorProxy` ([0x1697c78D7F29eDeaf5B12DA6316d771E56A34c1e](https://baobab.scope.klaytn.com/account/0x1697c78D7F29eDeaf5B12DA6316d771E56A34c1e))
* `Aggregator` ([0x15C0b3Ea93Ed4dE0a1F93F4AE130AEFd8F2E8CCB](https://baobab.scope.klaytn.com/account/0x15C0b3Ea93Ed4dE0a1F93F4AE130AEFd8F2E8CCB))

`AggregatorProxy` acts as a gateway to access the latest aggregated values submitted by a set of trusted parties to `Aggregator` smart contract.
`AggregatorProxy` in this project is connected to `Aggregator` that provides a price feed for [`ETH/USD` pair](https://github.com/Bisonai/orakl/blob/master/core/adapter/eth-usd.adapter.json).

If you want to access different data feeds, you can change the aggregator proxy address (`aggregatorProxy`) inside of `hardhat.config.ts` under `namedAccounts` property.

## Prerequisites

Create a copy of `.env.example` file and fill in values for `PROVIDER`, and `MNEMONIC` or `PRIV_KEY` (the difference is explained below) environment variables.
These variables will be used for connection to JSON-RPC endpoint, deployment and use of your [`DataFeedConsumer` smart contract](contracts/DataFeedConsumer.sol).

```shell
cp .env.example .env
```

`PROVIDER` can be set to any JSON-RPC endpoint.
The list of free available JSON-RPC endpoint can be found in [official Klaytn documentation](https://docs.klaytn.foundation/content/dapp/json-rpc/public-en#testnet-baobab-public-json-rpc-endpoints).

This repository supports connection to wallet either through mnemonic or private key.

### Mnemonic

`MNEMONIC` can be generated using [npm mnemonics package](https://www.npmjs.com/package/mnemonics).

```shell
npx mnemonics
```

After mnemonic is generated, you need to convert it to public address and fund it with KLAY.
If you do not have any KLAY in your account, you cannot deploy smart contracts or make any transactions.

You can convert your newly generated mnemonic with following hardhat task.
Please replace the `[MENONIC]` with your mnemonic.

```shell
npx hardhat address --mnemonic [MNEMONIC]
```

The script will print out a public address corresponding to your mnemonic.
Then, you can use this address to receive free KLAY using [Baobab's faucet](https://baobab.wallet.klaytn.foundation/faucet).

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
npx hardhat deploy --network baobab
```

## Request the latest value from Data Feed

Before running the script below, one must deploy `DataFeedConsumer` smart contract.
This step has to be performed only once.
To deploy `DataFeedConsumer`, run `npx hardhat deploy --network baobab`.

> Reading information from feed is free of charge for public data feeds.
> You pay only for deployment of smart contract and execution of its functions.

```shell
npx hardhat run scripts/read-data.ts --network baobab
```
