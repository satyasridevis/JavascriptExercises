function startsWith(string,checkstring)
{
    if(string.substr(0,checkstring.length) === checkstring)
    {
       // console.log("true");
    }
    else
    {
        //console.log("false");
    }
}

startsWith("hello world", "l");



function employee(name, jobtitle, born) {
    this.name = name;
    this.jobtitle = jobtitle;
    this.born = born;
    
  }
  employee.prototype.salary = 2000;
  employee.prototype.department = "archeology";
  
  var fred = new employee("Fred Flintstone", "Caveman", 1970);
  //console.log(fred);


  if (!String.prototype.startsWith)
{
  String.prototype.startsWith = function (searchString, position) {
    position = position || 0;
    return this.substr(position, searchString.length) === searchString;
  };
}

  "udacity".startsWith("uda");  