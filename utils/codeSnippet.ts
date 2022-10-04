export const wizardERC721 = `import "erc721a-upgradeable/contracts/ERC721AUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/token/common/ERC2981Upgradeable.sol";
import "@openzeppelin/contracts-upgradeable/security/ReentrancyGuardUpgradeable.sol";
import "@openzeppelin/contracts/utils/cryptography/MerkleProof.sol";
import "@openzeppelin/contracts/utils/Strings.sol";

import {Errors} from "./libraries/Errors.sol";
import {Events} from "./libraries/Events.sol";

contract ERC721A is
    ERC721AUpgradeable,
    OwnableUpgradeable,
    ERC2981Upgradeable,
    ReentrancyGuardUpgradeable
{
    /// @notice Contract merkle root
    bytes32 public merkleRoot;

    /// @notice Mapping of address to whitelist claimed bool
    mapping(address => bool) public whitelistClaimed;

    /// @notice Contract uri prefix
    string public uriPrefix;

    /// @notice Contract uri suffix
    string public uriSuffix;

    /// @notice Contract hidden metadata uri
    string public hiddenMetadataUri;

    /// @notice Mint cost
    uint256 public cost;

    /// @notice Contract maxSupply
    uint256 public maxSupply;

    /// @notice Max mint amount per transaction
    uint256 public maxMintAmountPerTx;

    /// @notice Contract status state
    bool public paused;

    /// @notice Contract whitelist mint state
    bool public whitelistMintEnabled;

    /// @notice Contract revealed state
    bool public revealed;`

export const wizardERC1155 = `import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/token/common/ERC2981Upgradeable.sol";
import "@openzeppelin/contracts-upgradeable/token/ERC1155/ERC1155Upgradeable.sol";

import {Events} from "./libraries/Events.sol";

contract ERC1155 is ERC1155Upgradeable, ERC2981Upgradeable, OwnableUpgradeable {
    /// @notice Contract name
    string public name;

    /// @notice Contract symbol
    string public symbol;

    /// @notice Mapping of uint (tokenId) to tokenURI
    mapping(uint => string) public tokenURI;

    /// @notice Emmited on initialize()
    /// @param _name Contract name
    /// @param _symbol Contract symbol
    /// @param _id Token id
    /// @param _amount Token supply
    /// @param _uri Token uri
    /// @param _royaltyReceiver Royalty fee collector
    /// @param _feePercent Royalty fee numerator; denominator is 10,000. So 500 represents 5%
    /// @param _owner Contract owner
    event InitializedContract(
        string indexed _name,
        string indexed _symbol,
        uint256 _id,
        uint256 _amount,
        string _uri,
        address _royaltyReceiver,
        uint96 _feePercent,
        address indexed _owner
    );`
