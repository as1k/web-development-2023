var addTwoPromises = async function(promise1, promise2) {
    let values = await Promise.all([promise1, promise2])
    return values[0] + values[1]
};
