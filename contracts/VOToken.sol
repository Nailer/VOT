// SPDX-License-Identifier: Unlicensed
@pragma solidity ^0.8.18;
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract VOT is ERC20 {

    unit constant _initial_Supply = 100_000_000_000 *(10 ** 18);  // the total amount of token that is available in the wallet

    constructor() ERC20 ("VOT", "VOT") {
        _mint(msg.sender, _initial_Supply);
        
    }
}