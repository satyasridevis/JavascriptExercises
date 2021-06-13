function rot13(str) {
  let result ="";
  let val;
   let string = "";
  const rot ={
    A:'N',
    B:'O',
    C:'P',
    D:'Q',
    E:'R',
    F:'S',
    G:'T',
    H:'U',
    I:'V',
    J:'W',
    K:'X',
    L:'Y',
    M:'Z',
    N:'A',
    O:'B',
    P:'C',
    Q:'D',
    R:'E',
    S:'F',
    T:'G',
    U:'H',
    V:'I',
    W:'J',
    X:'K',
    Y:'L',
    Z:'M',
    ' ':' ',
    '?':'?',
    '!':'!',
    '.':'.'

  }

  for(let i =0;i<str.length;i++)
  {
    if(rot.hasOwnProperty(str[i]))
    val = str[i];
    result = rot[val];
    
     string+=result;
     
    
  }
  
  console.log(string);
 
}

rot13("SERR PBQR PNZC");
rot13("SERR CVMMN!")
rot13("HELLO");