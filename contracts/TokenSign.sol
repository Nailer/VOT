// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

contract VOT {
    address public owner;

    mapping(address => uint256) public uploaders;
    mapping(address => uint256) public interactions;

    modifier electionOwner() {
        require(msg.sender == owner, "Caller is not owner");
        _;
    }

    constructor() {
        owner = msg.sender;
    }

    // 10% to the Platform and 90% to the uploader

    function donation(address receiver) public payable {
        require(msg.value > 0, "You must send > 0 ETH");
        uploaders[receiver] += msg.value;
        (bool success, ) = receiver.call{value: (msg.value * 90) / 100}("");
        require(success, "Failed to transfer funds");
    }

    unit256 public minElectionCharge = 10;


    unit256 public electionAmount = 2;

    // function to charge each election contestants
    function contestantCharge(address sender, uint256 _electionAmount) public payable {

        require(msg.value < minElectionCharge, "You must have enough balance set by the admin");

        if (msg.sender != owner()) {
            require(msg.value >= minElectionCharge, "Insufficient balance to join the election");
        }
        unit256 supply = donation();

        for (uint256 i = 0; i <= minElectionCharge; i++) {
            require(msg.value - _electionAmount, "You need to recharge the minimum of 2VOT");
        }
    }

    function interact(address bucket) public payable {
        require(msg.value > 0, "You must send > 0 ETH");
        interactions[bucket] += 1;
    }

    // Owner Control

    function changeOwner(address newOwner) public electionOwner {
        owner = newOwner;
    }

    // Garbage Collection and Fallbacks

    /**
     * @dev Allows the owner to withdraw the contract's balance, if necessary, because the contract balance is not used.
     */
    function garbage() public payable electionOwner {
        payable(owner).transfer(address(this).balance);
    }

    receive() external payable {} // Recieve Payments

    fallback() external payable {} // Recieve Payments if recieve doesn't work
}
