export function makeLooper(str) {
    let idx = 0;
    return () => str[idx++ % str.length];
}