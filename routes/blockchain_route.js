module.exports = (function () {
    let block_route = require('./block_route');
    var blockChain=[];
   
        function  createGenesisBlock() {
            return new block_route.init('FirstBlock');
        }
       function getLatestBlock(req,res) {
             res.send(JSON.stringify(blockChain[blockChain.length - 1]));
        }
    function init(config) { 
            blockChain.push(createGenesisBlock());
            config.app.get('/block',getLatestBlock);
            
    }
    return { init: init }
})();