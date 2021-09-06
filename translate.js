export class Translate {
  constructor (text) {
    this.textInput = text
    this._consonantList = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'z']
  }

  toRobberLanguage () {
    let translatedText = this.textInput
    this._consonantList.forEach(x => {
      translatedText = translatedText.toLowerCase().replace(new RegExp(x, 'g'), x + 'o' + x )
    })
    this.textInput = translatedText
    return translatedText
  }

  toNormalLanguage () {
    let normalizedText = this.textInput
    this._consonantList.forEach(x => {
      normalizedText = normalizedText.toLowerCase().replace(new RegExp(x + 'o' + x, 'g'), x )
    })
    this.textInput = normalizedText
    return normalizedText
  }

  checkIfRobberLanguage () {
    let isRobberLanguage = true
    for (let i = 0; i < this.textInput.length; i++) {
      if (!isRobberLanguage) return isRobberLanguage
      this._consonantList.forEach(x => {
        try {
          if (this.textInput[i].toLowerCase() === x) {
            if (this.textInput[i + 1].toLowerCase() === 'o' &&
            this.textInput[i + 2].toLowerCase() === x) {
              i += 2
            } else {
              isRobberLanguage = false
              return
            }
          }
        } catch (e) { return }
      })
    }
    return isRobberLanguage
  }

  getSentenceCount () {
    let exclamationMarkSeparator = this.textInput.split('!').join('.')
    let questionMarkSeparator = exclamationMarkSeparator.split('?').join('.')
    let dotSeparator = questionMarkSeparator.split('.')
    return dotSeparator.length - 1
  }

  getTextInput () {
    return this.textInput
  }
}