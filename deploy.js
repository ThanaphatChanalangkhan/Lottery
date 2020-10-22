const fs = require("fs");
const Web3 = require("web3");
const mnemonic = "bike slot flush decade quit solve parent fringe open remind auction discover"
const truffleURL = "https://rinkeby.infura.io/v3/fca098e8f13544a3b30233dbe25f5b3c"
const HDWalletProvider = require("truffle-hdwallet-provider");
const provider = new HDWalletProvider(mnemonic, truffleURL)
const web3 = new Web3(provider);
const bytecode = fs.readFileSync('./build/__contracts_lottery_sol_Lottery.bin');
const abi = JSON.parse(fs.readFileSync('./build/__contracts_lottery_sol_Lottery.abi'));
const deploy = async() => {
    accounts = await web3.eth.getAccounts()
    console.log("Trying to deploy from accounts ", accounts[0]);
    lottery = await
    new web3.eth.Contract(abi)
        .deploy({ 
            data: '0x'+bytecode, 
        }).send({
            from: accounts[0], 
            gas:'1000000'
    });
    console.log('contract deployed to',lottery.options.address);
    process.exit();
};
deploy();