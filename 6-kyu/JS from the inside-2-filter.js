Array.prototype.filter = function(f, receiver) {
    var len = this.length
    var acc = []
    for (var i = 0; i < len; i++) {
      if (i in this && f.call(receiver, this[i], i, this)) {
        acc.push(this[i])
      }
    }
    return acc
  }