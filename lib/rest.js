
/*
 * Module dependencies
 */ 

var parent = module.parent.exports
  , config = require('./config.json');

/*
 * Request url params
 */

var url_params = ['id','screen_name','slug','woeid','place_id'];

/*
 * Create REST API GET methods with convenient names from config.json file
 */ 

Object.keys(config.rest.get).forEach(function(key){
  parent.prototype[key] = function(params, callback){
    var method = config.rest.get[key];
    url_params.forEach(function(param){
      method = method.replace(':' + param, '');
    });
    this.get(method, params, callback);

    return this;
  };
});

/*
 * Create REST API POST methods with convenient names from config.json file
 */ 

Object.keys(config.rest.get).forEach(function(key){
  parent.prototype[key] = function(params, callback){
    var method = config.rest.post[key];
    url_params.forEach(function(param){
      method = method.replace(':' + param, '');
    });
    this.post(method, params, callback);

    return this;
  };
});