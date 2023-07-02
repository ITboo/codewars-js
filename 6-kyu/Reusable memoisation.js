const memo = (fn, cache = new Map()) => (arg) => (
    cache.has(arg) ? cache : cache.set(arg, fn(arg))
  ).get(arg)