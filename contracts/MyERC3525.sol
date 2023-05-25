// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "@solvprotocol/erc-3525/ERC3525Mintable.sol";

contract MyERC3525 is ERC3525Mintable {

constructor()
    ERC3525Mintable("MyERC3525", "MY3525", 18) {
    }
}