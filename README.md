# Data Feed Consumer

Consumer smart contract that reads from [Orakl Network](https://www.orakl.network) Data Feed.

> Warning: This repository and smart contract are meant to be for deployment on [`Baobab`](https://docs.klaytn.foundation/misc/faq#what-is-cypress-what-is-baobab).

Currently, you can access the following data feeds from Orakl Network.

## Cypress

| Data Feed  | `Aggregator`                                                                                | `AggregatorProxy`                                                                           |
|------------|---------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| BTC-USDT   | [0x21df...e040](https://klaytnfinder.io/account/0x21df0fDC25cd276FAec7a081159788a2Ec52e040) | [0xc051...77AC](https://klaytnfinder.io/account/0xc0516486DD0837a8Dd6E502F9134Ff3c421377AC) |
| ETH-USDT   | [0x0ee3...0CAE](https://klaytnfinder.io/account/0x0ee317740EA515D02587393AA32CbB6686110CAE) | [0x37C6...64c3](https://klaytnfinder.io/account/0x37C637922D6F5F62e067588A75E9d59c26cd64c3) |
| KLAY-USDT  | [0x955b...d41d](https://klaytnfinder.io/account/0x955bd135ABBc0eB0D022556602112A9Ec456d41d) | [0x33D6...ACE0](https://klaytnfinder.io/account/0x33D6ee12D4ADE244100F09b280e159659fe0ACE0) |
| MATIC-USDT | [0x40E9...97ba](https://klaytnfinder.io/account/0x40E97db6E366eF067020A0d98FB3E427299397ba) | [0xC51B...F784](https://klaytnfinder.io/account/0xC51B1ec2e0a88c7156Af634cB46F83525F00F784) |
| SOL-USDT   | [0x7ec0...fcC1](https://klaytnfinder.io/account/0x7ec03AC011101eC050df4eEB9e3383608D81fcC1) | [0x09B3...0Bc6](https://klaytnfinder.io/account/0x09B387816847AB0702aFb4e4FfA43240dcA20Bc6) |
| USDC-USDT  | [0x138e...4251](https://klaytnfinder.io/account/0x138eAA152f9702076cEA9CB420Fa763049d44251) | [0x0Eb4...25E4](https://klaytnfinder.io/account/0x0Eb4cA5f008080191a7780101118b5a26e9925E4) |
| DAI-USDT   | [0xc20f...09B5](https://klaytnfinder.io/account/0xc20fA4a7Ba95Ec7E4CbB9458403365210EFa09B5) | [0xC12f...a25D](https://klaytnfinder.io/account/0xC12f7c66b3F192b074Ff883803bAb7571bd6a25D) |
| DOT-USDT   | [0x3836...840A](https://klaytnfinder.io/account/0x38362F1a2d7c223a132018505A35a87A63f7840A) | [0x9070...5e9C](https://klaytnfinder.io/account/0x90708e35E62dea8024dE3672Ca05a4626D5d5e9C) |
| BNB-USDT   | [0x47c6...B872](https://klaytnfinder.io/account/0x47c63Bca3Fa9D3eA7F9Bc7C48C14f691d50FB872) | [0x7aa7...2A59](https://klaytnfinder.io/account/0x7aa7bD1A2AD16527293200a4Fecc9548b2822A59) |
| TRX-USDT   | [0x035A...0d86](https://klaytnfinder.io/account/0x035A27A2797106Dc68606cA054dA5429750F0d86) | [0x28A6...6b4B](https://klaytnfinder.io/account/0x28A69574604E01c86C116Fe4C6EdE28CDbe66b4B) |
| BUSD-USDT  | [0x0655...CEe5](https://klaytnfinder.io/account/0x0655f5196Bd589632a1fd7f15d73382537ACCEe5) | [0x31e4...5B60](https://klaytnfinder.io/account/0x31e438B3d2b838a30A0c02460cd1E6B7a6ED5B60) |
| MNR-KRW    | [0xfccB...3a98](https://klaytnfinder.io/account/0xfccB3925817e0dCFEE28343769Bbe203D8443a98) | [0x61be...B4C5](https://klaytnfinder.io/account/0x61be615807fC5306E1C691D290a422aF7995B4C5) |

## Baobab

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
