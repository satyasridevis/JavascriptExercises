function solution(string) {
  let character, result, stringArr, filterArr

  if (string === string.toLowerCase() || string === "") {
    return string
  } else {
    stringArr = string.split("")
    console.log(stringArr)

    // filterArr = stringArr.filter((e) => e === e.toUpperCase())
    // console.log(filterArr)

    for (i of stringArr) {
      if (i === i.toUpperCase()) {
        console.log(stringArr.indexOf(i))
        // result = string.replace(i, ` ${i}`)
        // return result
      }
    }
    // for (let i = 0; i < filterArr.length; i++) {
    //   console.log(filterArr[i])
    // result = string.replaceAll(filterArr[i], ` ${filterArr[i]}`)
    // return result
  }
}

//console.log(solution("camelCase"))
console.log(solution("camelCaseTest"))
//console.log(solution("camel"))
