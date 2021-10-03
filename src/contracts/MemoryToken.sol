// SPDX-License-Identifier: MIT

pragma solidity >=0.6.0 <0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/math/SafeMath.sol";

contract MemoryToken is ERC721 {
    using SafeMath for uint256;

    constructor() ERC721("MemoryToken", "MEMORY") {}

    function mint(address _to, string memory _tokenURI) public returns (bool) {
        uint256 _tokenId = totalSupply().add(1);
        _mint(_to, _tokenId);
        _setTokenURI(_tokenId, _tokenURI);
        return true;
    }
}
