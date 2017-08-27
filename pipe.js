const pipe = (...fns) => {
  if (fns.length <= 0) {
    return;
  }
  const firstArg = fns[0];
  if (fns.length <= 1) {
    return firstArg;
  }
  const isNotFn = a => typeof a !== "function";
  const allFuncs = fns.slice(1);
  const notFnIndex = allFuncs.findIndex(isNotFn);
  if (notFnIndex >= 0){
    throw new Error(`Function expected, but argument #${notFnIndex + 2} is ${typeof fns[notFnIndex]}`)
  }
  const composeFn = (f, g) => (...args) => g(f(...args))
  if (isNotFn(firstArg)){
    return allFuncs.reduce(composeFn)(firstArg)
  }
  return fns.reduce(composeFn)
}
