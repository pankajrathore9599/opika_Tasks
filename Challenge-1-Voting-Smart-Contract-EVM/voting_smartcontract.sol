// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Voting {
    
    struct Item {
        string name;
        uint256 voteCount;
    }
    
    Item[] public items;
    mapping(address => mapping(uint256 => bool)) private votes;
    
    function proposeItem(string memory _item) public {
        items.push(Item({name: _item, voteCount: 0}));
    }
    
    function voteForItem(uint256 _itemId) public {
        require(!votes[msg.sender][_itemId], "You have already voted for this item!");
        
        votes[msg.sender][_itemId] = true;
        items[_itemId].voteCount += 1;
    }
    
    function getWinner() public view returns (uint256 itemId, string memory itemName) {
        require(items.length > 0, "No items found!");

        uint256 winningVoteCount = 0;
        uint256 winningIndex = 0;

        for (uint256 i = 0; i < items.length; i++) {
            if (items[i].voteCount > winningVoteCount) {
                winningVoteCount = items[i].voteCount;
                winningIndex = i;
            }
        }
        return (winningIndex, items[winningIndex].name);
    }
}
