// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import {IFeedRouter} from "@bisonai/orakl-contracts/v0.2/src/interfaces/IFeedRouter.sol";

contract DataFeedRouterConsumer {
    IFeedRouter internal router;
    int256 public answer;
    uint80 public roundId;

    constructor(address aggregatorRouter) {
        router = IFeedRouter(aggregatorRouter);
    }


    function getLatestData(string calldata pair) public {
        (
            uint80 roundId_,
            int256 answer_
            , /* uint updatedAt */

        ) = router.latestRoundData(pair);

        answer = answer_;
        roundId = roundId_;
    }

    function decimals(string calldata pair) public view returns (uint8) {
        return router.decimals(pair);
    }
}
