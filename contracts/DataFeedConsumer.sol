// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;
//@bisonai/orakl-contracts/v0.1
import {IFeedProxy} from "@bisonai/orakl-contracts/v0.2/src/interfaces/IFeedProxy.sol";

contract DataFeedConsumer {
    IFeedProxy internal feedProxy;
    int256 public answer;
    uint80 public roundId;

    constructor(address _feedProxy) {
        feedProxy = IFeedProxy(_feedProxy);
    }

    function getLatestData() public {
        (
            uint80 roundId_,
            int256 answer_
            , /* uint updatedAt */
        ) = feedProxy.latestRoundData();

        answer = answer_;
        roundId = roundId_;
    }

    function decimals() public view returns (uint8) {
        return feedProxy.decimals();
    }
}
