// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.28;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract SilverBullet is ERC20 {
    uint constant initial_supply = 100 * (10 ** 18);

    constructor() ERC20("SilverBullet", "SB") {
        _mint(msg.sender, initial_supply);
    }
}
