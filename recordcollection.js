var collection = {
     
    2548: 
    {
        albumTitle: 'Slippery When Wet',
        artist: 'Bon Jovi',
        tracks: ['Let it Rock', 'You give love a bad name']
    },

    2468:
    {
        albumTitle: '1999',
        artist: 'Prince',
        tracks: ['1999','little red corvette']
    },

    1245:
    {
        artist: 'Robert Palmer',
        tracks: []
    },
    
    5439:
    {
        albumTitle: 'ABBA Gold'
    }


};

function updateRecords(object, id, prop, value)
{
    if(prop !== 'tracks' && value !== "") {
        collection[id][prop] = value;
      }
      
      if(prop === 'tracks' && collection[id][prop] === undefined) {
        collection[id][prop] = [];
      }
      
      if(prop === 'tracks') {
        let track = collection[id][prop];
        track.push(value)
      }
      
      if(value === "") {
        delete collection[id][prop]
      }

    console.log(object);
}


updateRecords(collection, 5439, 'tracks', "Take a Chance on Me");