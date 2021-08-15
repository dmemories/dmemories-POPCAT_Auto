const maxLoop = Number.MAX_SAFE_INTEGER
const delay = 75

const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

(async() => {
    for (let i = 0; i < maxLoop; i++) {
        await new Promise((succ, fail) => {
            setTimeout(succ, delay)
        })
        let char = String.fromCharCode(getRandomInt(97, 122))
        let event = new KeyboardEvent('keydown', {key: char})
        document.dispatchEvent(event);
    }
})()