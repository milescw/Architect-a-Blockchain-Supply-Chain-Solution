const HDWalletProvider = require("truffle-hdwallet-provider");
module.exports = {
  networks: {
    // ganache: {
    //   host: '127.0.0.1',
    //   port: 7545,
    //   network_id: '*' // Match any network id
    // },
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*" // Match any network id
    },
    rinkeby: {
      provider: function () {
        return new HDWalletProvider(
          "<your metamask seed",
          "get from infura");
      },
      network_id: "4",
      gas: 4500000,
      gasPrice: 10000000000,
    }
  },
  compilers: {
    solc: {
      version: "^0.4.24" // ex:  "0.4.20". (Default: Truffle's installed solc)
    }
  }
};