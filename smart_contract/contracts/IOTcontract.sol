// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract IOTcontract {
    
    event GrantRole(bytes32 indexed role, address indexed account , bytes32 hash);
    event RevokeRole(bytes32 indexed role, address indexed account);

     //role => account => bool
    mapping(bytes32 => mapping(bytes32 => bool)) public roles;

    //0xdf8b4c520ffe197c5343c6f5aec59570151ef9a492f2c624fd45ddde6135ec42
    bytes32 private constant ADMIN = keccak256(abi.encodePacked("ADMIN"));
    //0x2db9fd3d099848027c2383d0a083396f6c41510d7acfd92adc99b6cffcf31e96
    bytes32 private constant USER = keccak256(abi.encodePacked("USER"));

    modifier onlyRole(bytes32 _role, string memory _mac) virtual{
            bytes32 _iot_hash = _hash(msg.sender , _mac);
            require(roles[_role][_iot_hash], "Not Autherized");
            _;
        }

    function _hash(address _account , string memory _mac) public pure returns(bytes32){
        return keccak256(abi.encodePacked(_account , _mac));
    }

    function RegisterRole(string memory _mac) external {
        console.log("Registering new IOT device : %s address: %s", _mac , msg.sender);
        bytes32 _iot_hash = _hash(msg.sender , _mac);
        roles[ADMIN][_iot_hash] = true;
        emit GrantRole(ADMIN,msg.sender, _iot_hash);
    }

    function grantRole(bytes32 _role, address _account,string memory _mac) external onlyRole(ADMIN,_mac){
        console.log("grant permission for iot device : %s address: %s" , _mac, msg.sender);
        bytes32 _iot_hash = _hash(_account , _mac);
        roles[_role][_iot_hash] = true;
        emit GrantRole(_role,_account , _iot_hash);
    }

    function revokeRole(bytes32 _role, address _account,string memory _mac) external onlyRole(ADMIN, _mac){
        console.log("removed address : %s mac : %s",msg.sender , _mac);
        bytes32 _iot_hash = _hash(_account , _mac);
        roles[_role][_iot_hash] = false;
        emit RevokeRole(_role, _account);
    }

    function Permission_Check(string memory _mac) public view returns(bool , bool) {
        bytes32 _iot_hash = _hash(msg.sender , _mac);
        bool user  = roles[USER][_iot_hash];
        bool admin = roles[ADMIN][_iot_hash];
        return(user , admin);
    }
}
