// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

contract VerifySig {
    function verify(address _signer, string memory _message, bytes memory _sig) 
    external pure returns(bool)
    {
        bytes32 messageHash = getMessageHash(_message);
        bytes32 ethSignerMessageHash = getEthSignedMessageHash(messageHash);

        return recover(ethSignerMessageHash, _sig) == _signer;
    }

    function getMessageHash(string memory _message) public pure returns ( bytes32)
    {
        return keccak256(abi.encodePacked(_message));
    }

    function getEthSignedMessageHash(bytes32 _messageHash) public pure returns ( bytes32){
        return keccak256(abi.encodePacked(
            "\x19Ethereum Signed Message:\n32",_messageHash));
    }

    function recover(bytes32 _ethSignMessageHash, bytes memory _sig) public pure returns (address){
        (bytes32 r, bytes32 s, uint8 v) = _split(_sig);
        return ecrecover(_ethSignMessageHash, v, r, s);
    }

    function _split(bytes memory _sig) internal pure returns (bytes32 r, bytes32 s, uint8 v)
    {
        require(_sig.length == 65 , "invalid signature length");

        assembly {
            r := mload(add(_sig, 32))
            s := mload(add(_sig, 64))
            v := byte(0, mload(add(_sig, 64)))
        }
    }
}