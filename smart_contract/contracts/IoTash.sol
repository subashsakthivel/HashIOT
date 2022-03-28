// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

contract IoTash {
    event GrantIOT(address indexed device, bytes32 name, bytes32 mac, uint port );
    event RevokeIOT(address indexed owner ,address indexed device);


    struct IoT {
        bytes32 name;
        bytes32 mac;
        uint port;
        address deviceAddress;
    }

    mapping (address => IoT[]) public IOTaccess;
    
    function RegisterDevice(bytes32 _name, bytes32 _mac, uint _port , address _deviceAddress) external {
        IoT memory device = IoT(_name, _mac, _port , _deviceAddress);
        IOTaccess[msg.sender].push(device);
        emit GrantIOT(device.deviceAddress ,device.name , device.mac, device.port);
    }
    
    function RevokeDevice(uint _index) external {
        emit RevokeIOT(msg.sender, IOTaccess[msg.sender][_index].deviceAddress);
        uint len = IOTaccess[msg.sender].length;
        IOTaccess[msg.sender][_index] = IOTaccess[msg.sender][len-1];
        IOTaccess[msg.sender].pop();
    }   

    function changeOwnership(address _account) external {
        IOTaccess[_account] = IOTaccess[msg.sender];
        delete IOTaccess[msg.sender];
    }

    function getIOTs() external view returns (IoT[] memory){
    return IOTaccess[msg.sender];
    }
}
