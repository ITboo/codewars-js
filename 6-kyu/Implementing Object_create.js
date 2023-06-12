Object.create = function (prototype, properties = {}) {
    if (typeof prototype !== "object") throw new TypeError();
    return Object.defineProperties({__proto__: prototype}, properties);
  };