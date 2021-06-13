const bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];


function add (arr,bookName) {
     let newarr = [...arr];
    newarr.push(bookName);
    return newarr;
    
    // Change code above this line
  }

  var newBookList = add(bookList, 'A Brief History of Time');
  console.log(bookList);
  console.log(newBookList);
