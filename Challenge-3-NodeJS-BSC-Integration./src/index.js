const Web3 = require('web3');
const { Transaction } = require('@ethereumjs/tx');
const Common = require('@ethereumjs/common').default;
const fs = require('fs');

const web3 = new Web3('https://data-seed-prebsc-1-s1.binance.org:8545/');

const account = '0x416191f900977e7562aABD168A667A518bAF3cd6'; 
const privateKey = Buffer.from('e4aed8d219d16d[Enter Your Private Key]10195a56f1b3fc8067f', 'hex');

const contractAddress = '0x78867BbEeF44f2326bF8DDd1941a4439382EF2A7'; // The BUSD testnet token address

const contractABI = JSON.parse(fs.readFileSync('abi.json', 'utf-8')); // Assume that you have the ABI of BUSD token in the same directory 

const contract = new web3.eth.Contract(contractABI, contractAddress);

async function getTotalSupply() {
  const totalSupply = await contract.methods.totalSupply().call();
  console.log('Total Supply: ' + totalSupply);
}

async function mint(to, amount) {
  const data = contract.methods.mint(to, amount).encodeABI();

  const txCount = await web3.eth.getTransactionCount(account);

  const customCommon = Common.forCustomChain(
    'testnet',
    {
      name: 'bsc-testnet',
      networkId: 97,
      chainId: 97,
    },
    'India',
  );

  const txObject = {
    nonce: web3.utils.toHex(txCount),
    to: contractAddress,
    value: '0x0',
    gasLimit: web3.utils.toHex(800000),
    gasPrice: web3.utils.toHex(web3.utils.toWei('20', 'gwei')),
    data: data,
  };

  const tx = Transaction.fromTxData(txObject, { common: customCommon });
  const signedTx = tx.sign(privateKey);

  const serializedTx = signedTx.serialize();
  const raw = '0x' + serializedTx.toString('hex');

  const receipt = await web3.eth.sendSignedTransaction(raw);
  console.log('Transaction receipt: ', receipt);
}

getTotalSupply()
  .then(() => mint("0xAb5801a7D398351b8bE11C439e05C5B3259aeC9B", 1000))
  .then(() => getTotalSupply())
  .catch((err) => console.log('Error: ', err));
