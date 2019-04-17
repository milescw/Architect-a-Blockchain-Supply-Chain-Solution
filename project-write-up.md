## Project write-ups ##
   
##### Project write-up - UML 
includes  following UML diagrams:

   * [Activity diagram](documentation/Coconut-SupplyChain-Activity-Diagram.png)
   * [Sequence diagram](documentation/Coconut-SupplyChain-Sequence-Diagram.png)
   * [State diagram](documentation/Coconut-SupplyChain-State-Diagram.png)
   * [Classes diagram](documentation/Coconut-SupplyChain-Class-Diagram.png)
   
##### Project write-up - Libraries 
Following libraries are used in this project:
*   Roles.sol : alows managing addresses assigned to a Role. 
*   Ownable.sol : provides basic authorization control
functions, thereby simplifing the implementation of "user permissions".

##### Project write-up - Libraries 
IPFS is not used in this project at this time.


## Smart contracts 
Following contracts are created to implement the solution.
```
├─ contracts
  ├── coconutbase :  Includes contracts of the most fundamental code shared throughout the core functionality. This includes main data storage, constants and data types, plus internal functions for managing these items.
      ├── SupplyChain.sol  # main contract to manage supply chain
  ├── coconutcore :  includes contract that controls ownership and transfer of ownership.
      ├── Ownable.sol  # provides basic authorization control
  ├── coconutaccesscontrol : These contracts manages the various addresses and constraints for operations that can be executed only by specific roles.
      ├── Role.sol  # manages the addresses assigned to a Role
      ├── FarmerRole.sol  # manages the Role Farmer 
      ├── Distributor.sol  # manages the Role Distributor 
      ├── Retailer.sol  # manages the Role Retailer 
      ├── Consumer.sol  # manages the Role Consumer 
```

## Deployment on the Ethereum RINKEBY test network.
Deployment protocol:
```
truffle(develop)> compile
truffle(develop)> migrate --reset --network rinkeby
Using network 'rinkeby'.

Running migration: 1_initial_migration.js
  Replacing Migrations...
  ... 0x3ee7e6ffcef84f52d4a3b4e7071388b4cc7e930168d966348c16e1182d9737c9
  Migrations: 0x5a26f0b29ba0923085eb7f3b862947d0545e72d5
Saving successful migration to network...
  ... 0x819e413a636687bee780f6648f9996e825568caae5f838f30db524acfff9430e
Saving artifacts...
Running migration: 2_deploy_contracts.js
  Replacing FarmerRole...
  ... 0x3f7d450c73877c2ba5c551dedb6bbcb5c62606592bcce9befc070a9a968a3efa
  FarmerRole: 0x803b63683263c0a0675438d97a7493d4c730f2eb
  Replacing DistributorRole...
  ... 0x2d5e15b47d785c029d57953ebfeeba0a188e0d16c74f63bd9b3fb4e81524f2c6
  DistributorRole: 0xc6b946537e831df7e38d0ecb90754595d017c4a9
  Replacing RetailerRole...
  ... 0xbd07b2305ecebb72ee593164bc60dd89cb32106775b26cfb716b91a6e2740df5
  RetailerRole: 0xd0867e77bb43110d19b8091bcec6e06510111e91
  Replacing ConsumerRole...
  ... 0x6af5165ba4a7d8de32bcf19716535576dee7d23ed51f78decd769420254ee7de
  ConsumerRole: 0xeaea7a051541566be5cd6baa8d87ec1215b5f3e0
  Replacing SupplyChain...
  ... 0x5681ab9a5723c679905fcacc248fb54aca907e2916117135a726d9122dfcbeb7
  SupplyChain: 0xd8006dca5413fad4edf22593a7f069ea1f455be9
Saving successful migration to network...
  ... 0xd4f436b494fe559beca12a2ba9f93f472eca38809e1262b9fe5b4479370c26bd
Saving artifacts...
truffle(develop)>
```
## Deployed Contract on the Ethereum RINKEBY test network.
*   Contract ID : Place the contract ID here
*   View Contract on Rinkeby test network: Place the Rinkeby contract url here

## Transaction History on the Rinkeby test network.
```
• FarmerAdded - 0x1e78488ae2972d41566122bd7d7051c1ee67a6e1312814d298158a5b659ee101
• DistributorAdded - 0xd0ffc7ea552f341a7f75bd074c840c652f51614f564dd8fd90c701d915e0d7cb
• RetailerAdded - 0x94d22c6b73a254bdbe7987c0328361db244d357986066965b2494136a95afa72
• ConsumerAdded - 0x69f4903d8798b17d9cd61ba1dc59b92a2b273c0bb41179b226274359d140dfef
• Harvested - 0x51d5e2e658598a7631e2b81de261c64f283486456e34d10cd45ddf466a5197ba
• Processed - 0x300614aeda92a52358446742b9d59a75807a25623e06e3f71955746e764fe786
• Packed - 0xf0f2345a6cdd2055a31096c7635736656dbf2efd8b3653e286b4cb0b559eac2a
• ForSale - 0xe0a790608b165da3a1ed913dba5077f83adaf91fb2210f60f9cdb944f38d54a1
• Sold - 0x7c89bf2f703c6c46631c23b8c2f1447402891ece59848a3baa56738e37a9c7f9
• Shipped - 0xc7fc0715e815170c1053634e7f8e4e4e0803ff9d29d9a68cc4459957696fdf35

• Purchased - 0xf7e3792154a92fa910b8beb2fa110e77e0f21ca01e247e4346a43039739f1fd0

```

## Built With

* [Ethereum](https://www.ethereum.org/) - Ethereum is a decentralized platform that runs smart contracts
* [Truffle Framework](http://truffleframework.com/) - Truffle is the most popular development framework for Ethereum with a mission to make your life a whole lot easier.


## Authors

* Charles Miles

## Acknowledgments

* Solidity
* Ganache-cli
* Truffle