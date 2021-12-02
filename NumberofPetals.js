function NumberofPetals(np){

    

    let SentenceObj = {
        1: "i love you",
        2: "a little",
        3: "a lot",
        4: "passionately",
        5: "madly",
        6: "not at all"

}
let valueofnp = np;
console.log(SentenceObj.hasOwnProperty(valueofnp));

if(SentenceObj.hasOwnProperty(valueofnp))
{
    console.log(SentenceObj[valueofnp]);
}

}

NumberofPetals(7);

