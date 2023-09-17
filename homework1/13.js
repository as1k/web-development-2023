var cancellable = function(fn, args, t) {
    let timeout = setTimeout(() => fn(...args), t)
    let cancel = () => clearTimeout(timeout)
    return cancel
};
