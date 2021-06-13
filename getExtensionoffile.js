var extArray = ["exe", "pdf", "epub","js","docx","mobi","jpg","png"];



function getExtension(fileName)
{
    
    var twoext = fileName.substring(fileName.length - 2,fileName.length);
    var threeext = fileName.substring(fileName.length - 3,fileName.length);
    var fourext = fileName.substring(fileName.length - 4,fileName.length);
    
    for(var i = 0; i < extArray.length; i++)
    {
    
        if(extArray[i] === twoext || extArray[i] === threeext || extArray[i] === fourext)
        {
            console.log(extArray[i]);
            
        }
        else {
            return "no matching file extension";
        }

       
    }

}

getExtension("first.exe");