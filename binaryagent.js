function binarytodecimal(str)
{
let final =0; let newarr =[];
for(let i=0;i<str.length;i++)
{
final = final * 2 + Number(str[i]);
}
return final;
}

function binaryAgent(words)
{ 
    const obj = {
        65:'A',
        114:'r',
        101:'e',
        110:'n',
        39:"'",
        116:'t',
        32:' ',
        98:'b',
        111:'o',
        110:'n',
        102:'f',
        105:'i',
        114:'r',
        101:'e',
        115:'s',
        32:' ',
        102:'f',
        117:'u',
        110:'n',
        33:'!',
        63:'?',
        73:'I',
        108:'l',
        118:'v',
        70:'F',
        67:'C',
        100:'d',
        97:'a',
        109:'m',
        112:'p'
}
words =words.split(" ");
// console.log(words)
let values;let newarr =[]; let prop; let result;
    for(let i=0;i<words.length;i++) 
    {
          values = binarytodecimal(words[i]);
          newarr.push(values);
    }
    
console.log(" MY ARRAY", newarr);
let string ="";
for(let i=0;i<newarr.length;i++)
{
    if(obj.hasOwnProperty(newarr[i]))
    {
        prop = newarr[i];
        result = obj[prop];
        //console.log(result)
        string+=result;
        }
   }
console.log(string)

}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");
binaryAgent("01001001 00100000 01101100 01101111 01110110 01100101 00100000 01000110 01110010 01100101 01100101 01000011 01101111 01100100 01100101 01000011 01100001 01101101 01110000 00100001")

