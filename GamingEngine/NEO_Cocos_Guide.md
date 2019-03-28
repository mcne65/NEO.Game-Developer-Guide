# Cocos Creator Support (JavaScript)
neo-cocos-sdk is a NEO's JavaScript library for Cocos Creator, which is based on [neon-js](http://cityofzion.io/neon-js/en/). It is also very easy to integrate into Cocos Creator to create NEO blockchain games with quick and easy methods to create NEO wallet,  send RPC calls, create transactions and simple contract invocations with NEO blockchain.

## 1. Prerequisites
* NodeJs/npm
* [Cocos Creator](https://cocos2d-x.org/download)
* neo-cocos-sdk
## 2. Using neo-cocos-sdk with Cocos Creator
After installing NodeJs and Cocos Creator, developers can start building your blockchain games using Cocos Creator. 

In order to demonstrate how to use neo-cocos-sdk with Cocos Creator, we provide a demo with basic wallet functions.  Once they finish this demo, they can explore more functions, such as creating transactions, writing smart contract and invocations.

 1. Download and install [Cocos Creator](https://cocos2d-x.org/download)
 2. Download the cocos demo code [here](./demo/cocosDemo)
 3. Integrate neo-cocos-sdk into the demo project
 \
 Developers need to run the following command to install neo-cocos-sdk package into their game project under `cocosDemo` main folder.

     ```JavaScript
     npm install neo-cocos-sdk
     ```

    After installing neo-cocos-sdk, related `node-modules` will be downloaded into the project. 

     <img src="../images/cocos-npm.png" alt="npm sdk" height="200">
     <img src="../images/cocos-folder.png" alt="folder" height="200">
 4.  Open the demo project in Cocos Creator.
    \
    \
     <img src="../images/cocos-new.png" alt="new project" height="300">
 
 5. Using neo-cocos-sdk to interact with NEO TestNet.
 
    All the code down below could be found in `./demo/cocosDemo/assets/script/wallet.js`
    
    import required packages from `neo-cocos-sdk`
    ```
    const { default: Neon, api, wallet, tx, rpc, CONST, nep5, u } = require("neo-cocos-sdk");
    ```

    Connect to TestNet
    ```
    var network = "http://seed2.neo.org:20332";
    var rpcClient = new rpc.RPCClient(network);
    ```

    Open wallet & query balance
    ```
    var account = new wallet.Account(encrytedKey);
    account.decrypt(password)
    .then(decrptedAcc => {
        var address = decrptedAcc.address;
        rpcClient.getAccountState(address).then......
    }
    ```
 6. Now it is time to open the `neoWallet` screen & click run button to see the result with browser mode 
    \
    \
     <img src="../images/cocos-run.png" alt="run project" height="300">
    
    Encrypted key and password are required to open a wallet, and wallet balance will be queried automatically.
    \
    \
     <img src="../images/cocos-demo.png" alt="demo result" height="300">

Once developers finish all the steps above, they should have learned: 
* how to integrate neo-cocos-sdk into Cocos Creator 
* how to write code to connect to NEO blockchain
* how to use neo-cocos-sdk to communicate with NEO blockchain

Now it is time to learn [NEO smart contract](../4.Smart_Contract_Development.md) and start building NEO blockchain games with Cocos Creator. 

For more functions and usages of neo-cocos-sdk, please refer to [neon-js docs](http://cityofzion.io/neon-js/docs/en/api/index.html).

## 3. Sample
*coming soon* 
