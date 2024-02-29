# Data Feed Consumer

Consumer smart contract that reads from [Orakl Network](https://www.orakl.network) Data Feed.

> Warning: This repository and smart contract are meant to be for deployment on [`Baobab`](https://docs.klaytn.foundation/misc/faq#what-is-cypress-what-is-baobab).

Currently, you can access the following data feeds from Orakl Network.

## Cypress

| Data Feed  | `Aggregator`                                                                                | `AggregatorProxy`                                                                           |
| ---------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
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
| MNR-KRW    | [0xfccB...3a98](https://klaytnfinder.io/account/0xfccB3925817e0dCFEE28343769Bbe203D8443a98) | [0x61be...B4C5](https://klaytnfinder.io/account/0x61be615807fC5306E1C691D290a422aF7995B4C5) |
| ADA-USDT   | [0x2355...29Ab](https://klaytnfinder.io/account/0x235587EA94b2fe15FfFf0577303E5F0Cf13C29Ab) | [0x04a7...05C0](https://klaytnfinder.io/account/0x04a77b347d1e0FD6FA9af328aB0232F3F2Be05C0) |
| ATOM-USDT  | [0x153A...c13F](https://klaytnfinder.io/account/0x153A604Ce0d3Fee619fb9A1F484d885001D1c13F) | [0x1eD8...d150](https://klaytnfinder.io/account/0x1eD814571AB8FA61F546dDb92125d22dc7dAd150) |
| AVAX-USDT  | [0x700d...81Df](https://klaytnfinder.io/account/0x700d467Ff6727D99409cBE13e1D3b24A4F8981Df) | [0x5E64...63A5](https://klaytnfinder.io/account/0x5E64449c9088Be970608856Fb817dAc364bf63A5) |
| DOGE-USDT  | [0x92d6...be91](https://klaytnfinder.io/account/0x92d6e3893B8853184D167780c7eB0D784F0ebe91) | [0x0dcb...b644](https://klaytnfinder.io/account/0x0dcb00FBDd314dbd524927D769cd2da0092Ab644) |
| FTM-USDT   | [0xFf36...a066](https://klaytnfinder.io/account/0xFf369500111F0CE541A67D84bCB326604099a066) | [0x6be0...15f4](https://klaytnfinder.io/account/0x6be0DA4Fc7b9ffB1254EA118ee2a8Fa018DB15f4) |
| LTC-USDT   | [0x570D...44C1](https://klaytnfinder.io/account/0x570D233652001fEaE9Ee1D859D51BdA9221444C1) | [0x3114...E575](https://klaytnfinder.io/account/0x31144fAac15241aB56434740ea8C32F626DDE575) |
| PAXG-USDT  | [0x384C...E313](https://klaytnfinder.io/account/0x384C4A7ee7B8Ef8D6a46E2f262581632EF06E313) | [0x7E41...de73](https://klaytnfinder.io/account/0x7E418fE88A22Dbb71bb81979A0d54EF4e8Fade73) |
| SHIB-USDT  | [0x528b...Af0F](https://klaytnfinder.io/account/0x528bb9cc2dCfDd98F712A60B54120fa4F63aAf0F) | [0xBb05...236E](https://klaytnfinder.io/account/0xBb05a3cbe50cF725be9302539bFA502F78D4236E) |
| UNI-USDT   | [0x58B4...d6BC](https://klaytnfinder.io/account/0x58B40391BC5bF647EB8Aa2CEF426950fC644d6BC) | [0x40F0...3EAe](https://klaytnfinder.io/account/0x40F0Ef1d120526712cf3AF77CF14348b19b83EAe) |
| XRP-USDT   | [0xe2e2...C8E4](https://klaytnfinder.io/account/0xe2e2D78eF5ec2158AFf05472C8C65fdB994AC8E4) | [0xc736...8d3D](https://klaytnfinder.io/account/0xc73665899A0b82f10D40Ea072C7A3a6F3a1c8d3D) |
| JOY-USDT   | [0x2c29...793b](https://klaytnfinder.io/account/0x2c293dbe54eCfbE3104cf57C526A7d468ec6793b) | [0xd15a...4Aa2](https://klaytnfinder.io/account/0xd15aD2c20a9Ef664744FB0Ad11E5F78b09D44Aa2) |
| WEMIX-USDT | [0xBD64...2420](https://klaytnfinder.io/account/0xBD647a9Bd234BBE8974084b10C34f4556bC32420) | [0xf678...4ade](https://klaytnfinder.io/account/0xf67882c83deb1b537CFbC4c9A797E8b536464ade) |
| MBX-KRW    | [0xf208...3D2b](https://klaytnfinder.io/account/0xf2080d94C9d96Ddcc04A6A34D19f83192adD3D2b) | [0xCB1c...1014](https://klaytnfinder.io/account/0xCB1ce544Fdf03875CA1F269d6fEAA09488271014) |
| KSP-KRW    | [0xdA0a...130a](https://klaytnfinder.io/account/0xdA0a769d8548FF387972a7Be3DC8eFD972f8130a) | [0x4f8E...9bb7](https://klaytnfinder.io/account/0x4f8E5adeB2914e62A196fefB8325337ED8a39bb7) |
| BORA-KRW   | [0x11CA...01Df](https://klaytnfinder.io/account/0x11CAdfb6B61b7912fA835E5A51F96fbFf30A01Df) | [0xc4ED...9aB6](https://klaytnfinder.io/account/0xc4ED7b2A57789ff945ea21D18d77757052c29aB6) |
| CHF-USD   | [0x7c5C...9766](https://klaytnfinder.io/account/0x7c5CcE6a52202103D124cf1b1AC105865Fcf9766) | [0x3F92...4E9E](https://klaytnfinder.io/account/0x3F92a8E460c89657FDcC4a3839C476413cE64E9E) |
| EUR-USD   | [0x191E...ADfE](https://klaytnfinder.io/account/0x191EFEc4693437428c8C62d9d60E4c83ABFCADfE) | [0x5744...F287](https://klaytnfinder.io/account/0x5744A305042c2591a21cc7c378bf2Cab855eF287) |
| GBP-USD   | [0xa91b...4E16](https://klaytnfinder.io/account/0xa91b8CeB2FbA32B7A845281a03d4C642bc7a4E16) | [0xc273...5Ed3](https://klaytnfinder.io/account/0xc2734F4c3Bf4E7c7673b86CB579013ea96295Ed3) |
| JPY-USD   | [0xAC23...ce62](https://klaytnfinder.io/account/0xAC23dA5A831005E574046eF6F5d3B2d842cDce62) | [0x40Ff...d101](https://klaytnfinder.io/account/0x40Ffd98968403078664FD27D9CF9aA8Ca527d101) |
| KRW-USD  | [0xc800...F1AE](https://klaytnfinder.io/account/0xc800eb1EAB9eB548Bf11eEfC010CDc08FCAaF1AE) | [0x369e...23C0](https://klaytnfinder.io/account/0x369eabfeFdF585D84A714E7989a361D623B523C0) |

## Baobab

| Data Feed  | `Aggregator`                                                                                       | `AggregatorProxy`                                                                                  |
| ---------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
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
| MNR-KRW    | [0x22dd...59c9](https://baobab.klaytnfinder.io/account/0x22ddDb9749cB5941DdEc5fD50B12CfDdB8E259c9) | [0x6DEb...2dee](https://baobab.klaytnfinder.io/account/0x6DEbE43FD00D3Dcc93D8695a3031fC8887242dee) |
| ADA-USDT   | [0x70cD...C9b8](https://baobab.klaytnfinder.io/account/0x70cDE6bE67486017C52215Ad5d6740ce8EaBC9b8) | [0xB9C1...1568](https://baobab.klaytnfinder.io/account/0xB9C1839A40cED59Fb9e55Eb52a3B8B7E62aF1568) |
| ATOM-USDT  | [0xD846...a0b0](https://baobab.klaytnfinder.io/account/0xD84659b5e6d7123e21ee80f13685D733a9a9a0b0) | [0x8867...8D8b](https://baobab.klaytnfinder.io/account/0x886703ebE4E18645B708b3fC9f528d2a9aed8D8b) |
| AVAX-USDT  | [0xf467...1529](https://baobab.klaytnfinder.io/account/0xf467B6cF8ED8c3E49c2ED5154b0Bf471c6911529) | [0xeae7...a580](https://baobab.klaytnfinder.io/account/0xeae732C571aEdB41d58Db5390D96691E6B54a580) |
| DOGE-USDT  | [0x98F4...2CF3](https://baobab.klaytnfinder.io/account/0x98F4BC9fE125c725423deda5418681aB7c8F2CF3) | [0x464f...B72a](https://baobab.klaytnfinder.io/account/0x464fBa38a41526fc61Ca6Ed2C9cD7B38d822B72a) |
| FTM-USDT   | [0x88E3...F764](https://baobab.klaytnfinder.io/account/0x88E3CD567754A0f5068aa4053F9887e97539F764) | [0x271c...2D21](https://baobab.klaytnfinder.io/account/0x271ce3EB7cb9124aEaa26D18E2c448b10f2C2D21) |
| LTC-USDT   | [0x151A...deef](https://baobab.klaytnfinder.io/account/0x151A407169e1B594fb26F002A4c3c9fc41f1deef) | [0x597a...aE3f](https://baobab.klaytnfinder.io/account/0x597a5ab68296d4dEC1296d8A96eFb3FC8b2BaE3f) |
| PAXG-USDT  | [0xbD07...BF5D](https://baobab.klaytnfinder.io/account/0xbD07592c082A40e25a78Fd6a3d9C075B2d36BF5D) | [0x555E...C723](https://baobab.klaytnfinder.io/account/0x555E072996d0335Ec63B448ddD507CB99379C723) |
| SHIB-USDT  | [0xA317...20a5](https://baobab.klaytnfinder.io/account/0xA317038414a275365ED4a085B786E83E761d20a5) | [0x51Ec...8AD1](https://baobab.klaytnfinder.io/account/0x51Ec645B728c6882D362677c90A6D51bb0998AD1) |
| UNI-USDT   | [0x82aC...F66B](https://baobab.klaytnfinder.io/account/0x82aC2966dD5843e718D0EaeC7108bb4778eeF66B) | [0xa7A9...232d](https://baobab.klaytnfinder.io/account/0xa7A93c5eaabD1c458522F00a53897D5f32Da232d) |
| XRP-USDT   | [0x92dD...f18c](https://baobab.klaytnfinder.io/account/0x92dD2d62513bC4811666C4EF27248E902e41f18c) | [0xDcb0...fCD0](https://baobab.klaytnfinder.io/account/0xDcb088788722198aaED3F4F7a396558eC98cfCD0) |
| JOY-USDT   | [0x8365...7362](https://baobab.klaytnfinder.io/account/0x836518342A3226479Ec448E18e1cc15ff2517362) | [0x9b8B...7a19](https://baobab.klaytnfinder.io/account/0x9b8B4Ea7c3934E278430fa9F9b83466fE9387a19) |
| WEMIX-USDT | [0x3855...6c4D](https://baobab.klaytnfinder.io/account/0x38555B4D36904538387334f1DC090825D0B36c4D) | [0x4035...1eFC](https://baobab.klaytnfinder.io/account/0x40353aCA7D7242C79f14443944114434E7581eFC) |
| MBX-KRW    | [0x5266...45Dcd](https://baobab.klaytnfinder.io/account/0x5266b74a8063E08E603BfBFC1eDE4D71B8245Dcd) | [0x64ab...e90f](https://baobab.klaytnfinder.io/account/0x64abc78320d92c350532336D6Fc51AFEe8A8e90f) |
| KSP-KRW    | [0x27e1...b99D](https://baobab.klaytnfinder.io/account/0x27e1255F2a0EA596992158A0bc838f43be34b99D) | [0x3e46...E215](https://baobab.klaytnfinder.io/account/0x3e4685BA1FD98D8eCBC3fc4beB8B4Abb04f7E215) |
| BORA-KRW   | [0x171E...0459](https://baobab.klaytnfinder.io/account/0x171E1001F74568100fBA86b98856759d73730459) | [0x7693...b096](https://baobab.klaytnfinder.io/account/0x769385f036a2AD77EC28e2db91Ca2feE96a0b096) |
| CHF-USD   | [0x3De9...06cb](https://baobab.klaytnfinder.io/account/0x3De93EB2891656884E6029D69E905170Bfe906cb) | [0xc651...6A29](https://baobab.klaytnfinder.io/account/0xc651f188566AD651ed990b792457fe1FDDE06A29) |
| EUR-USD   | [0x2EbB...74A8](https://baobab.klaytnfinder.io/account/0x2EbB9f5F0878b1A06Fb09B39565b74e39da474A8) | [0x086d...2063](https://baobab.klaytnfinder.io/account/0x086d60Ad6c00Ec96b3Aa3Ec42FB6F4eDA6D92063) |
| GBP-USD   | [0x8Eb7...049C](https://baobab.klaytnfinder.io/account/0x8Eb732F35e7182CDF658C2992DFCA2E66B58049C) | [0x9836...3841](https://baobab.klaytnfinder.io/account/0x9836bf21567D87b663fd0E1DF38bf17aACE93841) |
| JPY-USD   | [0x0a08...447F](https://baobab.klaytnfinder.io/account/0x0a08359bd058e6666bFf7aFA3409AbC144Fb447F) | [0x60b8...2026](https://baobab.klaytnfinder.io/account/0x60b84C725543Da01e168C085Ecd8389FB2a52026) |
| KRW-USD  | [0x2Bdc...873E](https://baobab.klaytnfinder.io/account/0x2Bdc1c8754265174e82ce8b6581eb722F6ae873E) | [0xfb02...8d9b](https://baobab.klaytnfinder.io/account/0xfb02629eC37e10C553a147daD1d3aA6f86608d9b) |

`AggregatorProxy` acts as a gateway to access the latest aggregated values submitted by a set of trusted parties to `Aggregator` smart contract.
`AggregatorProxy` in this project is connected to `Aggregator` that provides a price feed for [`BTC/USDT` pair](https://bisonai.github.io/orakl-config/adapter/btc-usdt.adapter.json).

If you want to access different data feeds, you can change the aggregator proxy address (`aggregatorProxy`) inside of `hardhat.config.ts` under `namedAccounts` property.

## AggregatorRouter

- Baobab: [0xAF821aaaEdeF65b3bC1668c0b910c5b763dF6354](https://baobab.klaytnfinder.io/account/0xAF821aaaEdeF65b3bC1668c0b910c5b763dF6354)
- Cypress: [0x16937CFc59A8Cd126Dc70A75A4bd3b78f690C861](https://www.klaytnfinder.io/account/0x16937CFc59A8Cd126Dc70A75A4bd3b78f690C861)

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
# aggregator example
npx hardhat deploy --network baobab --deploy-scripts deploy/DataFeedConsumer
```

```shell
# router example
npx hardhat deploy --network baobab --deploy-scripts deploy/DataFeedRouterConsumer
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

## Request the latest value from Data Feed through RouterContract

Pair name's fixed with "BTC-USDT", try out getting latest value of different pairs by changing pair name from the script.

```shell
npx hardhat run scripts/read-data-through-router.ts --network baobab
```
