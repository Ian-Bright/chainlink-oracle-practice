pragma solidity ^0.6.6;

import "@chainlink/contracts/src/v0.6/ChainlinkClient.sol";
contract TwitterConsumer is ChainlinkClient {

    address private oracle;
    bytes32 private jobId;
    uint256 private fee;

    // string public 
/**
     * Network: Kovan
     * Oracle: Chainlink - 0x2f90A6D021db21e1B2A077c5a37B3C7E75D15b7e
     * Job ID: Chainlink - 29fa9aa13bf1468788b7cc4a500a45b8
     * Fee: 0.1 LINK
     */

    constructor() public {
        setPublicChainlinkToken();
        oracle = 0x2f90A6D021db21e1B2A077c5a37B3C7E75D15b7e;
        jobId = "29fa9aa13bf1468788b7cc4a500a45b8";
        fee = 0.1 * 10 ** 18; // 0.1 LINK
    }

    function hasLikedTweet(string calldata _url, string calldata tweetId, string calldata _userName, string calldata, _token) return (byte32 requestId) {
        Chainlink.Request memory request = buildChainlinkRequest(jobId, address(this), this.fulfill.selector);

        // Set the URL to perform the GET request on
        request.add("get", _url);
        request.add("queryParams", "?id=" + tweetId + "&count=50&stringify_ids=true")
        request.add("header", "Authorization : Bearer " + _token);

        // Get return to determine whether user has like tweet
        request.add("path", "data.ids");
    }

    /**
     * Receive the response in the form of uint256
     */ 
    function fulfill(bytes32 _requestId, bool hasLiked) public recordChainlinkFulfillment(_requestId)
    {
        volume = _volume;
    }
}