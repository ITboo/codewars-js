Array.prototype.map = function (cb,context){
    const length = this.length
    const arr = new Array(length)
    for (let i=0;i<length;i++){
      if (i in this){
        arr[i]=cb.call(context,this[i],i,this)
      }
    }
    return arr
  }