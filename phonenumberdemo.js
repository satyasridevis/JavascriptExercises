function telephoneCheck(str) {
let regex = /[1]\s[(]\d{3}[)]\s\d{3}[-]\d{4}|[1][(]\d{3}[)]\d{3}[-]\d{4}|[1]\s\d{3}[-]\d{3}[-]\d{4}|[1]\s\d{3}\s\d{3}\s\d{4}|[(]\d{3}[)]\s\d{3}[-]\d{4}|[(]\d{3}[)]\d{3}[-]\d{4}|\d{3}\s\d{3}\s\d{4}|\d{3}[-]\d{3}[-]\d{4}|\d{10}/g;
let result = regex.test(str);
return result;
}
telephoneCheck("555-555-5555");