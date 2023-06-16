# Voting Smart Contract

This repository contains a simple Solidity smart contract for a voting system. Users can propose items to vote on and cast their vote for any item. The contract also includes a function to determine the winner of the vote.

## Smart Contract Overview

The smart contract defines three public functions:

- `proposeItem(string memory _item)`: Allows a user to propose a new item for voting. The item is represented by a string `_item`.
- `voteForItem(uint256 _itemId)`: Allows a user to vote for an item by its identifier `_itemId`. A user can vote for an item only once.
- `getWinner()`: Returns the ID and name of the item with the highest number of votes. If called when no items have been proposed yet, it will revert the transaction with a "No items found!" error message.



