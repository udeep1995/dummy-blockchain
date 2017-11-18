module.exports=(function(){
    // let block_route=require('./block_route');
    let blockchain_route=require('./blockchain_route');
    function init(config){
        blockchain_route.init(config);
    }
    return{init:init};
})();