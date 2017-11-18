module.exports=(function(){
    const SHA256=require('crypto-js/sha256');
    class Block{
         constructor(index,timestamp,previousHash='',data){
             this.index=index;
             this.timestamp=timestamp;
             this.previousHash=previousHash;
             this.data=data;
             this.nonce=2;
             this.hash=this.calculateHash();
         }
          calculateHash(){
            return SHA256(this.index+this.timestamp+this.previousHash+JSON.stringify(this.data)+this.nonce).toString();
         }
    }

    function init(data){
               if(data == 'FirstBlock'){
                   return new Block(0,Date.now(),'0',{info:'This is Genesis Block'});
               }
    }
    return{init:init}
})();