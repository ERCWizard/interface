export const wizardFactory = `import "@openzeppelin/contracts/proxy/Clones.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol";

import "./WizardErrors.sol";
import "./interfaces/IERC721.sol";
import "./interfaces/IERC1155.sol";

contract WizardFactory is Ownable, ReentrancyGuard {
    /// @notice Emitted on createERC721Contract()
    /// @param createdContract Address of deployed Contract
    /// @param name Contract (ERC721) name
    /// @param symbol Contract (ERC721) symbol
    /// @param cost Mint cost
    /// @param maxSupply Contract (ERC721) maxSupply
    /// @param maxMintAmountPerTx Max mint amount per transaction
    /// @param hiddenMetadataUri Hidden metadata uri
    /// @param uriPrefix Metadata uri prefix
    /// @param royaltyReceiver Royalty fee collector
    /// @param royaltyFee Royalty fee numerator
    /// @param contractOwner Contract owner
    event ERC721ContractCreated(
        address indexed createdContract,
        string name,
        string symbol,
        uint256 cost,
        uint256 maxSupply,
        uint256 maxMintAmountPerTx,
        string hiddenMetadataUri,
        string uriPrefix,
        address indexed royaltyReceiver,
        uint96 royaltyFee,
        address indexed contractOwner
    );`

export const wizardERC721 = `import "erc721a-upgradeable/contracts/ERC721AUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/token/common/ERC2981Upgradeable.sol";
import "@openzeppelin/contracts-upgradeable/security/ReentrancyGuardUpgradeable.sol";
import "@openzeppelin/contracts/utils/cryptography/MerkleProof.sol";
import "@openzeppelin/contracts/utils/Strings.sol";

import "./WizardErrors.sol";

contract ERC721 is ERC721AUpgradeable, OwnableUpgradeable, ERC2981Upgradeable, ReentrancyGuardUpgradeable {
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

import "./WizardErrors.sol";

contract ERC1155 is ERC1155Upgradeable, ERC2981Upgradeable, OwnableUpgradeable {
    /// @notice Contract name
    string public name;

    /// @notice Contract symbol
    string public symbol;

    /// @notice Mapping of uint (tokenId) to tokenURI
    mapping(uint => string) public tokenURI;

    /// @notice Emmited on setRoyaltyInfo()
    /// @param royaltyReceiver Royalty fee collector
    /// @param feePercent Royalty fee numerator; denominator is 10,000. So 500 represents 5%
    event RoyaltyInfoChanged(
        address indexed royaltyReceiver,
        uint96 feePercent
    );

    /// @notice Emmited on setTokenRoyaltyInfo()
    /// @param tokenId Token ID royalty to be set
    /// @param royaltyReceiver Royalty fee collector
    /// @param feePercent Royalty fee numerator; denominator is 10,000. So 500 represents 5%
    event TokenRoyaltyInfoChanged(
        uint256 tokenId,
        address indexed royaltyReceiver,
        uint96 feePercent
    );`
