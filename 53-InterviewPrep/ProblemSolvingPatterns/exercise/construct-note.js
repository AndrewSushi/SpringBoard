// add whatever parameters you deem necessary
function constructNote(message, letters) {
    const messageCount = {}
    const lettersCount = {}

    for (let char of message) {
        messageCount[char] = (messageCount[char] || 0) + 1
    }

    for (let char of letters) {
        lettersCount[char] = (lettersCount[char] || 0) + 1
    }

    for (let char in messageCount) {
        if (!lettersCount[char] || lettersCount[char] < messageCount[char]) {
            return false
        }
    }
    return true
}

module.exports = constructNote