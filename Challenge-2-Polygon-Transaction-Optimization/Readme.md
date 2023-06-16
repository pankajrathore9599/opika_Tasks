# MyToken Smart Contract

This repository contains a simple ERC20-like Solidity smart contract named `MyToken`. It allows the creation of a token with a name, symbol, decimal, and initial supply. Token holders can make transfers and check their balance. Additionally, it includes a batch transfer function to optimize gas cost during multiple transfers.

## Smart Contract Overview

The smart contract has several public functions:

- `constructor(string memory _name, string memory _symbol, uint8 _decimals, uint256 initialSupply)`: Initializes the contract with the token name, symbol, decimals and the initial supply of the token, which is assigned to the message sender (deployer).

- `transfer(address _to, uint256 _value)`: Allows the token holder to transfer a specified amount of tokens to a recipient address. This function includes a requirement that the sender must have a balance greater than or equal to the amount they want to transfer.

- `transferBatch(address[] calldata _to, uint256[] calldata _amounts)`: Allows the token holder to perform multiple transfers in a single transaction, thereby optimizing gas costs. It checks that the lengths of the recipient addresses array and amounts array are the same.

- `balanceOf(address _owner)`: Returns the token balance of a specified address.


