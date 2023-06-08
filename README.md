# Data Feed Consumer

Consumer smart contract that reads from [Orakl Network](https://www.orakl.network) Data Feed.

> Warning: This repository and smart contract are meant to be for deployment on [`Baobab`](https://docs.klaytn.foundation/misc/faq#what-is-cypress-what-is-baobab).

Currently, you can access the following data feeds from Orakl Network on Baobab.

| Data Feed  | `Aggregator`                                                                                       | `AggregatorProxy`                                                                                  |
|------------|----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| BTC-USDT   | [0xE747...5e07](https://baobab.klaytnfinder.io/account/0xE747418f2fe0F5794c5105f718b59b283E1B5e07) | [0x4b06...dFa4](https://baobab.klaytnfinder.io/account/0x4b0687ce6eC3Fe6c019467c744D0C563643BdFa4) |
| ETH-USDT   | [0xf1AF...e9bd](https://baobab.klaytnfinder.io/account/0xf1AF997ffA9b43CcA41078d74C3F897DB998e9bd) | [0xAEc4...C28E](https://baobab.klaytnfinder.io/account/0xAEc43Fc8D4684b6A6577c3B18A1c1c6d3D55C28E) |
| KLAY-USDT  | [0xf0d6...95bA](https://baobab.klaytnfinder.io/account/0xf0d6Ccdd18B8A7108b901af872021109C27095bA) | [0xC874...72E1](https://baobab.klaytnfinder.io/account/0xC874f389A3F49C5331490145f77c4eFE202d72E1) |
| MATIC-USDT | [0x7970...60F0](https://baobab.klaytnfinder.io/account/0x7970d00F24e65F1BC757896e32Db820A8e9260F0) | [0x311E...AA1C](https://baobab.klaytnfinder.io/account/0x311Ec6D3a9db944aE0e92B083F1dbDe0cECcAA1C) |
| SOL-USDT   | [0xBd01...78f7](https://baobab.klaytnfinder.io/account/0xBd01EdC16597f68E03607ba4b941596729ec78f7) | [0x3C39...4F2e](https://baobab.klaytnfinder.io/account/0x3C39209e85c1a27f1B992Bcf3416f5fC84764F2e) |
| USDC-USDT  | [0x49e4...698c](https://baobab.klaytnfinder.io/account/0x49e47b1149149CAEc5384427E41A387Bbc17698c) | [0xd46C...4660](https://baobab.klaytnfinder.io/account/0xd46Ca83fdC20641ce2e225E930FBfb8CE8334660) |
| DAI-USDT   | [0x219B...6745](https://baobab.klaytnfinder.io/account/0x219BAD3A896964A2B28Ef4dE6Ae6E6D72B646745) | [0xdE2a...aB3F](https://baobab.klaytnfinder.io/account/0xdE2aA055F8DA4d2a4A5063b8736C8455AEa8aB3F) |
| DOT-USDT   | [0x2b06...9d7b](https://baobab.klaytnfinder.io/account/0x2b062807C6B3F8Ca5C366545d50aA19c114E9d7b) | [0x7dc5...541c](https://baobab.klaytnfinder.io/account/0x7dc55064b6ea6B75F8A73DC142707aAd0A37541c) |
| BNB-USDT   | [0x731A...4199](https://baobab.klaytnfinder.io/account/0x731A5AFB6e021579138Ea469B25C2ab46ff44199) | [0xFA4C...Dd5F](https://baobab.klaytnfinder.io/account/0xFA4CfAD7DBB1a0b3e85d0b736cf00289edDDDd5F) |
| TRX-USDT   | [0xb4de...c60D](https://baobab.klaytnfinder.io/account/0xb4de9C81eaA329E1E7161E9a235D795E29eec60D) | [0x37c7...2d5f](https://baobab.klaytnfinder.io/account/0x37c7Aac954e721eaBA28c58BeF496529Cde32d5f) |
| BUSD-USDT  | [0xc820...63ed](https://baobab.klaytnfinder.io/account/0xc820F6E9ab1A9321d22720A0986088A9298563ed) | [0x6727...b647](https://baobab.klaytnfinder.io/account/0x6727E828CCa9b5cB639e740d5A275Cd7CdB0b647) |
| MNR-KRW    | [0x22dd...59c9](https://baobab.klaytnfinder.io/account/0x22ddDb9749cB5941DdEc5fD50B12CfDdB8E259c9) | [0x6DEb...2dee](https://baobab.klaytnfinder.io/account/0x6DEbE43FD00D3Dcc93D8695a3031fC8887242dee) |

`AggregatorProxy` acts as a gateway to access the latest aggregated values submitted by a set of trusted parties to `Aggregator` smart contract.
`AggregatorProxy` in this project is connected to `Aggregator` that provides a price feed for [`BTC/USDT` pair](https://bisonai.github.io/orakl-config/adapter/btc-usdt.adapter.json).

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
