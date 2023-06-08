// SPDX-License-Identifier: MIT
pragma solidity ^0.8.16;

import {IAggregator} from "@bisonai/orakl-contracts/src/v0.1/interfaces/IAggregator.sol";

contract DataFeedConsumer {
    IAggregator internal dataFeed;
    int256 public sData;
    uint80 public sRoundId;

    constructor(address aggregatorProxy) {
        dataFeed = IAggregator(aggregatorProxy);
    }

    function getLatestData() public {
        (
            uint80 roundId,
            int256 data
            , /*uint startedAt*/
            , /*uint timeStamp*/
            , /*uint80 answeredInRound*/
        ) = dataFeed.latestRoundData();
        sData = data;
        sRoundId = roundId;
    }

    function decimals() public view returns (uint8) {
        return dataFeed.decimals();
    }
}
