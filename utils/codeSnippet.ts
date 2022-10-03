export const wizardFactory = `import "@openzeppelin/contracts/proxy/Clones.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol";

import {Errors} from "./libraries/Errors.sol";

import "./interfaces/IERC721A.sol";
import "./interfaces/IERC1155.sol";
import "./interfaces/IWizardStorage.sol";

/// @title Wizard Factory
/// @notice Factory that creates ERC contracts
contract WizardFactory is Ownable, ReentrancyGuard {
    /// @notice Emitted on ERC Contracts create
    /// @param createdContract Address of deployed Contract
    /// @param name Contract name
    /// @param symbol Contract symbol
    /// @param royaltyReceiver Royalty fee collector
    /// @param contractOwner Contract owner
    event ContractCreated(
        address indexed createdContract,
        string name,
        string symbol,
        ERCType contractType,
        address indexed royaltyReceiver,
        address indexed contractOwner
    );

    /// @notice ERC contract types
    enum ERCType {
        ERC721A,
        ERC1155
    }

    /// @notice Contract deployment cost in wei as usd
    int public cost;

    /// @notice AggregatorV3Interface priceFeed address
    AggregatorV3Interface public priceFeed;

    /// @notice Wizard Storage Implementation
    address public WizardStorageImplementation;

    /// @notice ERC721A contract to be cloned
    address public ERC721AImplementation;

    /// @notice ERC1155 contract to be cloned
    address public ERC1155Implementation;

    /// @notice Emmited on one of setERCImplementation()
    /// @param ercImplementation implementation of contract
    event SetERCImplementation(address indexed ercImplementation);

    /// @notice Constructor
    /// @param _cost Contract deployment cost
    /// @param priceFeedAddress AggregatorV3Interface priceFeed address
    constructor(int _cost, address priceFeedAddress) {
        cost = _cost;
        priceFeed = AggregatorV3Interface(priceFeedAddress);
    }`

export const wizardStorage = `import "@openzeppelin/contracts/access/Ownable.sol";

import {Errors} from "./libraries/Errors.sol";

/// @title Wizard Storage
/// @notice Storage that store ERC contracts
contract WizardStorage is Ownable {
    address public factory;

    /// @notice Created ERC contract
    struct CreatedContract {
        uint8 _type;
        address _address;
    }

    /// @notice Mapping of address (deployer) to created contracts
    mapping(address => CreatedContract[]) public createdContracts;

    /// @notice Constructor
    /// @param _factory factory address
    constructor(address _factory) {
        factory = _factory;
    }

    function addCreatedContract(address _deployer, uint8 _ERCType, address _addr) external {
        if(factory != msg.sender) {
            revert Errors.CallerIsNotTheFactory();
        }

        createdContracts[_deployer].push(
            CreatedContract({_type: _ERCType, _address: _addr})
        );
    }
`

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
