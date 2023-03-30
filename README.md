# Data Feed Consumer

Consumer smart contract that reads from [Orakl Network](https://www.orakl.network) Data Feed.

> Warning: This repository and smart contract are meant to be for deployment on [`Baobab`](https://docs.klaytn.foundation/misc/faq#what-is-cypress-what-is-baobab).

Currently, you can access the following data feeds from Orakl Network on Baobab.

| Data Feed  | `Aggregator`                                                                                                                     | `AggregatorProxy`                                                                                                                |
|------------|----------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------|
| BTC-USDT   | [0x640Ed61e261C545D7439bDBb27e1674a6F589e96](https://baobab.scope.klaytn.com/account/0x640Ed61e261C545D7439bDBb27e1674a6F589e96) | [0x6492009c469373972710744eD34725D96D8c07B3](https://baobab.scope.klaytn.com/account/0x6492009c469373972710744eD34725D96D8c07B3) |
| ETH-USDT   | [0x9C2248d7EafB3D9e9D615E52965bD387a12c856b](https://baobab.scope.klaytn.com/account/0x9C2248d7EafB3D9e9D615E52965bD387a12c856b) | [0xFD91E50218a5451a88D7C83Ed7b555F20aa216f2](https://baobab.scope.klaytn.com/account/0xFD91E50218a5451a88D7C83Ed7b555F20aa216f2) |
| KLAY-USDT  | [0x80139B55D6539E08890b93448B1A93cd014Ed87C](https://baobab.scope.klaytn.com/account/0x80139B55D6539E08890b93448B1A93cd014Ed87C) | [0x1BFf2A4B141a18532A141Ec079FbAb615bba907f](https://baobab.scope.klaytn.com/account/0x1BFf2A4B141a18532A141Ec079FbAb615bba907f) |
| MATIC-USDT | [0x99E9E1a78498575E78F46675b54847767C5787Fb](https://baobab.scope.klaytn.com/account/0x99E9E1a78498575E78F46675b54847767C5787Fb) | [0xCe0BBfA49C0b82B9768DFB8d1f1efC907a496842](https://baobab.scope.klaytn.com/account/0xCe0BBfA49C0b82B9768DFB8d1f1efC907a496842) |
| SOL-USDT   | [0x56BbC261dE7529a2D9F89B75734A86ac5f9e3008](https://baobab.scope.klaytn.com/account/0x56BbC261dE7529a2D9F89B75734A86ac5f9e3008) | [0x900350a321c12Ad5388DE96087FdCF90f7ec319B](https://baobab.scope.klaytn.com/account/0x900350a321c12Ad5388DE96087FdCF90f7ec319B) |
| USDC-USDT  | [0x08e2425CE1fa5f8EB006d3898C48C5d3de44B795](https://baobab.scope.klaytn.com/account/0x08e2425CE1fa5f8EB006d3898C48C5d3de44B795) | [0xFd5fb8a27ADd2Faa62Ef3c5f0EA78AEAbE1E07A3](https://baobab.scope.klaytn.com/account/0xFd5fb8a27ADd2Faa62Ef3c5f0EA78AEAbE1E07A3) |
| DAI-USDT   | [0xe17D821E9A8A8736B9AEA8C2DE1f3A4934ac0A2F](https://baobab.scope.klaytn.com/account/0xe17D821E9A8A8736B9AEA8C2DE1f3A4934ac0A2F) | [0xC0B2da601400c9dd49D8eF29E47a16a47932331e](https://baobab.scope.klaytn.com/account/0xC0B2da601400c9dd49D8eF29E47a16a47932331e) |
| DOT-USDT   | [0x4a11035D511E8094E483761Db1b9c834d55b1894](https://baobab.scope.klaytn.com/account/0x4a11035D511E8094E483761Db1b9c834d55b1894) | [0xeD2c791eae84a9845f7832110c9Cd7E1D9670235](https://baobab.scope.klaytn.com/account/0xeD2c791eae84a9845f7832110c9Cd7E1D9670235) |
| BNB-USDT   | [0x4D92F10A23E28AB11d2d39325B9db0Fd0504520d](https://baobab.scope.klaytn.com/account/0x4D92F10A23E28AB11d2d39325B9db0Fd0504520d) | [0x694b6591bA06Ea48b9A07dB78B93cCdF5d144f38](https://baobab.scope.klaytn.com/account/0x694b6591bA06Ea48b9A07dB78B93cCdF5d144f38) |
| TRX-USDT   | [0x50365C346BAd261a29ADd3Be7bA18B6c49E4f4Cf](https://baobab.scope.klaytn.com/account/0x50365C346BAd261a29ADd3Be7bA18B6c49E4f4Cf) | [0x9ED2D63D6af73b416E0a47B56899ddE8435d89a6](https://baobab.scope.klaytn.com/account/0x9ED2D63D6af73b416E0a47B56899ddE8435d89a6) |
| BUSD-USDT  | [0xA3ca19bAE3dC93521Ff0a9A7DC78713e8bB55D0c](https://baobab.scope.klaytn.com/account/0xA3ca19bAE3dC93521Ff0a9A7DC78713e8bB55D0c) | [0x88DaE047193444aba53B316f40961528c326080d](https://baobab.scope.klaytn.com/account/0x88DaE047193444aba53B316f40961528c326080d) |


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
