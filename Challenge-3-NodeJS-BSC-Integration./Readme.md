# Interacting with Binance Smart Chain (BSC) Testnet Smart Contract

This repository contains a Node.js script for interacting with the Binance Smart Chain Testnet. It demonstrates how to query the total supply of a BEP20 token and call a function on the smart contract.

## Installation

Before you can run this script, make sure you have Node.js installed. If not, you can download it from the official [Node.js website](https://nodejs.org/).

Next, you'll need to install the dependencies. Navigate to the project directory and run the following command:


## Setup

1. Clone the repository or download the files to your local system.

2. Replace the `account` and `privateKey` in the `app.js` file with the correct ones for your account. Make sure your account has sufficient BNB for transaction fees.

3. Replace the `contractAddress` with the address of the smart contract you're interacting with. The provided address is for the Binance-Peg BUSD token.

4. Store the ABI of the smart contract in a `abi.json` file in the same directory as your script. The ABI (Application Binary Interface) is a JSON array that defines how to interact with the contract.

5. In the `mint()` function, replace the recipient's address and the amount to mint. Note that to execute the `mint()` function, you must have the MINTER role for the contract. If you don't have the minting permissions, you can call a different function such as `balanceOf()` or `transfer()`.

## Running the Script

To run the script, navigate to the project directory in your terminal and execute the following command:


## Code Overview

The script uses the `web3.js` library to interact with the Ethereum blockchain, the `@ethereumjs/tx` library to sign the transaction, and the `fs` (File System) library to read the smart contract's ABI from a file.

It connects to the BSC Testnet, creates an instance of the contract, and defines two functions:

- `getTotalSupply()` to query the total supply of the token.

- `mint(to, amount)` to mint a specified amount of tokens to a specified address.

The script executes these functions in sequence and handles any errors that may occur.
