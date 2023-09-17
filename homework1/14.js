var cancellable = function(fn, args, t) {
    fn(...args)
    let interval = setInterval(() => { fn(...args) }, t)
    let cancel = () => clearInterval(interval)
    return cancel
};
