// SPDX-License-Identifier: MIT
pragma solidity ^0.8.16;

import { IAggregator } from "@bisonai/orakl-contracts/src/v0.1/interfaces/IAggregator.sol";

contract DataFeedConsumer {
    IAggregator internal dataFeed;
    int256 public answer;
    uint80 public roundId;

    constructor(address aggregatorProxy) {
        dataFeed = IAggregator(aggregatorProxy);
    }

    function getLatestData() public {
        (
            uint80 roundId_,
            int256 answer_
            , /* uint startedAt */
            , /* uint updatedAt */
            , /* uint80 answeredInRound */
        ) = dataFeed.latestRoundData();

        answer = answer_;
        roundId = roundId_;
    }

    function decimals() public view returns (uint8) {
        return dataFeed.decimals();
    }
}
