// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract BasedBaseToken is ERC20 {
    constructor() ERC20("based base", "BASED") {
        _mint(msg.sender, 1_000_000 * 10 ** decimals());
    }
}
