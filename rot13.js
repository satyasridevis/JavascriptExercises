const rot13 = (message) => {
  const alphabets = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
  const rot13cipher = "nopqrstuvwxyzabcdefghijklmNOPQRSTUVWXYZABCDEFGHIJKLM"
  return message.replace(
    /[a-z]/gi,
    (letter) => rot13cipher[alphabets.indexOf(letter)]
  )
}

console.log(rot13("afgG"))
