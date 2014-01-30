// Generated by CoffeeScript 1.3.3
(function() {
  var EcoCompiler, eco, umd;

  eco = require('eco');

  umd = require('umd-wrapper');

  module.exports = EcoCompiler = (function() {

    EcoCompiler.prototype.brunchPlugin = true;

    EcoCompiler.prototype.type = 'template';

    EcoCompiler.prototype.extension = 'eco';

    function EcoCompiler(config) {
      var ecoConfig, _ref;
      this.config = config;
      ecoConfig = (_ref = this.config.plugins) != null ? _ref.eco : void 0;
      if (ecoConfig) {
        if (typeof ecoConfig.overrides === "function") {
          ecoConfig.overrides(eco);
        }
        this.namespace = ecoConfig.namespace;
      }
    }

    EcoCompiler.prototype.compile = function(data, path, callback) {
      var error, key, ns, result, source;
      try {
        source = eco.compile(data).toString();
        result = this.namespace ? (ns = this.namespace, key = path.replace(/^.*templates\//, '').replace(/\..+?$/, ''), "if (typeof " + ns + " === 'undefined'){ " + ns + " = {} }; " + ns + "['" + key + "'] = " + source) : umd(source);
      } catch (err) {
        error = err;
      }
      return callback(error, result);
    };

    return EcoCompiler;

  })();

}).call(this);