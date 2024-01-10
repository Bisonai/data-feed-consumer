// SPDX-License-Identifier: MIT
pragma solidity ^0.8.16;

import {IAggregator} from "@bisonai/orakl-contracts/src/v0.1/interfaces/IAggregator.sol";
import {IAggregatorRouter} from "@bisonai/orakl-contracts/src/v0.1/interfaces/IAggregatorRouter.sol";

contract DataFeedConsumer {
    IAggregator internal dataFeed;
    IAggregatorRouter internal router;
    int256 public answer;
    uint80 public roundId;

    constructor(address aggregatorProxy, address aggregatorRouter) {
        dataFeed = IAggregator(aggregatorProxy);
        router = IAggregatorRouter(aggregatorRouter);
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

    function getLatestDataThroughRouter(string calldata pair) public {
        (
            uint80 roundId_,
            int256 answer_
            , /* uint startedAt */
            , /* uint updatedAt */
            , /* uint80 answeredInRound */
        ) = router.latestRoundData(pair);

        answer = answer_;
        roundId = roundId_;
    }

    function decimalsThroughRouter(string calldata pair) public view returns (uint8) {
        return router.decimals(pair);
    }
}
