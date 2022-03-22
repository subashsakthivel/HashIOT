// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

contract IoTash {
    event GrantIOT(uint indexed index,bytes32 name, bytes32 mac, uint port , address indexed device);
    event RevokeIOT(address indexed owner ,address indexed device);


    struct IoT {
        uint index;
        bytes32 name;
        bytes32 mac;
        uint port;
        address deviceAddress;
    }

    mapping (address => uint) public INDEX;

    mapping (address => IoT[]) public IOTaccess;
    
    function RegisterDevice(bytes32 _name, bytes32 _mac, uint _port , address _deviceAddress) external {
        IoT memory device = IoT(INDEX[msg.sender],_name, _mac, _port , _deviceAddress);
        IOTaccess[msg.sender].push(device);
        INDEX[msg.sender]++;//This only Problem
        emit GrantIOT(device.index , device.name , device.mac, device.port, device.deviceAddress);
    }
    
    function RevokeDevice(uint _index) external {
        emit RevokeIOT(msg.sender, IOTaccess[msg.sender][_index].deviceAddress);
        uint len = IOTaccess[msg.sender].length;
        IOTaccess[msg.sender][_index] = IOTaccess[msg.sender][len-1];
        INDEX[msg.sender]--;
        IOTaccess[msg.sender].pop();
    }   

    function changeOwnership(address _account) external {
        IOTaccess[_account] = IOTaccess[msg.sender];
        delete IOTaccess[msg.sender];
    }

    function getIOTs() public view returns (IoT[] memory){
    return IOTaccess[msg.sender];
    }
}
