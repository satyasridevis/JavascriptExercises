function domainName(str) {
  //   const regex =
  //     /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/;(?:http(s)?:\/\/)
  const regex = /(?:http(s)?:\/\/)|.com|www.|.co.jp|.ru|\/\w+/;

  const result = str.split(regex);
  //   const result = regex.test(str);
  //console.log(result);
  for (let name of result) {
    //  console.log(name);
    let type = typeof name;
    if (type == "string") if (name.length > 1) console.log(name);
  }
}

domainName("https://www.cnet.com");
domainName("http://google.com");
domainName("http://github.com/carbonfive/raygun");
domainName("http://www.zombie-bites.com");
domainName("http://google.co.jp");
domainName("www.xakep.ru");
