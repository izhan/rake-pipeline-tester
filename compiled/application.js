(function(__dependency1__) {
  "use strict";
  "use strict";
  var get = function(obj, key) {
    return obj[key];
  };

  var set = function(obj, key, value) {
    obj[key] = value;
    return obj;
  };

  exports.get = get;
  exports.set = set;

  var get = __dependency1__.get;
  var set = __dependency1__.set;
})(testing.ember);