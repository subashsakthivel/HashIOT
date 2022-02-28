// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;

/// @title A title that should describe the contract/interface
/// @author The name of the author
/// @notice Explain to an end user what this does
/// @dev Explain to a developer any extra details

contract HashIOT {
    event LogNode(address indexed owner, uint indexed mac, bool state);

    uint256 public transactionCount;

    struct Node {
        uint port;
        bool state;
        address owner;
        uint256 transactionCount;
    }

    mapping (uint => Node) public nodes_mac;



    function RegisterNewNode(uint _mac, uint _port) external {
        transactionCount += 1;
        Node memory newNode = Node(_port,false,msg.sender,transactionCount);
        nodes_mac[_mac] = newNode;
        emit LogNode(newNode.owner, _mac, newNode.state);
    }

    function UpdateNode(uint _mac, uint _port) external {
        Node storage node = nodes_mac[_mac];
        node.port = _port;
        node.state = !node.state;
        node.owner = msg.sender;
        node.transactionCount += 1;
        emit LogNode(node.owner, _mac, node.state);
    }

    function RevokeNode(uint _mac) external {

        emit LogNode(address(0), _mac, false);
        delete nodes_mac[_mac];
    }

    function getDetails(uint _mac) public view returns (uint , bool, address ){
        return (
            nodes_mac[_mac].port,
            nodes_mac[_mac].state,
            nodes_mac[_mac].owner);
    }
}
