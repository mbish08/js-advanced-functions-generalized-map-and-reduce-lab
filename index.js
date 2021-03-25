function map(src, callBack) {
    let array = []
    for (let i=0; i < src.length; i++) {
        let element = src[i]
        array.push(callBack(element))
    }
    return array
}

function reduce(src, callBack, startValue=0) {
    let r = (!!startValue) ? startValue : src[0]
    let i = (!!startValue) ? 0 : 1

    for (; i < src.length; i++) {
        r = callBack(src[i], r)
    }
  return r;
}