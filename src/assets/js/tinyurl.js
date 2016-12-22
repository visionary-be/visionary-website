/**
 *  Javascript AlphabeticID class
 *  (based on a script by Kevin van Zonneveld &lt;kevin@vanzonneveld.net>)
 *
 *  Author: Even Simon &lt;even.simon@gmail.com>
 *
 *  Description: Translates a numeric identifier into a short string and backwords.
 *
 *  Usage:
 *    var str = AlphabeticID.encode(9007199254740989); // str = 'fE2XnNGpF'
 *    var id = AlphabeticID.decode('fE2XnNGpF'); // id = 9007199254740989;
 **/

var AlphabeticID = {
  index:'abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ',

  /**
   *  @function AlphabeticID.encode
   *  @description Encode a number into short string
   *  @param integer
   *  @return string
   **/
  encode:function(_number){
    if('undefined' == typeof _number){
      return null;
    }
    else if('number' != typeof(_number)){
      throw new Error('Wrong parameter type');
    }

    var ret = '';

    for(var i=Math.floor(Math.log(parseInt(_number))/Math.log(AlphabeticID.index.length));i>=0;i--){
      ret = ret + AlphabeticID.index.substr((Math.floor(parseInt(_number) / AlphabeticID.bcpow(AlphabeticID.index.length, i)) % AlphabeticID.index.length),1);
    }

    return ret.reverse();
  },

  /**
   *  @function AlphabeticID.decode
   *  @description Decode a short string and return number
   *  @param string
   *  @return integer
   **/
  decode:function(_string){
    if('undefined' == typeof _string){
      return null;
    }
    else if('string' != typeof _string){
      throw new Error('Wrong parameter type');
    }

    var str = _string.reverse();
    var ret = 0;

    for(var i=0;i<=(str.length - 1);i++){
      ret = ret + AlphabeticID.index.indexOf(str.substr(i,1)) * (AlphabeticID.bcpow(AlphabeticID.index.length, (str.length - 1) - i));
    }

    return ret;
  },

  /**
   *  @function AlphabeticID.bcpow
   *  @description Raise _a to the power _b
   *  @param float _a
   *  @param integer _b
   *  @return string
   **/
  bcpow:function(_a, _b){
    return Math.floor(Math.pow(parseFloat(_a), parseInt(_b)));
  }
};

/**
 *  @function String.reverse
 *  @description Reverse a string
 *  @return string
 **/
String.prototype.reverse = function(){
  return this.split('').reverse().join('');
};