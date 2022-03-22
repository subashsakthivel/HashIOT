// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;

/// @title A title that should describe the contract/interface
/// @author The name of the author
/// @notice Explain to an end user what this does
/// @dev Explain to a developer any extra details

contract HashIOT {

    event LogNode(address owner, uint indexed mac, bool state, bytes32 dataSet);

    uint256 public transactionCount;

    struct Node {
        uint port;
        bool state;
        address owner;
        bytes32 dataSet;
        uint256 transactionCount;
    }

    mapping (uint => Node) public nodes_mac;

    
    function RegisterNewNode(uint _mac, uint _port, string memory _data) external {
        transactionCount += 1;
        bytes32 _dataSet = keccak256(abi.encodePacked(_data));
        Node memory newNode = Node(_port,false,msg.sender,_dataSet,transactionCount);
        nodes_mac[_mac] = newNode;
        emit LogNode(newNode.owner, _mac, newNode.state,_dataSet);
    }
    
    function RevokeNode(uint _mac) external {
        emit LogNode(address(0), _mac, false,0x0);
        delete nodes_mac[_mac];
    }
    
    function getDetails(uint _mac) public view returns (uint , bool, address, bytes32){
        return (
            nodes_mac[_mac].port,
            nodes_mac[_mac].state,
            nodes_mac[_mac].owner,
            nodes_mac[_mac].dataSet);
    }
}
