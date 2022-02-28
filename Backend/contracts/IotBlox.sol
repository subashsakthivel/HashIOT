// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

contract IotBlox {

    event LogNode(address indexed owner, uint indexed mac, bool state);

    struct Node {
        uint port;
        bool state;
        address owner;
    }

    mapping (uint => Node) public nodes_mac;



    function RegisterNewNode(uint _mac, uint _port) external {
        Node memory newNode = Node(_port,false,msg.sender);
        nodes_mac[_mac] = newNode;
        emit LogNode(newNode.owner, _mac, newNode.state);
    }

    function UpdateNode(uint _mac, uint _port) external {
        Node storage node = nodes_mac[_mac];
        node.port = _port;
        node.state = !node.state;
        node.owner = msg.sender;
        emit LogNode(node.owner, _mac, node.state);
    }

    function RevokeNode(uint _mac) external {

        emit LogNode(address(0), _mac, false);
        delete nodes_mac[_mac];
    }

    function getDetails(uint _mac) external view returns (uint , bool, address ){
        return (
            nodes_mac[_mac].port,
            nodes_mac[_mac].state,
            nodes_mac[_mac].owner);
    }
}