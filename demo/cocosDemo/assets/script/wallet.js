const { default: Neon, api, wallet, tx, rpc, CONST, nep5, u } = require("neo-cocos-sdk");
var network = "http://seed2.neo.org:20332";
var rpcClient = new rpc.RPCClient(network);
cc.Class({
    extends: cc.Component,

    properties: {
        button: cc.Button,
        neo: {
            default: null,
            type: cc.Label
        },
        gas: {
            default: null,
            type: cc.Label
        },
        key: cc.EditBox,
        password: cc.EditBox
    },

    onLoad: function () {  
        this.button.node.on('click', this.callback1, this);
    },

    callback1: function (button) {
        var encrytedKey = this.key.string;
        console.log(encrytedKey);
        var password = this.password.string;
        console.log(password);
        try
        {
            var account = new wallet.Account(encrytedKey);
            console.log(account);
            account.decrypt(password)
            .then(decrptedAcc => {
                console.log(decrptedAcc);
                var address = decrptedAcc.address;
                rpcClient.getAccountState(address)
                .then(result =>{
                    for(var balance of result.balances){
                        if(balance.asset === "0x"+CONST.ASSET_ID.NEO) {
                            this.neo.string = "NEO : " + balance.value;
                        }
                        if(balance.asset === "0x"+CONST.ASSET_ID.GAS) {
                            this.gas.string = "GAS : " + balance.value;
                        }
                    }                    
                })
                .catch(err => {
                    console.log(err);
                    this.neo.string="No asset";
                });
            })
            .catch(err => console.log(err));
        }
        catch(err)
        {
            console.log(err)
            this.neo.string="Wrong Passward!"
        }
        

    },
});
