# Cocos Creator Support (JavaScript)
NEO-Cocos-SDK is a NEO's JavaScript libraries for Cocos Creator, which is based on [neon-js](https://github.com/CityOfZion/neon-js). It is also very easy to integrate into Cocos Creator to create NEO blockchain games with quick and easy methods to send RPC calls, create transactions and simple contract invocations with NEO blockchain.

## 1. Prerequisites
* NodeJs/npm
* [Cocos creator](https://cocos2d-x.org/download)
* NEO-Cocos-SDK
## 2. Using NEO-Cocos-SDK with Cocos Creator
After you installed NodeJs and Cocos Creator, you can start creating your blockchain games using Cocos Creator. 

In order to demonstrate how to use NEO-Cocos-SDK with Cocos Creator, we provide a demo with basic wallet function.  Once you finish this demo, you can explore more functions, such as creating transactions, writing smart contract and invocations.

 1. Download and install [Cocos Creator](https://cocos2d-x.org/download).
 2. Download the demo code [here](./demo/cocosDemo).
 3. Open the demo project in Cocos Creator.
    \
    \
     <img src="../images/cocos-new.png" alt="new project" height="300">
 
 4. Integrate NEO-Cocos-SDK into your game project
 \
 You need to run the following command to install neon-js package into your game project  under `cocosDemo` main folder.

     ```JavaScript
     npm i @cityofzion/neon-js
     ```

    After installing neon-js, related `node-modules` will be downloaded into your project. 

     <img src="../images/cocos-npm.png" alt="npm sdk" height="200">
     <img src="../images/cocos-folder.png" alt="folder" height="200">
 
 5. Using NEO-Cocos-SDK to interact with NEO TestNet.
 
    All the code down blow could be found in `.\demo\cocosDemo\assets\script\wallet.js`
    
    import required packages from `NEO-Cocos-SDK`
    ```
    const { default: Neon, api, wallet, tx, rpc, CONST, nep5, u } = require("@NEO-Cocos-SDK");
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
 6. Now you can open the `neoWallet` screen & click run button to see the result with browser mode 
    \
    \
     <img src="../images/cocos-run.png" alt="run project" height="300">
    
    You need to use encrypted key and password to open a wallet, and then query its balance.
    \
    \
     <img src="../images/cocos-demo.png" alt="demo result" height="300">

Once you finish all the steps above, you should have learned: 
* how to integrate NEO-Cocos-SDK into Cocos Creator 
* how to write code to connect to NEO blockchain
* how to use NEO-Cocos-SDK to communicate with NEO blockchain

Now it is time to learn [NEO smart contract](../4.Smart_Contract_Development.md) and start building your NEO blockchain games with Cocos Creator. 

For more functions and usages of NEO-Cocos-SDK, please refence to [neon-js docs](http://cityofzion.io/neon-js/docs/en/api/index.html).

## 3. Sample
*coming soon* 
