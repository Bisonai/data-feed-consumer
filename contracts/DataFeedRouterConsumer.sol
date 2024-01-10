// SPDX-License-Identifier: MIT
pragma solidity ^0.8.16;

import {IAggregatorRouter} from "@bisonai/orakl-contracts/src/v0.1/interfaces/IAggregatorRouter.sol";

contract DataFeedRouterConsumer {
    IAggregatorRouter internal router;
    int256 public answer;
    uint80 public roundId;

    constructor(address aggregatorRouter) {
        router = IAggregatorRouter(aggregatorRouter);
    }


    function getLatestData(string calldata pair) public {
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

    function decimals(string calldata pair) public view returns (uint8) {
        return router.decimals(pair);
    }
}
