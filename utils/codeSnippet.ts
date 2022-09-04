export const erc721Snippet = `import "erc721a/contracts/ERC721A.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@openzeppelin/contracts/utils/cryptography/MerkleProof.sol";

contract ERC721Contract is ERC721A, Ownable, ReentrancyGuard {

  using Strings for uint256;

  bytes32 public merkleRoot;
  mapping(address => bool) public whitelistClaimed;

  string public uriPrefix = '';
  string public uriSuffix = '.json';
  string public hiddenMetadataUri;
  
  uint256 public cost;
  uint256 public maxSupply;
  uint256 public maxMintAmountPerTx;

  bool public paused = true;
  bool public whitelistMintEnabled = false;
  bool public revealed = false;

  constructor(
    string memory _tokenName,
    string memory _tokenSymbol,
    uint256 _cost,
    uint256 _maxSupply,
    uint256 _maxMintAmountPerTx,
    string memory _hiddenMetadataUri,
    address _newOwner
  ) ERC721A(_tokenName, _tokenSymbol) {
    cost = _cost;
    maxSupply = _maxSupply;
    maxMintAmountPerTx = _maxMintAmountPerTx;
    setHiddenMetadataUri(_hiddenMetadataUri);
    transferOwnership(_newOwner);
  }
`

export const erc1155Snippet = `import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";

contract ERC1155Contract is ERC1155, Ownable {
    
  string public name;
  string public symbol;

  mapping(uint => string) public tokenURI;

  constructor(
    string memory _name, 
    string memory _symbol, 
    uint256 _id,
    uint256 _amount,
    string memory _uri,
    address _newOwner
  ) ERC1155("") {
    name = _name;
    symbol = _symbol;
    _mint(_newOwner, _id, _amount, "");
    tokenURI[_id] = _uri;
    transferOwnership(_newOwner);
  }

  function mint(address _to, uint _id, uint _amount) external onlyOwner {
    _mint(_to, _id, _amount, "");
  }
`
